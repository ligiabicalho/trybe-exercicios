CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE localizacao(
    localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
) ENGINE=InnoDB;

CREATE TABLE especie(
    especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    localizacao_id VARCHAR(50) NOT NULL,
    FOREIGN KEY (localizacao_id) REFERENCES localizacao(localizacao_id)
) ENGINE=InnoDB;

CREATE TABLE gerente(
    gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE cuidador(
    cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animal(
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie_id VARCHAR(50) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
FOREIGN KEY (especie_id) REFERENCES especie(especie_id)
) ENGINE=InnoDB;