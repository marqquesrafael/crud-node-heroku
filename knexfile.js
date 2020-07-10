// Update with your config settings.
require('dotenv').config();
const path = require("path");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.BD_HOST,
      user: process.env.BD_USER,
      password: process.env.BD_PASS,
      database: process.env.BD_SCHEMA,
    },
    migrations: {
      directory: path.resolve("src", "database", "migrations")
    },
    seeds: {
      directory: path.resolve("src", "database", "seeds")
    },
  },
};
