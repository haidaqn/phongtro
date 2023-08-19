const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('phong-tro-123', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false,
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDatabase;
