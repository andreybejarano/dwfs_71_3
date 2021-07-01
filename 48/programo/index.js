require('dotenv').config();
const express = require('express');

const connection = require('./connection');

const modelProduct = require('./modelProduct');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connection.query("SELECT * FROM productos", { type: connection.QueryTypes.SELECT })
//     .then(data => {
//         data.forEach(element => {
//             console.log(element.nombre);
//         });
//     });

// modelProduct.findAll()
//     .then(data => {
//         data.forEach(element => {
//             console.log(element.nombre);
//         });
//     });

app.post('/product', async (req, res) => {
    const { name, price, entry_date, exit_date, active } = req.body;
    try {
        // const productCreated = await connection.query(' INSERT INTO `productos` (`id`,`nombre`,`precio`,`fecha_ingreso`) VALUES (DEFAULT,?,?,?)', {
        //     type: connection.QueryTypes.INSERT,
        //     replacements: [name, price, entry_date]
        // });
        const productCreated = await modelProduct.create({
            nombre: name,
            precio: price,
            fecha_ingreso: entry_date,
            fecha_salida: exit_date,
            activo: active
        });
        return res.status(201).json({
            status: 201,
            message: `product ${productCreated.nombre} created`
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error
        });
    }

});

app.get('/product', async (req, res) => {
    try {
        // connection.query("SELECT * FROM productos", { type: connection.QueryTypes.SELECT })
        //     .then(data => {
        //         data.forEach(element => {
        //             console.log(element.nombre);
        //         });
        //     });
        const products = await modelProduct.findAll();
        return res.json({
            status: 200,
            data: products
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error
        });
    }
});

app.get('/product/:id', async (req, res) => {
    try {
        const product = await modelProduct.findOne({ where: { id: req.params.id }});
        return res.json({
            status: 200,
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            error
        });
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port=${port}`);
});