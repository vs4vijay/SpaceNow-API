#!/usr/bin/env node

import models from '../models';

models.User.drop();


models.User.sync();

// sequelize.sync()