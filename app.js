'use strict';


import express from 'express';

import { config } from './config';
import { users } from './routes';
import { logger } from './utils';


const app = express();


app.set('etag', false);
app.set('x-powered-by', false);

// Application Middlewares
app.use(express.json());


app.get('/', (req, res) => {
  res.send({success: true, message: 'Server is Running'});
});

// Health Check API
app.get('/api/health-check', (req, res) => {
  res.send({success: true, message: 'Health Check'});
});



// Application Routes
app.use('/api/v1', users);



// Not Found Route
app.get('*', (req, res) => {
  res.status(404).json({success: false, message: 'Resource not found'});
});


// Start Server
if (!module.parent) {
  app.listen(config.server.port, () => {
    logger.info(`[+] Server Started on Port: ${config.server.port}`);
  });
}

export default app;