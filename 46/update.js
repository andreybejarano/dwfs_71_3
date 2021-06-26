const movieModel = require('./movieModel');

movieModel.findOne({ title: 'Nueve reinas' }).then(data => {
    movieModel.updateOne({ _id: data.id }, { genre: 'Drama' }).then((response) => {
        console.log(response);
    });
});