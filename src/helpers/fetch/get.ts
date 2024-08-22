import { GetResponse } from "../../types/helpers/fetch";

export const get = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<GetResponse<T>> => {
  try {
    const response = await fetch(url, {
      headers,
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      data,
    };
  } catch (error) {
    throw new Error("Error in get api");
  }
};
