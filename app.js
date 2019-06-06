'use strict';


import express from 'express';

import config from './config';
import routes from './routes';
import logger from './utils';


const app = express();


// Application Middlewares
app.use(express.json());


app.get('/', (req, res) => {
    res.send({success: true, message: 'Server is Running'});
});

// Health Check API
app.get('/api/health-check', (req, res) => {
    res.send({success: true, message: 'Health Check'});
});

app.get('*', (req, res) => {
  res.status(404).json({success: false, message: 'Resource not found'});
});


// Application Routes
app.use('/api/v1', routes.users);


// Start Server
if (!module.parent) {
  app.listen(config.server.port, () => {
      logger.info(`[+] Server Started on Port: ${config.server.port}`);
  });
}

export default app;