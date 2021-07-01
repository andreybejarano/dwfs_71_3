require('dotenv').config();
const express = require('express');

const connection = require('./connection');
const albumsModel = require('./albumsModels');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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