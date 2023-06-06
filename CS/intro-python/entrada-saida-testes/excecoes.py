import json


def load_games_from_json(file_path: str) -> list[dict]:
    try:
        with open(file_path, "r") as file:
            games = json.load(file)
    except FileNotFoundError as err:
        raise FileNotFoundError(f"Arquivo não encontrado: {err}")
        # raise ~ throw em outras linguagens
        # print(f"Erro aconteceu: {err}")
    except json.JSONDecodeError:
        raise json.JSONDecodeError("Arquivo json inválido ou vazio")
    else:
        return games

# método set() -> cria um conjunto vazio
    # Um conjunto é uma coleção não ordenada,
    # imutável*, não indexada, e não duplicados
    # conj = {1, 2, 3, 4, 5}
    # *Nota: Os itens definidos não podem ser alterados, mas
        # você pode remover itens e adicionar novos itens.
# método add() -> adiciona um elemento ao conjunto (na lista é .append)
