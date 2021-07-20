const config = require('../config');

module.exports = {
  "development": {
    "username": config.database.user,
    "password": config.database.password,
    "database": config.database.name,
    "host": config.database.host,
    "port": config.database.port,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": config.database.user,
    "password": config.database.password,
    "database": config.database.name,
    "host": config.database.host,
    "port": config.database.port,
    "dialect": "mysql"
  }
}
