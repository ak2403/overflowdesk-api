import dotenv from "dotenv";
import { StackDbProps } from "../types/common/config";

dotenv.config();

export const getStackDbProps = (): StackDbProps => {
  const host = process.env.OVERFLOWDESK_DB_HOST || "";
  const name = process.env.OVERFLOWDESK_DB_NAME || "";
  const username = process.env.OVERFLOWDESK_DB_USERNAME || "";
  const password = process.env.OVERFLOWDESK_DB_PASSWORD || "";
  const port = process.env.OVERFLOWDESK_DB_PORT || 0;

  return {
    host,
    name,
    username,
    password,
    port: Number(port),
    dialect: "postgres",
  };
};
