'use strict';

import express from 'express';

import config from './config';
import routes from './src/routes';


const app = express();

const logger = (req, res, next) => {
    console.log(`[LOG]`);
    next();
};


// Application Middlewares
// app.use(logger);
app.use(express.json());


// Health Check API
app.get('/', function(req, res) {
    res.send({success: true, message: 'Server is Running'});
});


// Application Routes
app.use('/api/v1', routes.users);


// Start Server
app.listen(config.server.port, () => {
    console.log(`[+] Server Started on Port: ${config.server.port}`);
});