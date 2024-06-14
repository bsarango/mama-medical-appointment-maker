# MAMA Appointment Maker

# Application Description
This application is intended to be used by patients in a medical system to be able to schedule appointments with physicians within the given practice. Patients must sign in or sign up to have access to the application resources - making, reschedulin, or canceling appointments. First time users may browse the doctors in the practice but must sign up and sign in to continue using the service.

# Project Installation and Setup

To access the repository for the project click the following link:
https://github.com/bsarango/mama-medical-appointment-maker

Click on Fork and follow the instructions given.

Click on code and copy the repo in the SSH format

To clone to your system, open a window in terminal to a directory that you wish to clone to.
Enter the following:

```bash
git clone git@github.com:bsarango/mama-medical-appointment-maker.git
```

Enter the project directory with the cd command and enter the following to install all the dependencies for the front and back end of the application

Front End
```bash
npm install --prefix client
```

Back End
```bash
pipenv install 
```

To start the program with both front and back end simultaneosly, enter the following command

```bash
pipenv shell
honcho start -f procfile.dev
```
Once started, open the given url in the browser

To run the front and back end seperately, you must have two terminals open and go to the root directory of the project.

In the first, run:
```bash
npm run dev --prefix client
```

In the second enter into a virtual environment to start the back end server 

```bash
pipenv shell

cd server

python app.py
```

***If running seperately, the port value in the proxy must be changed to 5555 in package.json

# Program Contents
The program contains a front end run by vite with react and the backend is a flask application in python.
All front end files are found in the client folder - this includes the main html and jsx file with pages and components

The backend is found in the server folder with the respective files for the app, models, seed data, and configurations. The migrations for the database are also found in the server folder.

All dependecies for the front and backend as well as for css  are found in the root of the application

# Conlcusion
The program is still a work in progress and has the files necessary to be deployed on the web. Additional work is needed to adjust deployment and configuration for ports to adequetely deploy