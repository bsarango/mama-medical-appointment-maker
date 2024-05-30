from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from datetime import date
from config import bcrypt

from config import db

# Models go here!
class Patient(db.Model, SerializerMixin):
    __tablename__ = 'patients'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable = False)
    _password_hash = db.Column(db.String, nullable = False)
    name = db.Column(db.String, nullable=False)
    dob = db.Column(db.Date, nullable = False)
    address = db.Column(db.String)
    phone_number = db.Column(db.String)

    @validates('name')
    def validate_name(self, key, name):
        invalid_characters = ['!@#$%^&*()_+-=[]\}{><?/|1234567890']
        for c in invalid_characters:
            if c in name:
                raise ValueError("Invalid name. No numbers or special characters!")
            
        return name

    @validates('phone_number')
    def validate_phone_nunmber(self, key, phone_number):
        
        if phone_number != None: 
            if len(phone_number) != 10:
                raise ValueError("Invalid number, its not 10 digits")
            digits_for_number = '0123456789'
            for digit in phone_number:
                if digit not in digits_for_number:
                    raise ValueError("Invalid number. Only digits allowed")

        return phone_number

    @validates('dob')
    def validate_dob(self, key, dob):
        print(type(dob))
        today = date.today()
        valid_date = date(today.year-18, today.month, today.day)
        if dob >= valid_date:
            raise ValueError("Invalid date, the user must be 18 years or older. Must put in another date of birth")

        return dob

    @validates('username')
    def validate_username(self, key, username):
        if len(username)<7:
            raise ValueError("Username not long enough. Enter a username of 8 characters or longer")

        return username

    appointments = db.relationship('Appointment', back_populates='patient', cascade='all, delete-orphan')

    serialize_rules = ('-appointments.patient',)

    def __repr__(self):
	    return f'Patient Name: {self.name}'
	
    @hybrid_property
    def password_hash(self):
	    raise AttributeError("Cannot access password")
		
    @password_hash.setter
    def password_hash(self, password):
	    password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))

	    self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash,password.encode('utf-8'))

class Physician(db.Model, SerializerMixin):
    __tablename__= 'physicians'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable = False)
    last_name = db.Column(db.String, nullable = False)
    specialty = db.Column(db.String)
    office_address = db.Column(db.String, nullable = False)
    office_number = db.Column(db.String, unique = True, nullable = False)
    image = db.Column(db.String)

    @validates('first_name')
    def validate_name(self, key, first_name):
        invalid_characters = ['!@#$%^&*()_+-=[]\}{><?/|1234567890']
        for c in invalid_characters:
            if c in first_name:
                raise ValueError("Invalid name. No numbers or special characters!")
            
        return first_name

    @validates('last_name')
    def validate_name(self, key, last_name):
        invalid_characters = ['!@#$%^&*()_+-=[]\}{><?/|1234567890']
        for c in invalid_characters:
            if c in last_name:
                raise ValueError("Invalid name. No numbers or special characters!")
            
        return last_name

    @validates('specialty')
    def validate_specialty(self, key, specialty):
        specialties = ['primary care', 'cardiology', 'nephrology', 'obstetrics and gynecology', 'pulmonary', 'neurology', 'endocrinology', 'dermatology', 'pediatrics']
        
        if specialty not in specialties and specialty != None:
            raise ValueError("Invalid specialty for practice. Enter again")

        return specialty

    @validates('office_number')
    def validate_office_number(self, key, office_number):
        if len(office_number) != 10:
            raise ValueError("Invalid number, its not 10 digits")

        digits_for_number = '0123456789'
        for d in office_number:
            if d not in digits_for_number:
                raise ValueError("Invalid number. Only digits allowed")

        return office_number

    appointments = db.relationship('Appointment', back_populates = 'physician', cascade = 'all, delete-orphan')

    serialize_rules = ('-appointments.physician',)

    def __repr__(self):
        return f'Physician Name: {self.name} Specialty: {self.specialty}'

class Appointment(db.Model, SerializerMixin):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String,nullable = False)
    date_and_time = db.Column(db.DateTime, nullable = False)
    specialty = db.Column(db.String)
    details = db.Column(db.String, nullable= False)

    @validates('specialty')
    def validate_specialty(self, key, specialty):
        specialties = ['primary care', 'cardiology', 'nephrology', 'obstetrics and gynecology', 'pulmonary', 'neurology', 'endocrinology', 'dermatology', 'pediatrics']
        
        if specialty not in specialties and specialty != None:
            raise ValueError("Invalid specialty for practice. Enter again")

        return specialty
	
    patient_id = db.Column(db.Integer, db.ForeignKey('patients.id'))
    physician_id=db.Column(db.Integer, db.ForeignKey('physicians.id'))

    patient= db.relationship('Patient', back_populates = 'appointments')
    physician = db.relationship('Physician', back_populates = 'appointments')

    serialize_rules=('-patient.appointments', '-physician.appointments')

    def __repr__(self):
        return f'Appointment: {self.title}  Date: {self.date_and_time}'