# Compreensões (Listas, Dicionários e Conjuntos)

frase = """O módulo de CS é bom de mais,
    as dicas pythônicas fazem ficar melhor ainda"""
vogais = "aeiou"

lista_vogais = []
lista_consoantes = []

for letra in frase:
    if letra in vogais:
        lista_vogais.append(letra)
    else:
        lista_consoantes.append(letra)

print("vogais:", lista_vogais)
print("consoantes:", lista_consoantes)

# ou separadamente
for letra in frase:
    if letra not in vogais:
        lista_consoantes.append(letra)

print("not in vogais:", lista_consoantes, end="\n\n")


print("--- list comprehension ---")
lista_vogais = [letra for letra in frase if letra in vogais]
lista_consoantes = [letra for letra in frase if letra not in vogais]

print("--- set comprehension ---")
# conjunto de vogais (não há repetição, nem ordenação)
set_vogais = {letra for letra in frase if letra in vogais}
set_consoantes = {letra for letra in frase if letra not in vogais}
print(set_vogais)
print(set_consoantes)

print("--- dict comprehension ---")
# {chave: valor for elemento in iteravel}
dict_vogais = {
    f"{letra.upper()}": f"{letra.lower()}"
    for letra in frase
    if letra in vogais
}
dict_consoantes = {
    f"{letra.upper()}": f"{letra.lower()}"
    for letra in frase
    if letra not in vogais
}
print(dict_vogais)
print(dict_consoantes)
