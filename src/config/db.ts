import dotenv from "dotenv";
import { StackDbProps } from "../types/common/config";

dotenv.config();

export const getStackDbProps = (): StackDbProps => {
  const host = process.env.OVERFLOWDESK_DB_HOST || "host.docker.internal";
  const name = process.env.OVERFLOWDESK_DB_NAME || "postgres";
  const username = process.env.OVERFLOWDESK_DB_USERNAME || "admin";
  const password = process.env.OVERFLOWDESK_DB_PASSWORD || "secret";
  const port = process.env.OVERFLOWDESK_DB_PORT || 5430;

  return {
    host,
    name,
    username,
    password,
    port: Number(port),
    dialect: "postgres",
  };
};
