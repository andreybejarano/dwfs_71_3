CREATE DATABASE music;

USE music;

CREATE TABLE bands (
id int not null auto_increment primary key, 
name varchar(255) not null,
members int not null, 
date_start date not null, 
date_end date, 
country varchar(255) not null 
);

INSERT INTO bands (name, members, date_start, date_end, country) VALUES ('Soda Stereo', '3', '1982/05/21', '1997/09/20', 'Argentina'); 
INSERT INTO bands (name, members, date_start, country) VALUES ('Ed Sheeran', '1', '2005/11/02', 'Inglaterra');

SELECT * FROM bands;
SELECT * FROM bands WHERE country = 'Argentina';
SELECT * FROM bands WHERE members = 1;

CREATE TABLE albums (
id int not null primary key AUTO_INCREMENT,
album_name varchar(255) not null,
band int not null,
publication_date date not null
);

INSERT INTO albums VALUES (NULL, 'SPECIAL EDITION', 1, '2021/07/28');
INSERT INTO albums VALUES (NULL, 'RELOADED', 1, '2021/07/28'); 

SELECT * FROM albums;


CREATE TABLE songs (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
duration INT NOT NULL,
album INT NOT NULL,
band INT NOT NULL,
date_publication DATE NOT NULL
);

ALTER TABLE songs ADD FOREIGN KEY (album) REFERENCES albums(id);
ALTER TABLE songs ADD FOREIGN KEY (band) REFERENCES bands(id);
ALTER TABLE albums ADD FOREIGN KEY (band) REFERENCES bands(id);

INSERT INTO songs VALUES (null, 'Perfect', '4', '1', '1', '2002/01/01');
INSERT INTO songs VALUES (null, 'Sugar', '2', '1', '1', '2015/10/03');

SELECT * FROM songs;
SELECT * FROM songs WHERE date_publication >= '2015/01/01';
SELECT * FROM songs WHERE duration >= 3;




