import { StackOverflowError } from "../errors";
import { GetResponse } from "../../types/helpers/fetch";
import { StackOverflowErrorResponse } from "../../types/helpers/error";

export const get = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<GetResponse<T>> => {
  const getVendor = async (): Promise<GetResponse<T>> => {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });
    const data = await response.json();

    return {
      data,
      ok: response.ok,
      status: response.status,
    };
  };

  return getVendor()
    .then((response) => {
      if (!response.ok) {
        throw new StackOverflowError(
          response.data as StackOverflowErrorResponse
        );
      }

      return response;
    })
    .catch((error) => {
      console.log(error);
      //TODO: check for internal/500 errors
      throw error;
    });
};
