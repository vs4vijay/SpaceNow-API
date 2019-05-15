'use strict';

import express from 'express';

import connections from '../connections';
import services from '../services';

const router = express.Router();


const userService = new services.UserService();

router.get('/users', async function(req, res) {

	const user = await userService.create({
		name: 'Viz'
	});

    res.send(user);
});

router.get('/data', (req, res) => {
    res.json({data: 'data'});
});

export default router;