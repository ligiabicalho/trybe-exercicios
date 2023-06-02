restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

for i in range(5):
    count = i + 1
    # print(count)

# Compreensão de lista (list comprehension)
# Isto é equivalente às operações de map e filter em JavaScript.
# A sintaxe é [expression for item in list if condition].
print("-------- list comprehension ---------")
min_rating = 3.0
filtered_restaurants = [
    restaurant["name"]
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list",
# verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# lista com o quadrado dos números entre 1 e 10.
quadrados = [x*x for x in range(11)]
print(quadrados)
