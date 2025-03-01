'use strict';


import Sequelize from 'sequelize';

import { sequelize } from '../connections';

class User extends Sequelize.Model {}

User.init({
  uuid: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.DataTypes.STRING,
  },
  isActive: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize: sequelize,
  modelName: 'user'
});

export default User;