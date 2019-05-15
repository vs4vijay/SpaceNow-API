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

};

export default UserService;