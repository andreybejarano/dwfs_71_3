require('dotenv').config();
const express = require('express');
const helment = require('helmet');
const rateLimit = require("express-rate-limit");
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helment());

const limiter = rateLimit({
    windowMs: 900000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

app.get('/hello', (req, res) => {
    return res.send('Hello!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
});