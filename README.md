# SpaceNow-API


## Requirements

- NodeJS
- Yarn
- MySQL Database



## Environment Variables

All Enviroment vairables should be in `.env` file

Env. Name | Value
----------|-------
SERVER_ENV|`local`
SERVER_PORT|9000
DATABASE_TYPE|mysql
DATABASE_HOST|localhost
DATABASE_NAME|spacenow_local
DATABASE_USERNAME|< username >
DATABASE_PASSWORD|< password >



## Running

`yarn start`



## Deployment

<TBD>

## Database Setup

Create a new database and create a new user which can access that database only.

### MySQL

`CREATE DATABASE spacenow_local;`
(Can be done by this as well `sequelize --env local db:create`)

`CREATE USER 'spacenow_user'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';`

`GRANT ALL PRIVILEGES ON spacenow_local.* TO 'spacenow_user'@'localhost';`

### PostgreSQL

Create admin-user and db
```
createuser spacenow_dev --createdb --superuser
createdb spacenow_user --username spacenow_dev
```

Verify using command line
`psql -d spacenow_dev -U spacenow_user`



## Development


### Create a new Model

1. Generate the migration file and model using Sequelize CLI:

`sequelize model:create --name user --attributes name:string,uuid:uuid,isActive:boolean,deletedAt:boolean`

2. Modify the generated model.js file to make it compatible with classes ES6

3. Run the migration to make changes:

`sequelize --env local db:migrate`
OR
`NODE_ENV=local sequelize db:migrate`

### Adding and Removing a column

1. Generate migration only using Sequelize CLI:

`sequelize migration:create --name add-email-to-user`

2. Modify migration file to make changes

It will create a file in `migrations/` folder with `<timestamp>-add-email-to-user.js`. Modify the migration file to accommodate changes.

Example:
```
  queryInterface.addColumn('users', 'email', {
    type: Sequelize.STRING
  })
```

3. Modify model file to reflect those changes in ORM

Add or Remove appropriate fields to `user.model.js`.

Example:
```
  email: {
    type: Sequelize.DataTypes.STRING,
  }
```


## Guidelines

- Use `use strict` option in all files
- create `index.js` in all folders


## To Do

- [x] Project Setup
- [x] Database Connection, ORM
- [x] Migrations & Sequelize CLI
  - `NODE_ENV=local sequelize db:migrate`
- [ ] setup.sh & start.sh
- [ ] Seeder
    - [ ] Create Database and Tables if not exists
- [ ] Logging (https://logrocket.com/)
    - [ ] Audit Logs / Tracability
- [x] IoC
    - Done using `inversify`
- [ ] Base Classes
- [x] Proper Imports
- [x] Health Check API
  - Using `Terminus`
- [x] CRUD REST API
- [ ] Standard Response and Error
- [x] ESLint
  - `yarn eslint .`
- [ ] Validations
- [ ] Limit, Offset
- [ ] Authentication
- [ ] API Specs
- [ ] Security (Helmet)
  - https://expressjs.com/en/advanced/best-practice-security.html
  - https://github.com/RisingStack/protect
- [ ] Best Practices
  - https://expressjs.com/en/advanced/best-practice-performance.html
- [ ] Deployment / Monitoring
- [ ] Dockerize
- [ ] CI/CD
- [ ] Caching
  - Redis
- Grafana / Prometheus
- [ ] ElasticSearch