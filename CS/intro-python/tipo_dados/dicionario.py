# Dicionário 
# Estrutura que associa uma chave a um determinado valor.

dicionario = dict()  # cria um dicionário vazio
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria
people_by_name["Maria"]  # saída: 1

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
items = people_by_id.items()  # retorna array de tuplas chave/valor: [(2, "Fernanda"), (3, "Felipe")]
print('items', items)
# é retornada uma coleção iterável de tuplas contendo chaves e valores

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# adiciona novo par chave/valor
info["recorrente"] = 'Sim'

del info["origem"]  # remove o par chave/valor da chave "origem"

print('info', info)