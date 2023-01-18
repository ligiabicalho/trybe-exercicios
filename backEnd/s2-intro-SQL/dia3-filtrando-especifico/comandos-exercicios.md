# BackEnd Seção 2 - Introdução ao SQL

## Dia 3 - Filtrando por comandos mais específicos

### WHERE

SELECT \* FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT \* FROM sakila.customer // SELECT first_name ...
WHERE active <> 1 AND store_id = 2 AND first_name <> 'kenneth'
ORDER BY first_name;

SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
WHERE rating <> 'R' AND rating <> 'NC-17' AND replacement_cost > 18
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT COUNT(\*) AS 'clientes_ativos_loja_1' FROM sakila.customer
WHERE active = 1 AND store_id = 1;

SELECT \* FROM sakila.customer
WHERE active = 0 AND store_id = '1';

SELECT \* FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title LIMIT 50;
