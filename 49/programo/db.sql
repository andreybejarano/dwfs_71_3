use encuentro_49;

CREATE TABLE eventos (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fecha DATETIME
);

CREATE TABLE participantes (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(16),
    empresa VARCHAR(255),
    cargo VARCHAR(255),
    numero_documento VARCHAR(16),
    eventos_id INT,
    FOREIGN KEY(eventos_id) REFERENCES eventos(id) 
);

INSERT INTO eventos VALUES(NULL, 'Nodeconf', '2021-07-10 08:00:00');
INSERT INTO eventos VALUES(NULL, 'Pyconf', '2021-08-11 08:00:00');

INSERT INTO participantes  VALUES(NULL, 'Belen', 'belen@email.com', '1122334455', 'Acamica', 'Developer Junior', '123456789', 1);
INSERT INTO participantes  VALUES(NULL, 'Roberto', 'roberto@email.com', '1122334455', 'Acamica', 'Developer Junior', '123456789', 1);
INSERT INTO participantes  VALUES(NULL, 'Mateo', 'mateo@email.com', '112238989', 'Mozilla fundation', 'Developer Junior', '123456789', 2);

SELECT p.id, 
p.nombre, 
p.email,
p.telefono,
p.empresa,
p.cargo,
p.numero_documento,
e.nombre AS nombre_evento,
e.fecha
FROM participantes p
INNER JOIN eventos e ON e.id = p.eventos_id;

SELECT p.id, 
p.nombre, 
p.email,
p.telefono,
p.empresa,
p.cargo,
p.numero_documento,
e.nombre AS nombre_evento,
e.fecha
FROM participantes p, eventos e
WHERE p.eventos_id = e.id;

SELECT COUNT(p.id) as cantidad_participantes,
e.nombre as nombre_evento
FROM participantes p, eventos e
WHERE p.eventos_id = e.id
GROUP BY e.id;

SELECT p.id, 
p.nombre, 
p.email,
p.telefono,
p.empresa,
p.cargo,
p.numero_documento,
e.nombre AS nombre_evento,
e.fecha
FROM participantes p, eventos e
WHERE p.eventos_id = e.id
ORDER BY p.nombre ASC;
