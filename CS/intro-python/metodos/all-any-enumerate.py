# all(iteravel)
# Retorna True se \TODOS\ os elementos do iterável são verdadeiros ou False se o iterável está vazio

nomes_1 = ['Ana', 'Maria', 'José']
nomes_2 = ['Ana', 'Maria', 'José', '']
all(nomes_1)  # True
all(nomes_2)  # False

nums_1 = [1, 2, 3]
nums_2 = [1, 2, 3, 0]
all(nums_1)  # True
all(nums_2)  # False

# any(iteravel)
# Retorna True se \ALGUM\ elemento do iterável é verdadeiro ou False se o iterável está vazio
any(nomes_1)  # True
any(nomes_2)  # True

nomes_3 = ['', '', '']
any(nomes_3)  # False

# enumerate(iteravel, start=0)
# Retorna um objeto enumerado. É útil para obter o index dos elementos enquanto itera sobre eles.
# { 0: iteravel[0], 1: iteravel[1], 2: iteravel[2], ... }
enumerate(nomes_1)  # <enumerate object at 0x7f9b1c1b3f00>
for element in enumerate(nomes_1):
    print(element) # retorna tuplas: (0, 'Ana') (1, 'Maria') (2, 'José')

for index, element in enumerate(nomes_1): # desempacotamento de tuplas
    print(index, element) # 0 Ana 1 Maria 2 José