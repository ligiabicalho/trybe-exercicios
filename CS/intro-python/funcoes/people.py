# import area
from area import rectangle

PEOPLE_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
people_at_concert = (
    rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)
print("Estão presentes no show aproximadamente", people_at_concert, "pessoas.")
# Estão presentes no show aproximadamente 5400 pessoas.

# Ao rodar módulo people.py, o interpretador Python cria diretório __pycache__
## deve-se coloca-lo no .gitignore ou usar o comando 'cl' para deleta-lo
