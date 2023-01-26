# SQL

## Dia 3.3 transformando ideias em modelos de banco de dados

### Exercício 1

<details>
  <summary>Instrução</summary>

1. Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

- Nome;
- Espécie;
- Sexo;
- Idade;
- Localização.

Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal.
Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

</details>

#### Resolução - modelagem

(Comandos para criar o db se encontram no arquivo _.sql_)

1. Identificação das Entidades:

Entidade 1: Animal;
Entidade 2: Espécie;
Entidade 3: Localização;
Entidade 4: Cuidador;
Entidade 5: Gerente;
Entidade 6: Cuidado (cuidador e animal);

2. Identificação dos Atributos:

Animais: animal_id, nome, especies_id, sexo, idade;
Espécies: especie_id, nome, localização_id;
Localizações: localização_id, localização;
Cuidadores: cuidador_id, nome, gerente_id;
Gerentes: gerente_id e nome;
Cuidado: cuidador_id e animal_id;

3. Identificar os Relacionamentos:

Um animal pode ter um ou mais cuidadores;
Uma espécie pode ter um ou mais animais;
Uma localização pode ter um ou mais animais de uma espécie; (A depender da organização do Zoo...)
Um cuidador pode cuidar de um ou mais animais;
Um gerente pode gerenciar uma ou mais cuidadores;
Um cuidador possui um gerente;
