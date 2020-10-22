require("dotenv").config();
const entitiesPath = __dirname + process.env.PG_ENTITIES;
console.log("Entities path", entitiesPath);
module.exports = [
  {
    type: "postgres",
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_ACCOUNT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: process.env.PG_SYNCHRONIZE,
    logging: process.env.PG_LOGGING,
    entities: [entitiesPath],
    cli: {
      entitiesDir: process.env.PG_ENTITIES_DIR,
    },
  },
];
