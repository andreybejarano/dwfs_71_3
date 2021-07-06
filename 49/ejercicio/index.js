require('dotenv').config();
const express = require('express');

const SongController = require('./controllers/Song');
const BandController = require('./controllers/Band');
const AlbumController = require('./controllers/Album');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/song', SongController.getAll);
app.get('/band', BandController.getAll);
app.get('/album', AlbumController.getAll);
app.get('/song/:id', SongController.getSongById);
app.get('/album/:id', AlbumController.getById);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port=${port}`);
});