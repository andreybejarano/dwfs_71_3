const movieModel = require('./movieModel');

// Trae todos los documentos de una coleccion array de objetos
movieModel.find().then(data => {
    console.log(data);
});

// Trae un elemento segun el criterio de busqueda retorna el primero que encuentra
movieModel.findOne({ title: 'El secreto de sus ojos' }).then(data => {
    console.log(data);
});

// REtorna un array con todos los documentos que cumplan el criterio de busqueda
movieModel.find({ title: 'Nueve reinas' }).then(data => {
    console.log(data);
});