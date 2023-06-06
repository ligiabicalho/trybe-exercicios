# ENCAPSULAMENTO
# 1 underline: protegido
# 2 underline: privado

# por boas práticas, primariamente não se deve colocar nada privado,
# a não ser que surja uma demanda muito específica.


class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor

        # CONVENÇÃO -> 1 underline: protegido.
        # Ainda pode ser acessado fora da classe.
        self._potencia = potencia
        self._tensao = tensao

        # dunder -> 2 underline: PRIVADO!!
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    # método __str__ é chamado quando usamos print(objeto_da_classe)
    def __str__(self):
        return f"Liquidificador {self.cor}, potência {self._potencia}W. "

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


if __name__ == "__main__":
    # ABSTRAÇÃO
    # oculta os detalhes da implementação
    # mostrando apenas a funcionalidade para quem acessa os métodos,

    liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
    liquidificador_vermelho.ligar(1)
    print("Está ligado?", liquidificador_vermelho.esta_ligado())
    # Está ligado? True
    liquidificador_vermelho.desligar()
    print("Está ligado?", liquidificador_vermelho.esta_ligado())
    # Está ligado? False
