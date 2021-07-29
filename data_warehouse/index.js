require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();
const apiPath = '/api';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('dist'));

app.use(apiPath, require('./routes'));

mongoose.Promise = global.Promise;
const userPaswordDatabase = (config.database.user || config.database.password) && `${config.database.user}:${config.database.password}@`;
mongoose.connect(
    `mongodb://${userPaswordDatabase}${config.database.host}:${config.database.port}/${config.database.name}`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
)
    .then(() => {
        app.listen(config.port, () => {
            console.log(`Server started on http://localhost:${config.port} (${config.env})`);
        });
    })
    .catch(err => {
        console.log(`DB connection Error: ${err.message}`);
    });




