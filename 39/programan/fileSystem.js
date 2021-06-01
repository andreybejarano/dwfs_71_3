const fs = require('fs'); // importo libreria js
fs.writeFile('./archivo.txt', 'Hola mundo', (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('el archivo se creó satisfactoriamente');
}) // ruta donde se va a crear el archivo en el primer parametro, segundo texto a asignar, y tercero callback por siq uiero hacer otra cosa.
