class Pessoa:
    # msg_erro =

    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.__saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []
        self.__msg_erro = "Saldo insuficiente"

    def __str__(self):
        msg = (
            f"{self.nome} tem {self.idade} anos e R$ {self.__saldo_na_conta}."
        )
        return msg

    def pagar_conta(self, valor_conta):
        if self.__saldo_na_conta < valor_conta:
            raise ValueError(self.msg_erro)
        self.__saldo_na_conta -= valor_conta

    def comprar_eletrodomestico(self, eletrodomestico):
        if self.__saldo_na_conta < eletrodomestico.preco:
            raise ValueError(self.msg_erro)
        self.__saldo_na_conta -= eletrodomestico.preco
        self.eletrodomestico.append(eletrodomestico)

    @property
    def saldo(self):
        if self.__saldo_na_conta < 0:
            raise ValueError("Saldo negativo")
        return self.__saldo_na_conta

    @saldo.setter
    def saldo(self, novo_saldo):
        if novo_saldo < 0:
            raise ValueError("Saldo não pode ser negativo")
        self.__saldo_na_conta = novo_saldo


pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)
print(pessoa_1, pessoa_2, pessoa_3, pessoa_4, sep="\n")

# Polimorfismo
# Pcapacidade de um objeto poder ser referenciado de várias formas.


# Exemplo:
class PessoaInvestidora(Pessoa):
    def __init__(self, nome, idade, saldo_na_conta, investimentos=True):
        super().__init__(nome, idade, saldo_na_conta)
        self.investimentos = investimentos

    def pagar_conta(self, valor_conta):
        if self.saldo < valor_conta:
            raise ValueError("Saldo insuficiente")
        self.saldo -= valor_conta * 0.9


pessoa_investidora = PessoaInvestidora("Lígia", 34, 5000)
pessoa_investidora.pagar_conta(100)
print(pessoa_investidora.saldo)
