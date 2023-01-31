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
_Exportação:_ export nomeVariavel;
_Importação:_ import nomeVariavel from './caminho';

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
_npm init -y_
Com a tag -y nenhuma pergunta (nome, versão, autor) será feita e a inicialização será realizada com os valores padrão.

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

comando: npm run lint

**3. npm start**

## LEITURA E ESCRITA DE ARQUIVOS EM OPERAÇÕES BACK-END

### Lendo arquivos com métodos síncronos e assíncronos

**1. fs.readFileSync\***

- Leitura síncrona

**2. fs.readFile**

- Leitura assíncrona
- Usa callback

**3. fs.promises.readFile**

- Leitura assíncrona
- Mais performático que os anteriores
- Usa async/await ou then/catch

_Importação:_

```js
const fs = require("fs").promises;
```

Para podermos utilizar o async/await, precisamos criar uma função main e colocar nossa lógica dentro dela. Isso acontece porque o await só pode ser utilizado dentro de funções async.

```js
const fs = require("fs").promises;

async function main() {
  try {
    const data = await fs.readFile("./meu-arquivo.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main();
```
