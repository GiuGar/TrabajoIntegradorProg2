

USE data;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, -- Solamente el id puede tener primary key no todos
email VARCHAR(500) NOT NULL,
contraseña VARCHAR(100) NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
foto_perfil VARCHAR(255),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
imagen_producto VARCHAR(255) NOT NULL,
nombre_produdcto VARCHAR(200) NOT NULL,
descripcion_producto VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
id_producto INT UNSIGNED,
texto_comentario VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- 5 usuarios
INSERT INTO usuarios VALUES (1,  "sfigueroa@udesa.edu.ar", "hola123", "2004-08-23",  "45767751", "/foto1.jpg", NULL, NULL, NULL);

-- Hacer 4 mas de estos usuarios
INSERT INTO usuarios VALUES (1,  "mfreile@udesa.edu.ar", "galileo", "2004-08-23",  "45767752", "/foto2.jpg", NULL, NULL, NULL);

INSERT INTO usuarios VALUES (1,  "abenavent@udesa.edu.ar", "marmota", "2004-08-23",  "45767753", "/foto3.jpg", NULL, NULL, NULL);

INSERT INTO usuarios VALUES (1,  "ggiargiulo@udesa.edu.ar", "hola", "2004-08-23",  "45767754", "/foto4.jpg", NULL, NULL, NULL);

INSERT INTO usuarios VALUES (1,  "ab@udesa.edu.ar", "holahola", "2004-08-23",  "45767755", "/foto5.jpg", NULL, NULL, NULL);

-- 10 posteos
-- 1 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 2 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 3 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 4 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 5 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 6 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 7 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 8 
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 9
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );
-- 10
INSERT INTO productos
VALUES ("1", "1", "imagen", "nombre", "descripcion" , "created" , "updated" , "deleted" );

-- 3 Comentarios por posteo
-- para producto 1 
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 2 
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 3
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 4
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 5 
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 6
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 7
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 8 
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 9
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
-- para producto 10
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");



