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



## Migrations

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate



## To Do

[x] Project Setup
[x] Database Connection, ORM
[ ] Migrations, Seeder
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