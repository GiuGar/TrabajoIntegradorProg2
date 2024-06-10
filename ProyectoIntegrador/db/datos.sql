-- LISTOOOOOO 

CREATE SCHEMA TrabajoIntegrador;
USE TrabajoIntegrador;


CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, -- Solamente el id puede tener primary key no todos
usuario VARCHAR(100) NOT NULL,
email VARCHAR(500) NOT NULL,
password VARCHAR(100) NOT NULL,
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
INSERT INTO usuarios VALUES (DEFAULT, "@Felicidad__", "felicidad@gmail.com", "hola123", "1998-08-23",  "39492850", "/images/users/usuario1.png", DEFAULT, DEFAULT, DEFAULT);

-- Hacer 4 mas de estos usuarios
INSERT INTO usuarios VALUES (DEFAULT, "@DanzaEspiral", "danzaespiral@gmail.com", "galileo", "2002-03-08",  "43640284", "/images/users/usuario2.png", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios VALUES (DEFAULT, "@ViajeroCósmico", "viajerocosmico@gmail.com", "marmota", "2001-10-15",  "40147295", "/images/users/usuario3.png", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios VALUES (DEFAULT, "@NubeNomada", "nubenomada@gmail.com", "estilohippie", "2003-06-02",  "45767754", "/images/users/usuario4.png", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios VALUES (DEFAULT, "@MadreTierra", "madretierra@gmail.com", "c0ntras3ña", "1963-12-17",  "11382957", "/images/users/usuario5.png", DEFAULT, DEFAULT, DEFAULT);

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
INSERT INTO comentarios VALUES (DEFAULT, 1, 1, 'Amé la blusa Aura, fui el centro de atencion en mi fiesta de cumpleaños.', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 2, 1, 'Muy buena calidad, volveré a comprar!!!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 3, 1, 'Me encantó!!! Se lo recomendé a una amiga y también se lo compró :)', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 2
INSERT INTO comentarios VALUES (DEFAULT, 3, 2, 'Muy buen calce!!!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 4, 2, 'Muy buena calidad', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 5, 2, 'Me conecta con la naturaleza cada vez que lo uso.', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 3
INSERT INTO comentarios VALUES (DEFAULT, 5, 3, 'Ya las recomendé :))', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 2, 3, 'Me encantó!!!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 4, 3, 'Muy lindo todo y muy cómodo.', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 4
INSERT INTO comentarios VALUES (DEFAULT, 2, 4, 'El tejido de esta pantalón de cáñamo es un abrazo de Madre Tierra.', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 1, 4, 'Quedé encantada', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 5, 4, 'Me encantan los bolsillos de estos pantalones, son súper prácticos y cómodos', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 5
INSERT INTO comentarios VALUES (DEFAULT, 4, 5, 'Estoy enamorada de esta pollera!!!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 3, 5, 'Me encantó:)', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 1, 5, '¿Quién necesita etiquetas cuando puedes ser auténticamente hippie? #LibertadDeExpresión', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 6
INSERT INTO comentarios VALUES (DEFAULT, 2, 6, 'Muy cómoda y fresca', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 1, 6, 'Es super versátil!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 4, 6, 'La moda hippie: una celebración de la individualidad y la creatividad.', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 7
INSERT INTO comentarios VALUES (DEFAULT, 5, 7, 'Me sorprendió lo bien que queda este vestido.', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 2, 7, 'Ideal para el verano.', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 3, 7, 'El amor es el hilo conductor de nuestro estilo hippie.', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 8
INSERT INTO comentarios VALUES (DEFAULT, 1, 8, 'Combinable y atemporal ', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 4, 8, 'Lo quiero llevar a todos mis viajes!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 3, 8, 'Práctico y estiloso', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 9
INSERT INTO comentarios VALUES (DEFAULT, 1, 9, 'Es hermoso ', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 5, 9, 'Es tan elegante! Me encanta!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 2, 9, 'Encantada con la ropa que venden', DEFAULT, DEFAULT, DEFAULT  );

-- para producto 10
INSERT INTO comentarios VALUES (DEFAULT, 4, 10, 'Lo amo. Lo llevo a todos lados.', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 3, 10, 'Super amplio. Entra de todo!!!', DEFAULT, DEFAULT, DEFAULT  );
INSERT INTO comentarios VALUES (DEFAULT, 5, 10, 'Muy bonito', DEFAULT, DEFAULT, DEFAULT  );