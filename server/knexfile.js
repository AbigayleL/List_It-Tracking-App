import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
  migrations: {
    directory: "./migrations", // Adjust the directory as per your project structure
  },

  seeds: {
    directory: "./seeds",
  },
};
