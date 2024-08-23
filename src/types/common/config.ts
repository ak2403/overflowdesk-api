export type ApiProps = {
  url: string;
  key: string;
};

export type StackDbProps = {
  host: string;
  name: string;
  password: string;
  port: number;
  username: string;
  dialect: "postgres";
};
