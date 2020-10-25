const { response } = require('express');
const express = require('express');
const routes = express.Router();
const EquipamentController = require('./controllers/EquipamentController');

routes.get('/', (request, response) => {
    response.json({ msg: 'Hello World' });
});

routes.get('/equipaments', EquipamentController.index);
routes.post('/equipaments', EquipamentController.create);

module.exports = routes;