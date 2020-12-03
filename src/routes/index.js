const { Router } = require('express');
const rolesRoutes = require('./roles.routes');

const routes = Router();

routes.use('/roles', rolesRoutes);

module.exports = routes;

