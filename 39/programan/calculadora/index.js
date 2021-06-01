// primero llamar librerias y luego modulos, por organización del código.
const fs = require('fs');

const Calculator = require('./calculadora');
const sum = Calculator.sum(18,20);
const substract = Calculator.subtract(60,10);
const multiply = Calculator.multiply(1,10);
const divide = Calculator.divide(20,2);

fs.appendFile('./resultados.txt', `
Suma: ${sum}
Resta: ${substract}
Multiplicación: ${multiply}
División: ${divide}
`, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('se creó el archivo satisfactoriamente');
}) // Write file: este método resetea el contenido del archivo cada vez que se ejecuta.
//appendFile agrega contenido al archivo ya creado, y si no hay un archivo, lo crea de cero.

