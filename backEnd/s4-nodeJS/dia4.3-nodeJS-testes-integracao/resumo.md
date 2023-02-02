# Dia 4.3 Node.js: Testes de integração

## Tipos de teste

Questões importantes ao desenvolver testes: seu escopo e interação.

**- Testes unitários:** escopo limitado a um fragmento do código, com interação mínima.
**- Testes integração:** junção de múltiplos escopos com interação entre eles.
**- Testes de ponta-a-ponta:** (PaP; End-to-End; E2E), fluxo de interação completo da app, de uma ponta a outra.
-> Esse teste é o mais completo, pois necessita que todos os demais testes tenham sido desenvolvidos.

## Testes automatizados

### Ferramentas

**Jest**
Testes unitários e simples;
Projetado para o React, mas funciona em outros projetos Javascript;
Possui suporte integrado para execução automática de testes a cada alteração no código;
Não oferece suporte a testes assíncronos.

**Mocha**
Projetado para Node.js;
Focado nos 3 tipos de testes;
É um framework mais antigo e mais maduro do que o Jest;
Requer outras bibliotecas para funcionar, como _chai_ e _sinon_:

- chai: biblioteca de asserção;
- sinon: implementa dubles de teste, como: spies, stubs e mocks.
  Suporta testes assíncronos.

Fazendo a instalção:
npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact

## Contratos de APIs

-> regras de entrada e saída de dados da API.

## Escrevendo testes

1. configurar o ambiente para iniciar desenvolvimento usando TDD:
   mkdir cacau-trybe
   cd cacau-trybe
   npm init -y
   npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact
   ATENÇÃO!! Não esquecer de colocar `node_modules` no `.gitignore`.

2. Criar pastas dentro da pasta de trabalho
   mkdir src tests/integration
   E o arquivo de test: chocolates.test.js

3. Configurar script de test no package.json
   "test": "mocha tests/\*_/_.test.js --exit"
