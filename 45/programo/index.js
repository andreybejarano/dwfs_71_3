require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    {
        id: 1,
        name: "admin",
        password: "123",
        role: 'admin'
    },
    {
        id: 2,
        name: "usuario",
        password: "123",
        role: 'user'
    }
];

const news = [{
    id: 1,
    titulo: "noticia 1"
}];

function jwtMiddleware(req, res, next) {
    const headerAuth = req.headers['authorization'];
    if (!headerAuth) {
        return res.status('401').json({ message: 'Token is missing!' });
    }
    const [, token] = headerAuth.split(' ');
    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        const routesUser = [
            '/news',
        ];
        if (tokenDecoded.user.role === 'user') {
            const routeAllowed = routesUser.find(route => route === req.path);
            if (!routeAllowed) {
                return res.status(401).json({message: 'la ruta no es permitida para este rol'});
            }
        }
        req.user = tokenDecoded.user;
    } catch (error) {
        let message;
        switch (error.name) {
            case 'JsonWebTokenError':
                message = 'Error in the JWT';
                break;
            default:
                message = 'Error';
                break;
        }
        return res.status(401).json({ message });
    }
    return next();
}

app.post('/login', (req, res) => {
    const user = users.find(element => element.name === req.body.name && element.password === req.body.password);
    if (!user) {
        return res.status(401).json({
            status: 401,
            error: "usuario y/o contraña incorrecto"
        });
    }
    const token = jwt.sign({
        user: {
            id: user.id,
            role: user.role
        }
    }, process.env.JWT_SECRET);

    return res.json({ token });
});

app.get('/news', jwtMiddleware, (req, res) => {
    return res.json(news);
});


app.listen(process.env.PORT, function () {
    console.log(`Server started on PORT ${process.env.PORT}`);
});