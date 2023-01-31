# INTRODUÇÃO AO NODE.js

## SISTEMA DE MÓDULOS

**1. Internos (nativos)**

- _fs_: fornece uma API para interagir com o sistema de arquivos de forma geral;
- _url_: provê utilitários para ler e manipular URLs;
- _util_: oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.
- _os_: oferece ferramentas e funcionalidades relacionadas ao sistema operacional.
- _path_:

**2. Locais**
Representam as funcionalidades ou partes do nosso código que foram separados em arquivos diferentes. (Códigos que serão repetidos, por exemplo)

**3. de Terceiros**
São aqueles criados por outras pessoas desenvolvedoras e disponibilizados para uso por meio do npm. (Ex: bibliotecas?)

### Maneiras de importar e exportar módulos

#### ES6

Suporte estável a partir do Node.js versão 14.
Por ainda não ser o padrão recomendado, é necessária a adição de uma chave no arquivo package.json:

```js
// package.json
{
  ...
  "type": "module",
  ...
}
```

ou trocar a extensão do arquivo para .mjs
_Exportação:_ `export nomeVariavel;`
_Importação:_ `import nomeVariavel from './caminho';`

#### CommonJS

_Exportação:_

```js
// nome-do-arquivo.js
module.exports = nomeDaVariavelFuncaoObjetoClasse;
ou;
module.exports = {
  nomeConstante,
  nomeFuncao,
};
```

_Importação:_

```js
//modulo interno - podemos escolher qlqr nome para constante.
const fs = require("fs");

//modulo local - caminho do arquivo, sem extensão.
const nomeQueQuisermos = require("./nome-do-arquivo");
const { nomeConstante, nomeFuncao } = require("./nome-do-arquivo");

//modulo de terceiros - necessita instalação na pasta do projeto
//npm install -> /node_modulos
```

Não precisa da extensão.
O Node.js já procura por arquivos terminados em .js ou .json e os considera como módulos.

Quando importamos um módulo que não é nativo do Node.js e que não aponta para um arquivo local, o Node inicia uma busca por esse módulo. Essa busca acontece na pasta node_modules.

## NPM - Node Package Manager

**1. npm init**
Cria um arquivo chamado package.json, onde configuramos o nosso pacote com nome, versão, autores, dependências e scripts.
`npm init -y`
Com a tag `-y` nenhuma pergunta (nome, versão, autor) será feita e a inicialização será realizada com os valores padrão.

**2. npm run**
Esse comando executa um determinado _script_ configurado no package.json

```js
// package.json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

comando: `npm run lint`

**3. npm start**
Sua função é executar o script start definido no package.json.
O mesmo q `npm run start`

**4. npm install**
Responsável por baixar e instalar pacotes Node.js do NPM para o nosso pacote

- _npm install <nome do pacote>_: baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json;

- _npm install -D <nome do pacote>_: ... adiciona ao objeto devDependencies do package.json, indicando que o pacote em questão não é necessário para executar a aplicação.
  Ele é necessário para desenvolvimento, ou seja, para alterar o código daquela aplicação. Isso é muito útil ao colocar a aplicação no ar, pois pacotes marcados como devDependencies podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la.
  A versão longa equivalente dessa flag é `--save-dev`.

- _npm install -E <nome do pacote>_: baixa uma versão exata de um pacote do registro do NPM e o adiciona ao objeto dependencies ou ao objeto devDependencies caso a flag -D também esteja presente.

- _npm install_: baixa e instala todos os pacotes listados nos objetos de dependencies e devDependencies do package.json.

## CRIANDO SCRIPT SIMPLES

1. Criando o pacote Node.js
   a) crie a pasta do projeto. ex: hello-word
   b) rode o comando: `npm init -y`
2. Criando o código
   c) crie o arquivo index.js na pasta hello-word, onde será colocado a lógica q será executada. ex: `console.log('Hello, word!');`
3. Criando o script start

```js
// package.json
"name": "hello-world",
...
"scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
       "start": "node index.js"
   }
...
```

4. Executando o script
   d) No terminal, navegue até a pasta hello-world e execute: `npm start`.
5. Lendo input do terminal
   a) Utilizando um pacote de terceiros: o _readline-sync_, q tem q ser instalado.
   b) Executarmos o comando `npm i --save-exact readline-sync@1.4.10` dentro da pasta hello-world.
   c) Para utiliza-lo, devemos importa-lo no arquivo index.js
   d) podemos utilizar as funções _question_ e _questionInt_ disponibilizadas por ele para perguntar à pessoa usuária seu nome e idade:

```js
// hello-word/index.js
const readline = require("readline-sync");

const name = readline.question("Qual seu nome? ");
const age = readline.questionInt("Qual sua idade? ");

// console.log('Hello, world!');
console.log(`Hello, ${name}! You are ${age} years old!`);
```

## LEITURA E ESCRITA DE ARQUIVOS EM OPERAÇÕES BACK-END

### Lendo arquivos com métodos síncronos e assíncronos

**1. método fs.readFileSync**

- Leitura síncrona

**2. método fs.readFile**

- Leitura assíncrona
- Usa callback

**3. método `fs.promises.readFile`**

- Leitura assíncrona
- Mais performático que os anteriores
- Usa async/await ou then/catch

[Doc Node.js fs.readFile](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback)

_Importação:_ `const fs = require("fs").promises;`

Para podermos utilizar o async/await, precisamos criar uma função main e colocar nossa lógica dentro dela. Isso acontece porque o await só pode ser utilizado dentro de funções async.

```js
//hello-word/readFile.js
const fs = require("fs").promises;

async function readData() {
  // try {
  const data = await fs.readFile("./meu-arquivo.txt", "utf-8");
  //  console.log(data);
  //} catch (err) {
  //  console.error(`Erro ao ler o arquivo: ${err.message}`);
  //}
}

readData();
```

Configurar o script no `package.json`;
Rodar o comando: `npm run read-file`.

### Escrvendo dados em arquivos

o módulo `('fs').promises` também disponibiliza o método `writeFile("/arquivo", "")` para escrita.
[Doc Node.js fs.writeFile](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback)

ex: hello-word/writeFile.js
package.json: `script: {"write-file": "node writeFile.js"}`
comando: `npm run write-file`

Se o arquivo especificado (meu-arquivo.txt) não existir, será criado!
Caso contrário, será _reescrito_, ou seja, o conteúdo é substituído pelo novo.
Mas há estratégias para evitar isso, como:

- antes de usar o writeFile(), ler o conteúdo anterior, salvar numa variável e enviar para o writeFile() o anterior + o novo.
  ex:

```js
//hello-word/writeFile.js

// const fs = require("fs").promises;
const { readData } = require("./hello-word/readFile");

async function writeData(newData) {
  // try {
  const oldData = await readData();
  const allData = [...oldData, newData];
  await fs.writeFile("./meu-arquivo.txt", allData);
  //   console.log("Arquivo escrito com sucesso!");
  // } catch (err) {
  //   console.error(`Erro ao escrever o arquivo: ${err.message}`);
  // }
}

writeData(newData);
```

No `writeFile`, assim como ocorre no `readFile`, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro (flag) opcional em seus métodos.

- A opção flag especifica como o arquivo deve ser aberto e manipulado.
  a) default: 'w' (arquivo deve ser aberto para escrita);
  b) 'wx' funciona como 'w', mas lança um erro caso o arquivo já exista.
