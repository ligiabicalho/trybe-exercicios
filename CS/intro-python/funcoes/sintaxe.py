# Funções 

def funcao_name(param: type) -> type:
    '''docstring: documentação da função'''
    print(param)

# Os parâmetros podem ser passados de diferentes formas:
def soma(x: float, y: float) -> float:
    '''recebe dois parâmetros e retorna a soma deles'''
    result = x + y
    return print('x:', x, 'y:', y, 'sum:', result)

## posicional: são aqueles definidos por meio da posição em que cada um é passado;
soma(4, 2) 

## nomeada: são definidos por meio de seus nomes.
soma(y=2, x=4) 

## variádicos: variam em sua quantidade
### posicionais variádicos são acessados como uma tupla no interior de uma função
def sub(*values: float) -> float:
    '''recebe uma quantidade variada de parâmetros e retorna a subtração deles'''
    i = 0
    result = values[0]
    for value in values:
        if i == len(values) - 1:
            break
        result -= values[i + 1]
        i += 1
    return print('sub:', result)

sub(4, 2)
sub(10, 3, 5, 7)

### nomeados variádicos são acessados como um dicionário no interior de uma função
# dict é uma função que já vem embutida no python
fulano = dict(nome="Felipe", sobrenome="Silva", idade=25)  # cria um dicionário utilizando as chaves passadas
ciclana = dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)
print(fulano, ciclana, sep="\n")