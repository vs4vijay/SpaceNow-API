'use strict';


import connections from '../connections';
import models from '../models';

class UserService {

  create(user) {
    return models.User.create(user);
    // return connections.sequelize.sync({ force: false }).then(_ => {
    // 	return models.User.create(user);
    // });
  }

  get(userId) {
    return models.User.findByPk(userId);
  }

  getAll(filters) {
    return models.User.findAll(filters);
  }

  update(userId, userData) {
    return models.User.update(userData, { where: { id: userId } });
  }

  delete(userId) {
    // Soft Delete
    return models.User.destroy({ where: { id: userId } });
  }

}

export default UserService;