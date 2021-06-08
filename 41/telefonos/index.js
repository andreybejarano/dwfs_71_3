const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mobiles = [
    {
        id: 1,
        marca: "Noxia",
        modelo: "1100",
        pantalla: "TFT de 6.5",
        sistema_operativo: "Android 9.0 Pie."
    },
    {
        id: 2,
        marca: "Samsung",
        modelo: "Galaxy A20",
        pantalla: "TFT de 6.5",
        sistema_operativo: "Android 9.0 Pie."
    },
    {
        id: 3,
        marca: "Alcatel",
        modelo: "One",
        pantalla: "TFT de 5.5",
        sistema_operativo: "Android 5.0 Pie."
    }
]; //emula base de datos

app.get('/mobile', (req, res) => {
    return res.json({
        status: 200,
        data: mobiles
    })
})

app.post('/mobile', (req, res) => {
    const {body} = req; 
    if (!body.marca || !body.modelo || !body.pantalla || !body.sistema_operativo){
        return res.status(422).json({
            status: 422,
            error: 'Los campos marca, modelo, pantalla y sistema operativo son requeridos'
        })
    }
    const last = mobiles[mobiles.length-1]; // deconstructor para extraer el último elemento de esa array
    const id = last.id+1;
    mobiles.push({
        id,
        marca: body.marca,
        modelo: body.modelo,
        pantalla: body.pantalla,
        sistema_operativo: body.sistema_operativo
    });
    return res.status(201).json({
        status: 201,
        message: 'Mobile created succesfull'
    })
});

app.get('/mobile/:id', (req, res) => {
    const mobile = mobiles.find(element => element.id == req.params.id); // todo lo que llegue en el objeto params llega en strings
    if (!mobile) {
        return res.status(404).json({
            status: 404,
            error: 'Mobile not found'
        });
    }
    return res.json({
        status: 200,
        data: mobile
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('server started on port 3000');
}); //