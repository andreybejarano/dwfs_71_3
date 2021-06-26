const connection = require('./connection');

const moviesMovies = connection.Schema({
    title: String,
    director: String,
    genre: String,
    year: Date
});

const movieModel = connection.model('movies_argetina', moviesMovies);

module.exports = movieModel;