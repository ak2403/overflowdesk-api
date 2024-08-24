import { Sequelize } from "sequelize";
import { getStackDbProps } from "../config/db";

const { name, username, password, port, host, dialect } = getStackDbProps();

const databaseConnection: Sequelize = new Sequelize(name, username, password, {
  dialect,
  host,
  port,
});

const authenticateConnection = async (): Promise<boolean> => {
  try {
    await databaseConnection.authenticate();

    return true;
  } catch (error) {
    console.log(error);
    //@ts-ignore
    throw new Error(error);
  }
};

export { authenticateConnection, databaseConnection };
