'use strict';

import Sequelize from 'sequelize';

import connections from '../connections';

const Model = Sequelize.Model;

class User extends Model {};

User.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: connections.sequelize,
  modelName: 'user'
});

export default User;