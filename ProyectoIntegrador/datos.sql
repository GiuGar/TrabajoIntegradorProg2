

use data;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, -- Solamente el id puede tener primary key no todos
nombre VARCHAR(50) NOT NULL, 
email VARCHAR(200) NOT NULL,
contraseña VARCHAR(100) NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
foto_perfil VARCHAR(300),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
imagen_producto VARCHAR(300) NOT NULL,
nombre_produdcto VARCHAR(200) NOT NULL,
descripcion_producto VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
id_producto INT UNSIGNED NOT NULL,
texto_comentario VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- 5 usuarios
INSERT INTO usuarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");

-- Hacer 4 mas de estos usuarios
INSERT INTO usuarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");

INSERT INTO usuarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");

INSERT INTO usuarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");

INSERT INTO usuarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");

-- 10 posteos
-- 1 
INSERT INTO productos
VALUES (DEFAULT, "1", "/images/products/BlusaAura.png", "Blusa Aura", "Color beige con tirantes y bordado floral.", DEFAULT, DEFAULT, DEFAULT);
-- 2 
INSERT INTO productos
VALUES (DEFAULT, "1", "/images/products/BlusaCairo.png", "Blusa Cairo", "Alta calidad, tela suave y colores vibrantes", DEFAULT, DEFAULT, DEFAULT);
-- 3 
INSERT INTO productos
VALUES (DEFAULT, "2", "/images/products/TopCora.png", "Top Cora", "Color morado, tela de gabardina." , DEFAULT, DEFAULT, DEFAULT);
-- 4 
INSERT INTO productos
VALUES (DEFAULT, "2", "/images/products/PantalonLea.png", "Pantalon Lea", "Distintas estampas, colores vibrantes." , DEFAULT, DEFAULT, DEFAULT);
-- 5 
INSERT INTO productos
VALUES (DEFAULT, "3", "/images/products/PolleraCala.png", "Pollera Cala", "Pollera larga, tela tusor, aporta frescura y comodidad." , DEFAULT, DEFAULT, DEFAULT);
-- 6 
INSERT INTO productos
VALUES (DEFAULT, "3", "/images/products/PolleraMuna.png", "Pollera Muna", "Colores vibrantes, con diseños de flores y mandalas." , DEFAULT, DEFAULT, DEFAULT);
-- 7 
INSERT INTO productos
VALUES (DEFAULT, "4", "/images/products/VestidoSofia.png", "Vestido Sofia", "Vestido con vuelos, fresco y juvenil. Colores calidos." , DEFAULT, DEFAULT, DEFAULT);
-- 8 
INSERT INTO productos
VALUES (DEFAULT, "4", "/images/products/VestidoFiona.png", "Vestido Fiona", "Vestido largo, con encajes en la parte superior. 100% lino." , DEFAULT, DEFAULT, DEFAULT);
-- 9
INSERT INTO productos
VALUES (DEFAULT, "5", "/images/products/VestidoAmelia.png", "Vestido Amelia", "Color verde militar, diseños minimalistas florales." , DEFAULT, DEFAULT, DEFAULT);
-- 10
INSERT INTO productos
VALUES (DEFAULT, "5", "/images/products/BolsoLuisa.png", "Bolso Luisa", "Bolso pequeño con diseños de mandalas." , DEFAULT, DEFAULT, DEFAULT);

-- 3 Comentarios por posteo
-- para producto 1 
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");
INSERT INTO comentarios VALUES (1,  "ab@udesa.edu.ar", "AG34", "2004-08-23",  "45767990", "/agus.jpg", "10", "5", "18");




