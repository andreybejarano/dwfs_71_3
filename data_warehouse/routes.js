const router = require('express').Router();

const RolesController = require('./controllers/Roles');
const UserController = require('./controllers/Users');

router.post('/role', RolesController.create);
router.get('/role', RolesController.getAll);

router.post('/user', UserController.create);
router.get('/user', UserController.getAll);
router.post('/login', UserController.login);

module.exports = router;