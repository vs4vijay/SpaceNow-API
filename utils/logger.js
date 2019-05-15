'use strict';


import winston from 'winston';
import config from '../config';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'server.log' })
  ]
});

// If not in production env, then use console logger as well
if (config.env !== 'prod') {
  logger.add(new winston.transports.Console({format: winston.format.simple()}));
}

export default logger;