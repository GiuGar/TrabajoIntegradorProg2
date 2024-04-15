

use data;

CREATE TABLE usuarios (

 -- Solamente el id puede tener primary key no todos
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
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
-
-- 3 Comentarios por posteo
-- para producto 1 
INSERT INTO comentarios VALUES (DEFAULT,1, 1, 'Amé la blusa Aura, fui el centro de atencion en mi fiesta de cumpleaños' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,1, 2, 'Muy buena calidad, volveré a comprar!!' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,1, 3, 'Me encantó!!! Se lo recomende a una amiga y tambien se lo compró :)' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 2
INSERT INTO comentarios VALUES (DEFAULT,2, 1, 'Muy buen calce!!' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,2, 1, 'Muy buena calidad' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,2, 3, 'me conecta con la naturaleza cada vez que lo uso.' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 3
INSERT INTO comentarios VALUES (DEFAULT,3, 3, 'Ya las recomendé :))' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,3, 2, 'Me encantó!!!' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,3, 3, 'me conecta con la naturaleza cada vez que lo uso.' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 4
INSERT INTO comentarios VALUES (DEFAULT,4, 4, 'El tejido de esta pantalon de cáñamo es un abrazo de Madre Tierra. Sostenible y cómodo.' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,4, 4, 'Quede encantada' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,4, 5, 'Me encantan los bolsillos de estos pantalones, son súper prácticos y cómodos' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 5
INSERT INTO comentarios VALUES (DEFAULT,5, 3, 'Muy comoda y fresca' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,5, 2, 'El amor es el hilo conductor de nuestro estilo hippie.' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,5, 3, 'La moda hippie: una celebración de la individualidad y la creatividad.' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 6
INSERT INTO comentarios VALUES (DEFAULT,6, 1, 'El amor es el hilo conductor de nuestro estilo hippie. ' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,6, 1, ' ideal para el verano.' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,6, 5, 'Me sorprendió lo bien que queda este vestido' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 7
INSERT INTO comentarios VALUES (DEFAULT,7, 1, 'Combinable y atemporal ' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,7, 4, ' Muy original' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,7, 3, 'Práctico y estiloso' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 8
INSERT INTO comentarios VALUES (DEFAULT,8, 5, 'Es hermoso ' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,8, 3, ' Muy trendy' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,8, 3, 'Encantada con la ropa que venden' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 9
INSERT INTO comentarios VALUES (DEFAULT,9, 1, 'Viste tu espíritu libre con la exuberancia del estilo bohemio.' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,9, 2, ' La moda bohemia: un tributo a la creatividad y la individualidad. ' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,9, 3, 'Muy bonito' ,DEFAULT, DEFAULT ,DEFAULT  );

-- para producto 10
INSERT INTO comentarios VALUES (DEFAULT,10, 3, 'Muy lindo todo y muy comodo' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,10, 4, ' Me encantó!!! ' ,DEFAULT, DEFAULT ,DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT,10, 2, 'Muy lindo todo y muy comodo' ,DEFAULT, DEFAULT ,DEFAULT  );




