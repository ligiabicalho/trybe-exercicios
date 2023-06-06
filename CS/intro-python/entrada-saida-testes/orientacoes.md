Dica (1): 
(import json)
O json.load desserializa o json em uma lista de dicionários, mas há tbm o json.loads faz em uma string, ideal para trabalhar com APIs.

Dica (2): 
Por mais que o set no final seja representado dentro de chaves {1, 2, 3, 4} o construtor tem que ser explicito set(). 
Porque dicts já usam o construtor de chaves vazias {}.