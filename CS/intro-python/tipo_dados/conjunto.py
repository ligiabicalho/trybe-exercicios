# Conjuntos mutaveis (set)
# coleção de elementos únicos e não ordenados
# operações: união, intersecção, diferença

permissions = set()  # cria um conjunto vazio ou pode ser criado a partir de uma estrutura iterável set(["group"])
print('conjunto init:', permissions, 'type set', type(permissions))
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves
print('permissions:', permissions)

permissions.add("root")  # adiciona um novo elemento ao conjunto
permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto
print('permissions add:', permissions)

union = permissions.union({"user"})  # retorna um conjunto resultado da união
print('union', union) # {'member', 'group', 'root', 'user'}

intersection = permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos
print('intersection', intersection)  # {'member'}

difference = permissions.difference({"user", "member"})  # retorna a diferença entre os dois conjuntos
print('difference', difference)  # {'group', 'root'}


# Conjuntos imutáveis (frozenset)
# seus elementos não podem ser modificados, apenas realiza as operações

permissions = frozenset(["member", "group"])  
# assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset
print('type frozenset', type(permissions))  # <class 'frozenset'>
permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
