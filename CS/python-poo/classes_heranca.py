# HERANÇA
# Em Python, para declarar que um objeto herda as características de outro,
# basta na declaração da classe “passarmos como parâmetro”
# a classe que será herdada


class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True
        return self.__corrente_atual_no_motor

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return f"Ligado: {self.__ligado}, na velocidade {self.__velocidade}"

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


# Liquidificador herda/extends de Eletrodomestico
# possui acesso a todos os métodos e atributos (públicos e protegidos)
class Liquidificador(Eletrodomestico):
    pass
