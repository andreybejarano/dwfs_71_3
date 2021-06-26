const movieModel = require('./movieModel');

movieModel.findOne({ title: 'Nueve reinas' }).then(data => {
    movieModel.deleteOne({ _id: data.id }).then((response) => {
        console.log(response);
    });
});