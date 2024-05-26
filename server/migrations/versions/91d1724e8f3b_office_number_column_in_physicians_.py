"""office_number column in Physicians updated to String. Validation updated. Values for seed.py updated for updated columns

Revision ID: 91d1724e8f3b
Revises: d6f44b27b1e3
Create Date: 2024-05-25 22:59:03.408137

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '91d1724e8f3b'
down_revision = 'd6f44b27b1e3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('physicians', schema=None) as batch_op:
        batch_op.alter_column('office_number',
               existing_type=sa.INTEGER(),
               type_=sa.String(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('physicians', schema=None) as batch_op:
        batch_op.alter_column('office_number',
               existing_type=sa.String(),
               type_=sa.INTEGER(),
               existing_nullable=False)

    # ### end Alembic commands ###
