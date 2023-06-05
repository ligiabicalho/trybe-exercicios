# CLASSES ABSTRATAS
# Uma classe abstrata é aquela que não pode possuir instâncias a partir dela,
# existindo apenas para ser herdada.

# Geralmente classes mais genéricas são abstratas,
# e classes mais específicas herdam delas

# Para criar uma classe abstrata em Python,
# basta criar uma classe que herda de abc.ABC:

from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod  # decorador para declarar método abstrato
    def execute(self, query):
        ...
        #  o corpo do método abstrato deve conter um pass,
        # Ellipsis (...) ou com um raise NotImplementedError:


# métodos abstratos:
# métodos que não possuem uma implementação, e servem para obrigar a classe
# normal/herdeira, que herda da classe abstrata, a implementá-los
# (por meio da sobrescrita de métodos).


class MongoDB(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDataBase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")


# CLASSES "INTERFACE"
# Em Python, é uma classe abstrata que só possui métodos abstratos.


# type hints: tipagem de checagem estática
def minha_func(database: Database):  # repare que o d do parâmetro é minúsculo
    # A função isinstance retorna se um objeto é instância de uma classe
    # ou de qualquer uma de suas subclasses.
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")


db1 = MongoDB()
db2 = MySQLDataBase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")
