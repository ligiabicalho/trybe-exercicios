# DOCKERFILE - Palavras reservadas

O Dockerfile é um arquivo de configuração com uma linguagem própria, que é usado pelo Docker como um passo a passo (RECEITA) do que você deseja que aconteça.
Limpando tudo antes de começar (remove todos containers e imagens Docker que estejam no computador):
docker system prune -af

## FROM <nome-da-imagem>

\*significa que vamos começar a construção desta imagem a partir da imagem Docker já existente; ex: FROM httpd:2.4

## FROM <nome-da-imagem> AS <nome-do-estagio>

### prefixo: AS

durante o build podemos estar em estágios diferentes, e neste caso nós acabamos de nomear o estágio atual para primeiro-estagio

## CMD [list]

*Indica qual comando <PODE> ser utilizado ao iniciar a imagem como um container, uma sugestão;
pode ser usado como um 'default', q pode ser substituído.
*aceita uma lista de parâmetros: ["echo", "Uma msg no terminal"]
ex: CMD ["httpd-foreground"]
.Estamos especificando que o programa httpd-foreground seja executado <ao iniciar> essa imagem como um container.
.Este programa já veio junto com a imagem base (FROM httpd), portanto não precisamos nos preocupar.

## ENTRYPOINT <comando> <argumento1> <argumento2> <argumentoN>:

*Indica qual é o comando (e seus argumentos) que <DEVE> ser executado <ao iniciar> esta imagem Docker como um container;
*Considere o ENTRYPOINT como OBRIGAÇÃO de comando a ser executado;
\*Ele sempre será utilizado como ponto de entrada da imagem.

## RUN

\*Indica que o comando <DEVE> ser executado imediatamente, DURANTE A <CONSTRUÇÃO> (build) da imagem Docker!

## COPY <arquivo> <local-de-destino>

*Esta linha vai copiar um arquivo no computador local e colocá-lo dentro da imagem, no caminho especificado à frente.
*comando ADD <index.html> </usr/local/apache2/htdocs>. Alternativa, que nesse caso, não mudaria nada, mas o comando ADD tem duas funcionalidades interessantes, tais como:
.Fazer o download do conteúdo (externo) de uma URL <src> na pasta de destino <dest>
.Descompactar automaticamente arquivos compactados de formatos reconhecidos (.tar, .gzip, .bzip2, etc)

### COPY --from=primeiro-estagio

Esse é o segredo principal de construção de múltiplos estágios;
O COPY possui a capacidade de copiar arquivos entre os estágios;
A flag --from indica que devemos copiar o seguinte arquivo ou pasta de um estágio para o estágio atual;

## EXPOSE

*Esta linha indica que a imagem poderá receber conexões pelo número da porta que for informado; ex: EXPOSE 80
*Neste caso, indica que a imagem poderá receber conexões na porta 80, que é a porta padrão utilizada pelo httpd.

## WORKDIR /site

indica para o Docker qual é a pasta atual de trabalho dentro da imagem;

# COMANDOS DOCKER

## CRIAR IMAGEM:

### docker build -t <nome-da-imagem> <contexto: pasta a ser utilizada para criação da imagem>

docker build -t meu-servidor-web .
docker image build -t meu-servidor-web .

- flag -t ?
  Passando a flag -t e solicitando a criação de uma sessão de terminal;
  -o ponto indica o diretório atual, aonde está o que será nossa imagem: arquivo html + Dockerfile.

## EXECUTAR/CRIAR(?) O CONTAINER COM NOSSA IMAGEM:

### docker run --rm -d -p 1234:80 --name <nome-container> <nome-imagem-ja-criada>

-Agora acessamos o endereço http://localhost:1234;
-flag --rm desejamos que um container seja removido ao final da sua execução.
-flag -p <porta-computado>:<porta-container>, durante o docker run, estamos solicitando ao Docker que abra uma exceção neste isolamento, fazendo um mapeamento da porta 1234 do nosso computador para a porta 80, dentro da rede do container.
-flag -d é usada pra desacoplar o terminal (rodar em segundo plano);
.Logo, ao fazer uma conexão na porta 1234 do nosso computador, estamos na verdade fazendo uma conexão na porta 80 dentro do container.

## REMOVER CONTAINER

### docker rm -f <nome-container>

-Força a remoção do container do computador.

## REMOVER imagem

### docker rmi <id-imagem>

## REMOVER TODOS CONTAINER & IMAGENS DOCKER

#### docker system prune -af

-Remover todos os containers e imagens Docker que estejam em seu computador

# DICAS DE AULA:

-Estudar sobre APACHE
-Em um arquivo html: <exclamação> <enter> gera o código padrão pra iniciar uma pag HTML
-BOA PRÁTICA pra criar nome de imagem: <nome-de-usuario/nome-da-imagem>
