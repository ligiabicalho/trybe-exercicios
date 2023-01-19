# Backend Seção 2 - Introdução ao SQL

## Dia 4 - Manipulando Tabelas

### INSERT

INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

#### Inserindo várias linhas de uma vez:

INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');

#### Ignorando linhas existentes:

INSERT IGNORE: ignora os erros e pula os dados problemáticos, que, normalmente, interromperiam a query em função de alguma restrição imposta na tabela.

Table: pessoas
| id | names |
|----|--------|
| 1 | Maria |
| 2 | João |
| 3 | José |
| 4 | Gloria |

Ex: INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT \* FROM pessoas;

#### Inserindo valores em colunas com auto_increment

auto_increment é uma funcionalidade que todos os bancos de dados possuem.
Ela permite que valores sejam gerados automaticamente cada vez que uma nova linha é inserida em uma tabela que tem essa restrição ativa.
ex: column 'id'

#### INSERT SELECT

Inserindo dados a partir de uma outra tabela.

INSERT INTO tabelaA (coluna1, coluna2)
SELECT tabelaB.coluna1, tabelaB.coluna2
FROM tabelaB
WHERE tabelaB.nome_da_coluna <> 'algumValor'
ORDER BY tabelaB.coluna_de_ordenacao;

#### Exercícios

1. INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
   VALUES ('Lígia', 'Bicalho', '1', '1', 'ligiabicalho');

2.

3.
