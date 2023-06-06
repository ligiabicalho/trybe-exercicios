import sys

# módulo sys:
# Quando executamos um script e adicionamos parâmetros,
# os mesmos estarão disponíveis através de uma variável chamada sys.argv

# python3 arquivo.py 2 4 "teste"

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)
