-- Se crea la base de datos con el nombre encuentro_47
CREATE DATABASE encuentro_47;

-- Con este comando puedo ver las base de datos que tengo creadas
SHOW DATABASES;

-- con este digo que voy a usar la base de datos encuentro_47
USE encuentro_47;

-- Con este comando puedo ver las tablas creadas en la base de datos que estoy usando
SHOW TABLES encuentro_47;

-- creo la tabla productos 
CREATE TABLE productos (
    -- campo id de tipo entero autoincremental no va a aceptar valores nulos y es la llave primaria
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- campo tipo texto de 255 espacios
	nombre VARCHAR(255) NOT NULL,
    -- Campo precio de tipo flotante de 2 decimales
	precio FLOAT(12, 2) NOT NULL,
    -- campo de tipo fecha
	fecha_ingreso DATE NOT NULL,
    -- campo de tipo fecha y tiempo
	fecha_salida DATETIME, 
    -- campo de tipo booleano aqui se almacena 0 si es FALSE o 1 si es TRUE
	activo TINYINT DEFAULT true
);

-- Inserto 5 productos
INSERT INTO productos (nombre, precio, fecha_ingreso) 
VALUES ('plato', '300', '2021/06/28');

-- Si no coloco el nombre de los campos tengo que colocar en los values todos los valores en orden de creacion
INSERT INTO productos 
VALUES (null, 'Vaso', '200', '2021/06/27', null, false);

INSERT INTO productos 
VALUES (null, 'Cuchillo', '1000', '2021/06/28', null, true);

INSERT INTO productos 
VALUES (null, 'Tenedor', '100', '2021/06/28', null, true);

INSERT INTO productos 
VALUES (null, 'porta retratos', '100', '2021/06/28', null, true);

-- Traigo todos los registros de la tabla productos y muestro todas las columnas
SELECT * FROM productos;

-- Traigo todos los registros pero solo muestro las columnas nombre y producto
SELECT nombre, precio FROM productos;

-- Traigo todos los registros cuya fecha de ingreso sea 2021/06/28
SELECT * FROM productos WHERE fecha_ingreso = '2021/06/28';

-- Traigo todos los registros cuya fecha de ingreso sea 2021/06/28 y el precio sea mayor o igual a 300 o el nombre sea igual a vaso
SELECT * FROM productos WHERE fecha_ingreso = '2021/06/28' AND precio >= 300 OR nombre = 'Vaso';

-- Traigo todos los registros cuyo nombre comienza con v
SELECT * FROM productos WHERE nombre LIKE 'v%';

-- Traigo todos los registros cuyo nombre finaliza con o
SELECT * FROM productos WHERE nombre LIKE '%o';

-- Traigo todos los registro cuyo nombre contenga la letra e
SELECT * FROM productos WHERE nombre LIKE '%e%';

-- Traigo todos los registro cuyo nombre no contenga la letra v
SELECT * FROM productos WHERE nombre NOT LIKE '%v%';

-- Actualizo el campo activo a TRUE donde del nombre del registro sea vaso
UPDATE productos SET activo = TRUE WHERE nombre = 'vaso';

-- Elimino el producto con el id 5
DELETE FROM productos WHERE id = 5;
