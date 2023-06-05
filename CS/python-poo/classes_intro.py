class Exemplo:
    # inicializador -> “o __init__ é o construtor de objetos no Python“
    # self == this. Pode usar outro termo, mas é convenção o 'self'.
    # self: Representa a instância do objeto.
    # Em python, é um parâmetro explícito.
    def __init__(self):
        print("Inicializando Exemplo")
        self.__privado = "Eu sou um atributo privado"

    # construtor
    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("Este é um método privado")
        print("Esse é um atributo privado:", self.__privado)

    def metodo_publico(self):
        print("Este é um método público, que chama o método privado.")
        self.__metodo_privado()


exemplo = Exemplo()
# exemplo.metodo_publico()


class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco

        self.set_cor(cor)

        # CONVENÇÃO -> 1 underline: protegido.
        # Ainda pode ser acessado fora da classe.
        self._potencia = potencia
        self._tensao = tensao
        # dunder -> 2 underline: PRIVADO!
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def get_cor(self):
        return self.__cor.upper()

    def set_cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def caracteristicas(self):
        print("Velocidade:", self.__velocidade)
        print("V. max:", self.__velocidade_maxima)
        print("Corente atual:", self.__corrente_atual_no_motor)

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
        print("Ligado! Velocidade:", self.__velocidade)

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def aumenta_velocidade(self):
        if self.__ligado:
            if self.__velocidade < self.__velocidade_maxima:
                self.__velocidade += 1
                print("Nova velocidade:", self.__velocidade)
            else:
                print("Velocidade máxima atingida")
        else:
            print("Liquidificador desligado")


if __name__ == "__main__":
    meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
    seu_liquidificador = Liquidificador(
        cor="Vermelho", potencia=250, tensao=220, preco=100
    )

    # print("Cor:", meu_liquidificador.cor)
    print("Cor:", meu_liquidificador.get_cor())
    seu_liquidificador.caracteristicas()
    seu_liquidificador.ligar(2)
    seu_liquidificador.aumenta_velocidade()
    seu_liquidificador.aumenta_velocidade()
    seu_liquidificador.desligar()
    seu_liquidificador.aumenta_velocidade()
    meu_liquidificador.set_cor("Preto")
    print("Nova cor:", meu_liquidificador.get_cor())
