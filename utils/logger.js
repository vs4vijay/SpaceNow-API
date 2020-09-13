'use strict';


import winston from 'winston';
import { config } from '../config';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  colorize: true,
  transports: [
    new winston.transports.File({
      filename: 'server.log'
    })
  ]
});

// If not in production env, then use console logger as well
if (config.env !== 'prod') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;