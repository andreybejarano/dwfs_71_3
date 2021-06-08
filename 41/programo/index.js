const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let pais = {
    nombre: '',
    habitantes: ''
};

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.json({
        message: 'Punto de inicio'
    });
});

app.get('/pais', (req, res) => {
    let respuesta = {
        status: 200,
        message: ''
    }
    if (!pais.habitantes || !pais.nombre) {
        respuesta = {
            status: 501,
            message: "El pais no ha sido creado"
        }
    } else {
        respuesta = {
            status: 200,
            message: "respuest del pais",
            pais
        }
    }
    return res.status(respuesta.status).json(respuesta);
});

app.post('/pais', (req, res) => {
    if (!req.body.nombre || !req.body.habitantes) {
        return res.status(422).json({
            status: 422,
            message: 'El campo nombre y habitantes son requeridos'
        });
    }
    if (pais.nombre || pais.habitantes) {
        return res.status(503).json({
            status: 503,
            message: 'El pais ya fue creado'
        });
    }
    pais.habitantes = req.body.habitantes;
    pais.nombre = req.body.nombre;
    return res.status(201).json({
        status: 201,
        message: 'pais creado',
        pais
    });
});

app.put('/pais', (req, res) => {
    if (!req.body.nombre || !req.body.habitantes) {
        return res.status(422).json({
            status: 422,
            message: 'El campo nombre y habitantes son requeridos'
        });
    }
    if (!pais.habitantes || !pais.nombre) {
        return res.status(501).json({
            status: 501,
            message: 'El pais no ha sido creado'
        });
    }
    pais.habitantes = req.body.habitantes;
    pais.nombre = req.body.nombre;
    return res.status(200).json({
        status: 200,
        message: 'pais editado',
        pais
    });
});

app.delete('/pais', (req, res) => {
    if (!pais.habitantes || !pais.nombre) {
        return res.status(501).json({
            status: 501,
            message: 'El pais no ha sido creado'
        });
    }

    pais.habitantes = '';
    pais.nombre = '';
    return res.status(202).json({ message: 'Pais eliminado' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server stated on PORT: ${port}`);
});