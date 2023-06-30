PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side: float) -> float:
    '''Calculate area of square.'''
    return side * side


def rectangle(height: float, width: float) -> float:
    '''Calculate area of rectangle.'''
    return height * width


def circle(radius: float) -> float:
    '''Calculate area of circle.'''
    return PI * radius * radius

# A variável __name__ é utilizada pelo interpretador Python para identificar o arquivo que esta sendo executado
# e seu valor será "__main__" quando invocamos um módulo como script.
# desse modo, o código abaixo não irá executar quando importarmos o módulo area.py
if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
