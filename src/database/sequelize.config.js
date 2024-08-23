require("ts-node/register");
require("dotenv").config();
const { getStackDbProps } = require("../config/db");

const {
  username,
  password,
  port,
  host,
  dialect,
  name: database,
} = getStackDbProps();

module.exports = {
  username,
  password,
  database,
  host,
  dialect,
  port,
};
