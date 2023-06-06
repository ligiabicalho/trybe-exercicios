# Range
# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, 
# modificando seu valor de acordo com o passo (step) definido. 

# É uma estrutura iterável, portanto pode ser utilizada em laços de repetição for.
# Seus valores são criados à medida que esta sequência é percorrida.

# range( [start], [stop], [step] )
# start e step podem ser omitidos, sendo que start assume o valor 0 e step assume o valor 1.

# sequência de 1 até 10
range(1, 11)

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# regressiva, step negativo
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]