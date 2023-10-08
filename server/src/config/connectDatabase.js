const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_phongtro_we08', 'db_phongtro_we08_user', 'UqY7VXzKdVpAEcLDaPHUSBQR17vLgXt3', {
    host: 'dpg-ckha3vcldqrs738vbt1g-a.singapore-postgres.render.com',
    dialect: 'postgres',
    port: 5432,
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
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
