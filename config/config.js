require('dotenv').congif();

module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "todo_app",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
 
};
