// funciones estáticas(para no instanciar, no voy a crear objetos). Lo hago con static.

class Calculator {
    static sum(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            console.log('no puedo dividir por cero');
            return;
        }
        return a / b;
    }
}

module.exports = Calculator; // exporto la clase