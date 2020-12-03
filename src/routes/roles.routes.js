const { Router } = require('express');
const { getAll, create } = require('../controllers/roles.controller');

const rolesRoutes = Router();

rolesRoutes.get('/', getAll);
rolesRoutes.post('/', create);

module.exports = rolesRoutes;