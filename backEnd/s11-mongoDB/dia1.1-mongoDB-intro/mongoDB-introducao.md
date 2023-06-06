# Dia 11.1 - Introdução ao Mongo DB [Repositório da aula](https://github.com/tryber/sd-025-b-live-lectures/tree/back/lecture/11.1)

## Utilizando MongoDB com Docker

1. Obter imagem do Mongo  
   `docker pull mongo:5`

2. Inciando uma instância do Mongo Server  
   a. Executar a imagem (crie um nome p/ o container!)  
   `docker run --name <nome-do-container> -d mongo:5`  
   b. Para usar um software externo para acessar o servidor, como Mongo for VScode, é necessário mapear a porta padrão 27017 do container para o seu localhost com o -p:  
   `docker run --name <nome-do-container> -d -p 27017:27017 mongo:5`

3. Executando o shell do Mongo no Docker  
   `docker exec -it <nome-do-container-ou-id> mongo `  
   OBS: v.5 pode usar o comando `mongosh` no lugar de mongo para ter acesso ao shell com novos recursos.

4. Importando arquivos locais para dentro do container utilizando `mongoimport`  
   obs: arquivos JSON, CSV ou TSV criada por mongoexport  
   a. Importando p/ o Container  
   `docker cp nome-do-arquivo.json <nome-do-container-ou-id>:/tmp/nome-do-arquivo.json`  
   b. Importação do arquivo p/ o MongoDB  
   `docker exec <nome-do-container-ou-id> mongoimport -d <nome-do-banco> -c <nome-da-coleção> --file /tmp/nome-do-arquivo.json`

5. Importar uma matriz JSON (Array de dados) com `mongoimport` ,
   `docker exec <nome-do-container-ou-id> mongoimport --collection='from_array_file' --file='one_big_list.json' --jsonArray`

OBS: documentos são equivalentes a objetos JSON, não arrays. Você pode armazenar um array como um value em um documento, mas um documento não pode ser um array.

### Resumo Instalação por Docker Container

```script
docker container run -d -p 27018:27017 --name mongo-db mongo:5
docker container exec -it mongo-db mongosh
mongodb://localhost:27018
```

### Instalação por Docker Compose

```script
docker compose up mongo
docker container exec -it mongo-db bash
```

- Docker compose fornecido na aula.

- Criação do arquivo db (.gitignore) onde será armazenado o banco de dados!

## Banco de dados

O MongoDB armazena os documentos no formato BSON (Binary JSON).

| MongoDB        | SQL            |
| -------------- | -------------- |
| Banco de dados | Banco de dados |
| Coleção        | Tabela         |
| Documento      | Registro       |
| Atributo       | Coluna         |

### Coleções (equivalente as "Tabelas")

- não temos a formalidade de criar um banco de dados antes de fazer uma operação nele.
- Ao fazer um insert, o MongoDB crian o banco e a coleção (caso não existam previamente) juntos com o documento inserido. Tudo isso em uma mesma operação.

```js
use nomeDoBanco
db.nomeDaColecao.insertOne({ x: 1 })
```

- Coleções são schemaless, ou seja, sem esquema/estrutura por padrão.

#### Criação explícita

o método `db.createCollection()` cria uma coleção e pode-se especificar uma série de parâmetros, como o tamanho máximo do documento ou as regras de validação para os documentos.

### Documentos (equivalente aos registros/ "linhas")

Documentos podem conter estruturas mais ricas, diferentes entre documentos e armazenar muito mais informações.  
A estrutura não faz parte da coleção e sim do documento. Com isso, você pode ter várias “estruturas” por coleção.

#### Validação de documentos

## Conectar na Extensão do VSCode

1. Botão de mais +
   `mongodb://localhost:27017`
2. Create Playground
   Arquivo de exemplo para criar arquivo de db.
