# Sem alterar o código, descubra qual exceção é levantada se:

# Resolução:
# executar o debug com um breakpoint logo após a definição de input_list
# editar a variável na janela VARIABLES para incluir o valor desejado
# continue a execução do debugger (atalho F5).

# 1. Um dos elementos da input_list for um inteiro negativo.
# R: ValueError

# 2. Um dos elementos da input_list for uma string.
# R: TypeError

from math import factorial


def map_factorial(numbers):
    result = []

    for num in numbers:
        result.append(factorial(num))

    return result


def main():
    input_list = [1, 2, 3, 4, 5]
    return map_factorial(input_list)


if __name__ == "__main__":
    main()
