'use strict';


import connections from '../connections';
import models from '../models';

class UserService {


	create(user) {
		return models.User.create(user);
		// connections.sequelize.sync().then(_ => {
		// 	models.User.create(user);
		// });
	}

};

export default UserService;