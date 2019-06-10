'use strict';


import http from 'http';
import express from 'express';
import { createTerminus } from '@godaddy/terminus';

import { config } from './config';
import { users } from './routes';
import { logger, healthcheck } from './utils';


const app = express();

app.set('etag', false);
app.set('x-powered-by', false);

// Application Middlewares
app.use(express.json());


// Health Check API
const healthCheckServer = http.createServer(app);
createTerminus(healthCheckServer, healthcheck.options);
healthCheckServer.listen(config.server.port + 1); // Health Check Server will use next port number from server


app.get(['/', '/api'], (req, res) => {
  res.send({success: true, message: 'Server is Running'});
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