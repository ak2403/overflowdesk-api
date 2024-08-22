import { ApiProps, QueryOptions } from "../../types/services/stackoverflow";

export const structApiUrl = (apiOptions: QueryOptions & ApiProps): string => {
  const { url, type, ...queryOptions } = apiOptions;

  const queryString = Object.keys(queryOptions)
    .map(
      //@ts-ignore
      (key) => `${key}=${queryOptions[key]}`
    )
    .join("&");

  return `${url}/${type}?${queryString}`;
};
