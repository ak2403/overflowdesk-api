import { StackOverflowErrorResponse } from "../../types/helpers/error";

export class StackOverflowError extends Error {
  name: string = "stackoverflow-error";
  errorResponse: StackOverflowErrorResponse;

  constructor(response: StackOverflowErrorResponse) {
    super();

    this.errorResponse = response;
  }
}
