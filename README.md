# Sequelize Example

> For learning purpose

Develop restAPI with ORM database library. Based on [document v5](https://sequelize.org/master/index.html)

## Commands

- `./bin/dev-www` - Development mode
- `./bin/www`

## NPM commands

- `npm install`
- `npm run dev`
- `npm start`

## Developments

- Install nodemon with `npm install -g nodemon`

## Create database

Use docker to create container with default database

```bash
docker-compose up -d
```

To create other table -> try command line `psql --user postgres`

## Usage of CLI

The command line will create path and file for project following `.sequelizerc`

```bash
./node_modules/.bin/sequelize init
```

Create models

```bash
./node_modules/.bin/sequelize model:create --name Parent --attributes parent_name:string
./node_modules/.bin/sequelize model:create --name Child --attributes child_name:string,at_home:boolean
```

After finish create models -> migrate them

```bash
./node_modules/.bin/sequelize db:migrate
```
