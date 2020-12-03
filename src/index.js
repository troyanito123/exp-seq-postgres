const server = require('./class/server');
const { sequelize } = require('./models')

server.listen(server.get('port'), async() => {
    console.log(`Server on port: ${server.get('port')}`);
    try {
        sequelize.authenticate();
        console.log(`Database online`);
    } catch (error) {
        console.error(error);
    }
});