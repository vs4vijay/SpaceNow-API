#!/usr/bin/env bash

NODE_ENV=local sequelize db:migrate

# echo "Error code of last command: $?"

yarn start