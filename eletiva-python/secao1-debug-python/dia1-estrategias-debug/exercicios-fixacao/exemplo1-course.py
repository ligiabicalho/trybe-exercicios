# DEBUGGER DO VS CODE

# colocar o breakpoint na linha desejada.
# executar código em modo debug: apertando F5 ou pela aba Run and Debug.

# Continue (continuar): avança com a execução em modo debug até o próximo breakpoint (atalho F5)
# Step over (contornar): executa a linha atual do código sem entrar em funções (atalho F10)
# Step into (intervir): executa a linha atual do código e entra em funções (atalho F11)
# Step out (sair): sai da função atual e continua a execução (atalho Shift + F11)
# Restart (reiniciar): recomeça a execução do debugger (atalho depende do seu Sistema Operacional)
# Stop (interromper): encerra a execução do debugger (atalho depende do seu Sistema Operacional)

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
