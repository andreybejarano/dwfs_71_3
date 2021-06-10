const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

const user = {
    name: 'andrey',
    password: '123456'
};

user.name;
user['name'];

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

const users = [
    {
        id: 1,
        name: 'andrey',
        password: '123456'
    },
    {
        id: 2,
        name: 'roberto',
        password: '123456'
    }
];

function userAutoincrement(req, res, next) {
    const nextId = users[users.length - 1].id + 1;
    req.body.id = nextId;
    next();
}

function verifyUserInputs(req, res, next) {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(422).json({
            status: 422,
            error: 'name and password are required'
        });
    }
    if (password.length < 6) {
        return res.status(422).json({
            status: 422,
            error: 'Password has to be bigger than 6 characters'
        });
    }
    next();
}

function verifyHeader(req, res, next) {
    const header = req.headers['authorization'];
    if(!header) {
        return res.status(401).json({
            status: 401,
            error: 'Unauthorize'
        });
    }

    next();
}

app.use(verifyHeader);

app.post('/user', verifyUserInputs, userAutoincrement, (req, res) => {
    const { body } = req;
    users.push({
        id: body.id,
        name: body.name,
        password: body.password
    });
    return res.status(201).json({
        status: 201,
        message: 'user created'
    });
});

app.get('/user', (req, res) => {
    return res.json(users);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})