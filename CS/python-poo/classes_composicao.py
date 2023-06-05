from classes_encapsulamento import Liquidificador

# COMPOSIÇÃO
# Composição é atribuir o objeto de uma classe a um atributo da outra,
# gerando assim um relacionamento de pertencimento entre elas.


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    # método __str__ é chamado quando usamos print(objeto_da_classe)
    # pelo contrário exibe o padrão que é a posição de momória do objeto.
    def __str__(self):
        return (
            f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."
        )

    # COMPOSIÇÃO
    # esse método recebe um objeto da classe Liquidificador como parâmetro
    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador


if __name__ == "__main__":
    pessoa_cozinheira = Pessoa("Jacquin", 1000)
    print(pessoa_cozinheira)
    print("Possui liquidificador?", pessoa_cozinheira.liquidificador)

    # instância da Classe liquidificador
    liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)

    # ao chamar o método comprar_liquidificador,
    # é passado o objeto liquidificador_vermelho da classe Liquidificador
    pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

    print(pessoa_cozinheira)
    print(
        "Qual liquidificador comprado?",
        pessoa_cozinheira.liquidificador,
    )
