require('dotenv').config();
const express = require('express');

const connection = require('./connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port=${port}`);
});