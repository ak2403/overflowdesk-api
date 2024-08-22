import { get } from "../../helpers/fetch";
import {
  StackOverflowQuestion,
  StackOverflowQuestionDetail,
  StackOverflowResponse,
} from "../../types/models/stackoverflow";
import {
  QueryOptions,
  StackOverflowApiType,
} from "../../types/services/stackoverflow";
import { structApiUrl } from "./utils";

export class StackQuestions {
  apiUrl: string;
  type: string = StackOverflowApiType.Questions;

  constructor(url: string) {
    this.apiUrl = url;
  }

  async list(
    queryOptions: QueryOptions
  ): Promise<StackOverflowResponse<StackOverflowQuestion>> {
    const apiUrl = structApiUrl(
      { url: this.apiUrl, type: this.type },
      queryOptions
    );

    const response = await get<StackOverflowResponse<StackOverflowQuestion>>(
      apiUrl
    );

    return response.data;
  }

  async getById(
    id: string,
    queryOptions: QueryOptions
  ): Promise<StackOverflowResponse<StackOverflowQuestionDetail>> {
    const apiUrl = structApiUrl(
      { url: this.apiUrl, type: this.type, id },
      queryOptions
    );

    const response = await get<
      StackOverflowResponse<StackOverflowQuestionDetail>
    >(apiUrl);

    return response.data;
  }
}
