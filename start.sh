#!/usr/bin/env bash

sequelize --env local db:migrate

# echo "Error code of last command: $?"

yarn start