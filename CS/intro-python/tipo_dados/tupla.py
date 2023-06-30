# similar a lista, mas não pode ser modificado durante a execução;
# imutável: quantidade de elementos definido.

tupla_user = ("Lígia", "Bicalho", 34)  # elementos são definidos separados por vírgula, envolvidos por parênteses

# pode conter elementos de tipos diferentes e mutáveis
tupla_familia = ("Milton", "Mirian", ["Conrado", "Lígia"])  # lista dentro de tupla
tupla_familia[2][0] = "Conradinho"  # alterando elemento da lista dentro da tupla
tupla_familia[2].append("Estevão")  # adicionando elemento na lista dentro da tupla
print(tupla_familia)

print(tupla_user[0])  # acesso também por índices
print('Lígia' in tupla_user) # retorna booleano