import { Sequelize } from "sequelize";
import { getStackDbProps } from "../config/db";

const { name, username, password, port, host, dialect } = getStackDbProps();

const databaseConnection: Sequelize = new Sequelize(name, username, password, {
  dialect,
  host,
  port,
});

export { databaseConnection };
