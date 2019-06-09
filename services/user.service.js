'use strict';


import { decorate, injectable } from 'inversify';

import { container } from '../common';
import { User } from '../models';

class UserService {

  create(user) {
    return User.create(user);
  }

  get(userId) {
    return User.findByPk(userId);
  }

  getAll(filters) {
    return User.findAll(filters);
  }

  update(userId, userData) {
    return User.update(userData, { where: { id: userId } });
  }

  delete(userId) {
    // Soft Delete
    return User.destroy({ where: { id: userId } });
  }

}

decorate(injectable(), UserService);
container.bind(UserService.name).to(UserService);

export default UserService;