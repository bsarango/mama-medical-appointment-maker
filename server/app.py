#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, render_template
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Patient, Physician, Appointment



@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'

# Views go here! use either route!
@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

class Patients_By_Id(Resource):
    
    def get(self, id):
        if session.get('patient_id'):

            patient = Patient.query.fitler_by(id=id).first()

            if patient:
                return patient.to_dict(), 200

        return {"message":"Patient not logged in. Please log in to continue"}, 401

    def patch(self,id):
        if session.get('patient_id'):
            json = request.get_json()
            patient = Patient.query.filter_by(id=id).first()
            try:
                for attr in json:
                    setattr(patient, attr, json[attr])
				
                    db.session.add(patient)
                    db.session.commit()

                return patient.to_dict(), 202

            except ValueError:
                return {'error':'Invalid entry for profile update'}, 400
        
        return {'message':'User not recognized. Please sign in'}, 401


# class Appointments(Resource):

# 	def get(self):

# 		if session.get(‘patient_id’):
# 			appointments = [appointment.to_dict() for appointment in Appointment.query.all()]
# 			return appointments, 200

# 		return {‘message’: ‘Patient not logged in, please login to continue’}, 401

# 	def post(self):

# 		if session.get(‘patient_id’):
# 			json = request.get_json()
# 			appointment = Appointment(title = json.get(‘title’), date_and_time = json.get(“date_and_time”), patient_id = user.session.get(‘user_id’)

# 			try:
# 				db.session.add(appointment)
# 				db.session.commit()
# 				return appointment.to_dict(), 201

# 			except ValueError:
# 				return {‘error’: ‘Invalid input made. Try again.’} ,400


# class Appointment_By_Id(Resource, Id):

# 	def get(self, id):
# 		appointment = Appointment.query.filter_by(id=id).first()
		
# 		if appointment:
# 			return appointment.to_dict(), 200

# 		return {‘message’ : ‘This appointment can’t be found. Try again.’}, 404

# 	def patch(self, id):
# 		json = request.get_json()
# 		appointment  = Appointment.query.filter_by(id=id).first()
		
# 		for attr in json:
# 			setattr(appointment, attr, json.get(attr))

# 		try:
# 			db.session.add(appointment)
# 			db.session.commit()

# 			return appointment.to_dict(), 204

# 		except ValueError:
# 			return {“error”:”Invalid input given. Try again.”}, 400	

# 	def delete(self, id):
# 		appointment = Appointment.query.filter_by(id=id).first()
		
# 		db.session.delete(appointment)
# 		db.session.commit()

# 		return {‘message’ : ‘’}, 200


class Physicians(Resource):

	def get(self):
		physicians = [physician.to_dict() for physician in Physician.query.all()]
		return physicians, 200


class Physicians_By_Id(Resource):

    def get(self, id):
        physician = Physician.query.filter_by(id=id).first().to_dict()
        
        if physician:
            return physician,200

        return {'error':'Physician not found. Please select another physician'}, 404

class CheckSession(Resource):
    
        def get(self):
            patient = Patient.query.filter(Patient.id == session.get('patient_id')).first()

        if patient:
            return patient.to_dict(), 200
            
        return {'error':'Patient not signed in. Please sign in.'} , 401


class SignUp(Resource):
    
    def post(self):
        json = request.get_json()
        new_patient = Patient(
					username= json.get('username'), 
                    name = json.get('name'), 
                    dob= json.get('dob'), 
                    address=json.get('address'), 
                    phone_number=json.get('phone_number')
                    )
        new_patient.password_hash = json.get('password')
    
        try:   
            db.session.add(new_patient)
            db.session.commit()
            return new_patient.to_dict(), 201

        except ValueError:
            return {'error':'Error in entering information. Try again'}, 422

# class Login(Resource):

# 	def post(self):
# 		json = request.get_json()
# 		username = json.get(‘username’)
# 		patient = Patient.query.filter(Patient.username == username).first()
# 		password = json.get(‘password’)
		
# 		if patient:
# 			if user.authenticate(password):
# 				session[‘patient_id’] = patient.id
# 				return patient.to_dict(), 201

# 		return {‘message’: ‘Invalid credentials, Try logging in again’}


# class Logout(Resource):

# 	def delete(self):
# 		patient = Patient.query.filter(Patient.id = session.get(‘patient_id’)).first()

# 		if patient:
# 			session[‘patient_id’] = None
# 			return {‘message’: ‘’}, 204
# 		return {‘error’: ‘Unable to log out. Patient not logged in’}, 401
		

api.add_resource(Patients_By_Id, "/patient_profile/<int:id>")
# api.add_resource(Appointments, “/appointments”)
# api.add_resource(Appointments_By_Id, “/appointment_details/<int:id>”)
api.add_resource(Physicians, "/physicians_index")
api.add_resource(Physicians_By_Id, "/physicians_index/<int:id>")
# api.add_resource(CheckSession, “/check_session”)
# api.add_resource(SignUp, “/signup”)
# api.add_resource(LogIn, “/login”)
# api.add_resource(LogOut, “/logout”)

if __name__ == '__main__':
    app.run(port=5555, debug=True)

