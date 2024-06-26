#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db
from models import Patient, Physician, Appointment

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        
        # Seed code goes here!

        print("Clearing db...")

        Appointment.query.delete()
        Patient.query.delete()
        Physician.query.delete()
        
        fake = Faker()

        print("Starting seed...")

        print ("Seeding Patients")

        username = fake.user_name()
        name = fake.name()
        dob = fake.date_of_birth()
        address = "100 First Avenue New York, New York, 10000"
        phone_number = "7181001000"

        patient = Patient(username = username, name=name, dob = dob, address = address, phone_number = phone_number)

        patient.password_hash = "Password234"

        db.session.add(patient)
        db.session.commit()

        print("Seeding Physicians")

        first_name = fake.first_name()
        last_name = fake.last_name()
        specialty = "cardiology"
        office_address = "200 East 2nd Street New York, New York, 10010"
        office_number = "2122002000"
        image = "https://static.vecteezy.com/system/resources/previews/005/520/145/original/cartoon-drawing-of-a-doctor-vector.jpg"

        physician1 = Physician(first_name = first_name, last_name = last_name, specialty = specialty, office_address=office_address, office_number = office_number,image=image)

        db.session.add(physician1)
        db.session.commit()

        first_name = fake.first_name()
        last_name = fake.last_name()
        specialty = "neurology"
        office_address = "100 East 2nd Street New York, New York, 10010"
        office_number = "2122002001"
        image = "https://static.vecteezy.com/system/resources/previews/005/520/145/original/cartoon-drawing-of-a-doctor-vector.jpg"

        physician2 = Physician(first_name = first_name, last_name = last_name, specialty = specialty, office_address=office_address, office_number = office_number,image=image)

        db.session.add(physician2)
        db.session.commit()

        first_name = fake.first_name()
        last_name = fake.last_name()
        specialty = "pediatrics"
        office_address = "300 East 2nd Stree New York, New York, 10010"
        office_number = "2122002002"
        image = "https://static.vecteezy.com/system/resources/previews/005/520/145/original/cartoon-drawing-of-a-doctor-vector.jpg"

        physician3 = Physician(first_name = first_name, last_name = last_name, specialty = specialty, office_address=office_address, office_number = office_number,image=image)

        db.session.add(physician3)
        db.session.commit()

        print("Seeding Appointments")

        title = "Cardiology Check Up"
        date_and_time = fake.date_time()
        specialty = "cardiology"
        details = "Please arrive 15 minutes prior your appointment. Please arrive with the following documents:\n List of medications\n Identification Card\n Health Insurance\n Prior visit inforamtion\n Please be ready to report any new symptoms or changes you have experienced since your last visit. We look forward to seeing you during your next visit."

        appointment = Appointment(title=title, date_and_time = date_and_time, specialty=specialty, details=details)

        db.session.add(appointment)
        db.session.commit()

        title = "Annual Shot Administration"
        date_and_time = fake.date_time()
        specialty = "pediatrics"
        details = "Please arrive 15 minutes prior your appointment. Please arrive with the following documents:\n List of medications\n Identification Card\n Health Insurance\n Prior visit inforamtion\n Please be ready to report any new symptoms or changes you have experienced since your last visit. We look forward to seeing you during your next visit."

        appointment2 = Appointment(title=title, date_and_time = date_and_time, specialty=specialty, details=details)

        db.session.add(appointment2)
        db.session.commit()

        print("New data seeded for Patient, Physician, and Appointment!")
