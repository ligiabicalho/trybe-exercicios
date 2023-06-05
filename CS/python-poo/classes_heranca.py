# HERANÇA
# Em Python, para declarar que um objeto herda as características de outro,
# basta na declaração da classe “passarmos como parâmetro”
# a classe que será herdada


class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self.teste = "teste"
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

    @property
    def velocidade_maxima(self):
        return self.__velocidade_maxima

    @velocidade_maxima.setter
    def velocidade_maxima(self, nova_vel):
        self.__velocidade_maxima = nova_vel


# Liquidificador herda/extends de Eletrodomestico
# possui acesso a todos os métodos e atributos (públicos e protegidos)
class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco)

        # alterando valor de um atributo da classe mãe
        # caso seja um atributo privado, necessário ter getters/setters.
        self.velocidade_maxima = 6
        self.teste = "teste2"

    def metodo_chama_superclasse(self):
        print("Vou printar o valor pelo método criado em Eletrodoméstico:")
        print(
            "Usando Class_name.metodo(self)", Eletrodomestico.esta_ligado(self)
        )
        print("Usando super().metodo()", super().esta_ligado())


class Secador(Eletrodomestico):
    pass


class Batederia(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


eletro_liquidificador = Liquidificador("vermelho", 1000, 220, 100)
eletro_liquidificador.ligar(4)
eletro_liquidificador.metodo_chama_superclasse()
eletro_liquidificador.desligar()
eletro_liquidificador.metodo_chama_superclasse()
print(eletro_liquidificador._Eletrodomestico__velocidade_maxima)

secador = Secador("azul", 150, 220, 200)
batedeira = Batederia("vermelha", 200, 220, 300)
maquina_de_lavar = MaquinaDeLavar("inox", 2000, 220, 1000)

print(
    f"""O valor do secador, batedeira e máquina de lavar é:
      {secador.preco}
      {batedeira.preco}
      {maquina_de_lavar.preco}"""
)
