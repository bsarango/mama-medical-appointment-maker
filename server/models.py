from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property

from config import db

# Models go here!
class Patient(db.Model, SerializerMixin):
    __tablename__ = 'patients'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable = False)
    _password_hash = db.Column(db.String, nullable = False)
    name = db.Column(db.String, nullable=False)
    dob = db.Column(db.Date, nullable = False, db.CheckConstraint('dob < func.current_date()'))
    address = db.Column(db.String)
    phone_number = db.Column(db.Integer, db.CheckConstraint('length(phone_number)==10'))

    __table_args__=(
        db.CheckConstraint('length(username)>=7'),
        db.CheckConstraint('length(_password_hash)>7')
        )

    @validates('name')
    def validate_name(self, key, name):
        invalid_characters = ['!@#$%^&*()_+-=[]\}{><?/|1234567890']
        for c in invalid_characters:
            if c in name:
                return "Invalid name. No numbers or special characters!"
            
        return name

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
    office_number = db.Column(db.Integer, unique = True, nullable = False, db.CheckConstraint('length(office_number)==10'))
    image = db.Column(db.String)

    @validates('first_name')
    def validate_name(self, key, first_name):
        invalid_characters = ['!@#$%^&*()_+-=[]\}{><?/|1234567890']
        for c in invalid_characters:
            if c in first_namename:
                return "Invalid name. No numbers or special characters!"
            
        return first_name

    @validates('last_name')
    def validate_name(self, key, last_name):
        invalid_characters = ['!@#$%^&*()_+-=[]\}{><?/|1234567890']
        for c in invalid_characters:
            if c in last_name:
                return "Invalid name. No numbers or special characters!"
            
        return last_name

    @validates('specialty')
    def validate_specialty(self, key, specialty):
        specialties = ['primary care', 'cardiology', 'nephrology', 'obstetrics and gynecology', 'pulmonary', 'neurology', 'endocrinology', 'dermatology', 'pediatrics']
        
        if specialty not in specialties and specialty != None:
            return "Invalid specialty for practice. Enter again"

        return specialty

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
            return "Invalid specialty for practice. Enter again"

        return specialty
	
    patient_id = db.Column(db.Integer, db.ForeignKey('patients.id'))
    physicians_id=db.Column(db.Integer, db.ForeignKey('physicians.id'))

    patient= db.relationship('Patient', back_populates = 'appointments')
    physician = db.relationship('Physician', back_populates = 'appointments')

    serialize_rules=('-patient.appointments', '-physician.appointments')

    def __repr__(self):
        return f'Appointment: {self.title}  Date: {self.date_and_time}'