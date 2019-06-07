'use strict';


import config from './config';

// export default {
// 	[config.env]: {
// 		dialect: config.database.dialect,
// 		host: config.database.host,
// 		database: config.database.database,
// 		username: config.database.username,
// 		password: config.database.password
// 	}
// }

module.exports = {
  [config.env]: {
    dialect: config.database.dialect,
    host: config.database.host,
    database: config.database.database,
    username: config.database.username,
    password: config.database.password
  }
};