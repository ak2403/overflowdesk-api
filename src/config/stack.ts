import { ApiProps } from "../types/common/config";

export const getStackApiProps = (): ApiProps => {
  const url = process.env.STACK_API_URL || "";
  const key = process.env.STACK_API_KEY || "";

  return {
    url,
    key,
  };
};
