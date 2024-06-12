# Standard library imports
import os
# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy import MetaData
import secrets
# from dotenv import load_dotenv
# load_dotenv()

# Local imports


# deployed version uncomment below code, local version comment out below code
app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/dist',
    template_folder='../client/dist'
)

# Instantiate app, set attributes

# deployed version comment out below code, local version comment in below code
# app = Flask(__name__)
# static_url_path='',
# static_folder='../client/build',
# template_folder_folder='../client/build'

# Instantiate app, set attributes
app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://flask_deploy_user:DYoa4dGezKgUF8rtuW9LaromVZ4kn6Lg@dpg-cov66d821fec73ff82u0-a.oregon-postgres.render.com/flask_deploy"
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://brian_sarango:lRwcRfvKH0mPNA5cpgt47LQ2CG7nxoBx@dpg-cp766re3e1ms73af9l20-a.ohio-postgres.render.com/my_database_r7u9"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
# app.secret_key = secrets.token_hex(16)
app.secret_key = b'\xb3\x93\xfe\xd0D\xd6%V\xda\xd0\x0e\x9b'


# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
})

db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)

bcrypt = Bcrypt(app)