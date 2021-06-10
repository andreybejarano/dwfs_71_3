const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let authors = [
    {
        id: 1,
        nombre: 'Jorge Luis',
        apellido: 'Borges',
        fechaDeNacimiento: '24/08/1899',
        libros: [
            {
                id: 1,
                titulo: 'Ficciones',
                descripcion: 'Se trata de uno de sus mas... ',
                anioPublicacion: 1944
            },
            {
                id: 2,
                titulo: 'El Aleph',
                descripcion: 'Otra recopilacion de cuentos...',
                anioPublicacion: 1949
            }
        ]
    }
];

function userExist(req, res, next) {
    const author = authors.find(element => element.id == req.params.id);
    if (!author) {
        return res.status(404).json({
            status: 404,
            error: "author not found"
        });
    }
    req.author = author;
    next();
}

// Authors
app.get('/author', (req, res) => {
    return res.json({
        status: 200,
        data: authors
    })
});

app.post('/author', (req, res) => {
    const { nombre, apellido, fechaDeNacimiento } = req.body;
    if(!nombre || !apellido || !fechaDeNacimiento)  {
        return res.status(422).json({
            status: 422,
            error: 'The inputs \"nombre\", \"apellido\" and \"fechaDeNacimiento\" are required'
        });
    }
    const id = authors[authors.length - 1].id + 1; // incrementar id
    authors.push({ id, nombre, apellido, fechaDeNacimiento, libros: [] });
    return res.status(201).json({
        status: 201,
        message: 'author created'
    });
});

app.get('/author/:id', userExist, (req, res) => {
    return res.json({
        status: 200,
        data: req.author
    });
});

app.patch('/author/:id', userExist, (req, res) => {
    const { nombre, apellido, fechaDeNacimiento } = req.body;
    const authorIndex = authors.findIndex(element => element.id === req.author.id);
    authors[authorIndex].nombre = nombre ? nombre : authors[authorIndex].nombre;
    authors[authorIndex].apellido = apellido ? apellido : authors[authorIndex].apellido;
    authors[authorIndex].fechaDeNacimiento = fechaDeNacimiento ? fechaDeNacimiento : authors[authorIndex].fechaDeNacimiento;
    return res.json({
        status: 200,
        message: "author updated"
    });
});

app.delete('/author/:id', userExist, (req, res) => {
    const authorIndex = authors.findIndex(element => element.id === req.author.id);
    authors.splice(authorIndex, 1);
    return res.status(202).json({
        status: 202,
        message: 'user deleted'
    });
});

// Author's books
app.get('/author/:id/book', userExist, (req, res) => {
    const books = authors.find(element => element.id === req.author.id).libros;
    return res.json({
        status: 200,
        data: books
    });
});

app.post('/author/:id/book', userExist, (req, res) => {
    const {titulo, descripcion, anioPublicacion} = req.body;
    if(!titulo || !descripcion || !anioPublicacion)  {
        return res.status(422).json({
            status: 422,
            error: 'The inputs \"titulo\", \"descripcion\" and \"anioPublicacion\" are required'
        });
    }
    const authorIndex = authors.findIndex(element => element.id === req.author.id);
    const id = authors[authorIndex].libros[authors[authorIndex].libros.length - 1].id + 1;
    authors[authorIndex].libros.push({
        id,
        titulo,
        descripcion,
        anioPublicacion
    });
    return res.status(201).json({
        status: 201,
        message: 'user\'s book created'
    });
});

const port = 5000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
}); // el listen siempre al final