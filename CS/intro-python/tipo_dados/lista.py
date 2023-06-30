trybe_course = ["Front-end", "Back-end"]

# Adiciona um elemento ao final da lista
trybe_course.append("Ciência da Computação")

# Adiciona um elemento na posição 0 da lista
trybe_course.insert(0, "Fundamentos")

# Adiciona os elementos de uma lista ao final da lista
trybe_course.extend(["Fullstack", "Data Science"]) 
print('trybe_course_extend:', trybe_course)

# Remove um elemento da lista
trybe_course.remove("Fullstack")

# Remove o último elemento da lista
trybe_course.pop()

print('trybe_course remove:', trybe_course)

# Ordena a lista
trybe_course.sort()
print('ordena:', trybe_course)

# Inverte a lista
trybe_course.reverse()
print('reverse:', trybe_course)

# Cria nova lista ordenada  a partir da lista original
nova_lista = sorted(trybe_course)
print('nova ordenada:', nova_lista)
print('original', trybe_course)

# Altera o valor de um elemento da lista
trybe_course[0] = "Fundamentos de Desenvolvimento Web"
print('trybe_course:', trybe_course)