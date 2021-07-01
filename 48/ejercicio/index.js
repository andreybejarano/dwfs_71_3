require('dotenv').config();
const express = require('express');

const connection = require('./connection'); 
const bandModel = require('./bandModel');
const albumsModel = require('./albumsModels');

const songsModel = require('./songsModel');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/song', async (req, res) => {
    try {
        const songs = await songsModel.findAll();
        return res.json({
            status: 200,
            data: songs
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error
        });
    }
});

app.get('/band', async (req, res) => {
    try {
        const bands = await bandModel.findAll();
        return res.json({
            status: 200,
            data: bands
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error
        });
    }
});

// Get albums
app.get('/album', async (req, res) =>{
    try {
        const albums = await albumsModel.findAll();
        return res.json({
            status:200,
            data: albums
        })
    
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error
        })
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port=${port}`);
});