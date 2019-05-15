# SpaceNow-API


## Requirements

- NodeJS
- Yarn
- MySQL Database



## Environment Variables

All Enviroment vairables should be in `.env` file





## Running

`yarn start`



## Deployment



## Database Setup

Create a new database and create a new user which can access that database only.

`CREATE DATABASE spacenow_local;`

`CREATE USER 'spacenow_user'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';`

`GRANT ALL PRIVILEGES ON spacenow_local.* TO 'spacenow_user'@'localhost';`



## Development


### Create a new Model

1. Generate the migration file and model using Sequelize CLI:

`sequelize model:generate --name user --attributes name:string,uuid:uuid,isActive:boolean,deletedAt:boolean`

2. Modify the generated model.js file to make it compatible with classes ES6

3. Run the migration to make changes:

`sequelize --env local db:migrate`



## Guidelines

- Use `use strict` option in all files
- create `index.js` in all folders


## To Do

 [x] Project Setup
 [x] Database Connection, ORM
  [x] Migrations & Sequelize CLI
[ ] setup.sh & start.sh
[ ] Seeder
    [ ] Create Database and Tables if not exists
[ ] Logging
[ ] IoC
[ ] Base Classes
[ ] Proper Imports
[x] CRUD REST API
[ ] Standard Response and Error
[ ] Validations
[ ] Limit, Offset
[ ] Authentication
[ ] Deployment / Monitoring
[ ] CI/CD