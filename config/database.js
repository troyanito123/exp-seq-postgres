require('dotenv').config();

module.exports = {
  // Config DATABASE
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || 123456,
  database: process.env.DB_DATABASE || "exp_seq_post",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "postgres",
  logging: false,

  // Seeders config
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // Migrations config
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations"
}
