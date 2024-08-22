import { ApiOptions, QueryOptions } from "../../types/services/stackoverflow";

const structUrl = (apiOptions: ApiOptions): string => {
  const { url, type, id } = apiOptions;

  let urlString = `${url}/${type}`;

  if (id) {
    urlString += `/${id}`;
  }

  return urlString;
};

export const structApiUrl = (
  apiOptions: ApiOptions,
  queryOptions: QueryOptions
): string => {
  const primaryUrl = structUrl(apiOptions);

  const queryString = Object.keys(queryOptions)
    .map(
      //@ts-ignore
      (key) => `${key}=${queryOptions[key]}`
    )
    .join("&");

  return `${primaryUrl}?${queryString}`;
};
