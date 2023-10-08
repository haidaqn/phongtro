import express from 'express';
require('dotenv').config();
import cors from 'cors';
import bodyParser from 'body-parser';

import initRoutes from './src/routes';
import connectDatabase from './src/config/connectDatabase';

const app = express();
const port = process.env.PORT || 8000;

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ['POST', 'PUT', 'GET', 'DELETE'],
    }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

initRoutes(app);

connectDatabase();

const listener = app.listen(port, () => {
    console.log(`Server is running on port ${listener.address().port}`);
});
