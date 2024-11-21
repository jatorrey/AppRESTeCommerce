import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/config.js';

const app = express();

import { connectDB } from './config/database.config.js'
import routerAPI from './api/v1/routes/index.js';

connectDB();

app.set('port', config.PORT);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const api = config.API_URL;
app.get(`${api}`, (req, res) => {
    res.send(
        `<h1>API RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
});

app.get('/DrFIC', (req, res) => {
    res.send(
        `<h1>API RESTful running in DrFIC</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})

routerAPI(app);

export default app;