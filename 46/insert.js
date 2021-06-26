const movieModel = require('./movieModel');


const newMovie = {
    title: 'El secreto de sus ojos',
    director: 'Juano Jose Campanella',
    genre: 'Misterio',
    year: '2009'
};

const document = new movieModel(newMovie);
document.save();
