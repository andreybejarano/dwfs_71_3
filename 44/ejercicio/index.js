require('dotenv').config();
const express = require('express');
const app = express();

const users = [{
    user: 'juan',
    password: '123456',
    country: 'AR'
}];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.post('/login', (req, res) => {
    const user = users.find(element => element.user === req.body.user && element.password === req.body.password);
    if (!user) {
        return res.status(401).json({
            status: 401,
            error: 'user/password invalid'
        })
    }
    delete user.password;
    return res.json(user);
})

app.post('/user', (req, res) => {
    const {user,password,country} = req.body;
    users.push({user,password,country});
    return res.status(201).json({
        status: 201,
        message: "user created"
    })
})

app.get('/user', (req, res) => {
    return res.json(users);
})

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`)
});

