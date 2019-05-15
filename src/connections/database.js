'use strict';


import Sequelize from 'sequelize';

import config from '../../config';
import logger from '../utils/logger';


const sequelize = new Sequelize(
  config.database.name, 
	config.database.username,
	config.database.password, 
{
  host: config.database.host,
  dialect: config.database.type,

  define: {
    timestamps: true,
    underscored: true,
    paranoid: true
  },

  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    logger.info('[+] Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('[-] Unable to connect to the database:', err);
  });

export default sequelize;