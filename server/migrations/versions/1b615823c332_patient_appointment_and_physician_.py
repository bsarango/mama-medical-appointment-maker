"""Patient, Appointment, and Physician models created and imported to config.py

Revision ID: 1b615823c332
Revises: 
Create Date: 2024-05-22 22:35:17.921345

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1b615823c332'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('patients',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('_password_hash', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('dob', sa.Date(), nullable=False),
    sa.Column('address', sa.String(), nullable=True),
    sa.Column('phone_number', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_patients')),
    sa.UniqueConstraint('username', name=op.f('uq_patients_username'))
    )
    op.create_table('physicians',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=False),
    sa.Column('last_name', sa.String(), nullable=False),
    sa.Column('specialty', sa.String(), nullable=True),
    sa.Column('office_address', sa.String(), nullable=False),
    sa.Column('office_number', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_physicians'))
    )
    op.create_table('appointments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('date_and_time', sa.DateTime(), nullable=False),
    sa.Column('specialty', sa.String(), nullable=True),
    sa.Column('completed', sa.Boolean(), nullable=True),
    sa.Column('details', sa.String(), nullable=False),
    sa.Column('patient_id', sa.Integer(), nullable=True),
    sa.Column('physicians_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['patient_id'], ['patients.id'], name=op.f('fk_appointments_patient_id_patients')),
    sa.ForeignKeyConstraint(['physicians_id'], ['physicians.id'], name=op.f('fk_appointments_physicians_id_physicians')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_appointments'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('appointments')
    op.drop_table('physicians')
    op.drop_table('patients')
    # ### end Alembic commands ###
