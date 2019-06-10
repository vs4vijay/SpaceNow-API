'use strict';


import { HealthCheckError } from '@godaddy/terminus';

import logger from './logger';
import { sequelize } from '../connections';

const onSignal = () => {
  logger.info('[-] Server is starting to cleanup');

  const databasePromise = sequelize.close();

  return Promise.all([databasePromise]);
};

const onShutdown = () => {
  logger.info('[-] Server is shutting down');
};

const healthCheck = async () => {

  const databasePromise = new Promise(async (resolve, reject) => {
    try {
      await sequelize.authenticate();
      resolve({
        message: 'Database is working'
      });
    } catch (error) {
      const errors = {
        error_code: 'DATABASE_CONNECTION_ERROR',
        error_message: error
      };
      logger.error('[-] Health Check Failed: Database Connection Error', errors);
      reject(new HealthCheckError('Health Check Failed: Database Connection Error', errors));
    }
  });

  return Promise.all([databasePromise]);
};


const healthCheckOptions = {
  healthChecks: {
    '/api/healthcheck': healthCheck
  },

  signal: 'SIGINT',
  onSignal,
  onShutdown,

  logger: logger.info
};

export default {
  options: healthCheckOptions
};