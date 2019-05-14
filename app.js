'use strict';

import express from 'express';

import config from './config';
import routes from './src/routes';

import logger from './src/utils';


const app = express();


// Application Middlewares
app.use(express.json());


// Health Check API
app.get('/', function(req, res) {
    res.send({success: true, message: 'Server is Running'});
});


// Application Routes
app.use('/api/v1', routes.users);


// Start Server
app.listen(config.server.port, () => {
    logger.info(`[+] Server Started on Port: ${config.server.port}`);
});