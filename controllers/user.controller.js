'use strict';


import express from 'express';

import { container } from '../common';
import { UserService } from '../services';

const router = express.Router();
const userService = container.get(UserService.name);


// CRUD Operations
router.post('/users', async (req, res) => {
  const userData = req.body;
  const user = await userService.create(userData);
  res.json(user);
});

router.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await userService.get(userId);
  res.json(user);
});

router.get('/users', async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
});

router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const user = await userService.update(userId, userData);
  res.json(user);
});

router.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await userService.delete(userId);
  res.json(user);
});


// Temporary APIs
router.get('/viz', async function(req, res) {
  const user = await userService.create({
    name: 'Viz'
  });
  res.json(user);
});

router.get('/data', (req, res) => {
  res.json({data: 'data'});
});

export default router;
