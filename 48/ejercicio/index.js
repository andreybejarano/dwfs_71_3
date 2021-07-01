require('dotenv').config();
const express = require('express');

const connection = require('./connection');

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


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port=${port}`);
});