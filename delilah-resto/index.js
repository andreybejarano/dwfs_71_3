const express = require('express');

const config = require('./config');
const errorMiddleware = require('./middlewares/error');
const notFoundMiddlerare = require('./middlewares/notFoundError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserController = require('./controllers/User');

if (config.env === 'development') {
    const swaggerUi = require('swagger-ui-express');
    const YAML = require('yamljs');
    app.use(require('morgan')('dev'))
    const swaggerDocument = YAML.load('./docs/swagger.yaml');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.post('/user', UserController.create);
app.get('/user', UserController.getAll);
app.post('/user/login', UserController.login);

app.use(notFoundMiddlerare);
app.use(errorMiddleware);

app.listen(config.port, () => {
    console.log(`Server started on http://localhost:${config.port}`);
});