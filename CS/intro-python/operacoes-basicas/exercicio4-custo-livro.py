preco_capa = 24.20

desconto_livraria = 0.4

transporte_um = 3.00
transporte_outros = 0.75

qnt = 60
custo_total = (
    qnt * (preco_capa - (preco_capa * desconto_livraria))) + (
        transporte_um + ((qnt - 1) * transporte_outros))

print(f"{custo_total:.2f}")


def calcula_custo(qnt, preco_capa, desconto_livraria) -> float:
    transporte_um = 3.00
    transporte_outros = 0.75
    custo_total = (
        qnt * (preco_capa - (preco_capa * desconto_livraria))) + (
            transporte_um + ((qnt - 1) * transporte_outros))
    return f"{custo_total:.2f}"


obj = {
  'qnt': 60,
  'preco_capa': 24.20,
  'desconto_livraria': 0.4,
}

print(calcula_custo(**obj))
