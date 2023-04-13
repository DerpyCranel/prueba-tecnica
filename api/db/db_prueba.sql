 CREATE DATABASE db_prueba;

use db_prueba;




CREATE TABLE niveles(
    id_nivel INT(11) AUTO_INCREMENT PRIMARY KEY,
    nivel VARCHAR(50)
);

CREATE TABLE  usarios(
id_usuario INT(11) AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR (50), 
apellidos VARCHAR (50),
password VARCHAR(255),
id_nivel INT(11),
FOREIGN KEY (id_nivel) REFERENCES niveles(id_nivel)
);

