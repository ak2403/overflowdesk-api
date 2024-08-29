import { get } from "../../helpers/fetch";
import {
  QuestionResponse,
  StackOverflowResponse,
} from "../../types/services/stackoverflow/question";
import {
  QueryOptions,
  StackOverflowApiType,
} from "../../types/services/stackoverflow";
import { structApiUrl } from "./utils";
import { StackOverflow } from "./stack-overflow";

export class StackQuestions extends StackOverflow {
  private type: string = StackOverflowApiType.Questions;

  constructor(url: string) {
    super(url);
  }

  async list(
    queryOptions: QueryOptions
  ): Promise<StackOverflowResponse<QuestionResponse>> {
    const apiUrl = structApiUrl(
      { url: this._apiUrl, type: this.type },
      queryOptions
    );

    const response = await get<StackOverflowResponse<QuestionResponse>>(apiUrl);

    return response.data;
  }

  async getById(
    id: string,
    queryOptions: QueryOptions
  ): Promise<StackOverflowResponse<QuestionResponse>> {
    const apiUrl = structApiUrl(
      { url: this._apiUrl, type: this.type, id },
      queryOptions
    );

    const response = await get<StackOverflowResponse<QuestionResponse>>(apiUrl);

    return response.data;
  }
}
