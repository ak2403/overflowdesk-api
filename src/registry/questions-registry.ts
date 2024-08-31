import { QuestionsRepository } from "../repositories/questions-repository";
import { QuestionWithTagsAndOwner } from "../types/mappers/question";
import { QueryOptions } from "../types/repositories/repository";

export class QuestionsRegistry {
  async fetchAll(
    queryOptions: QueryOptions = {}
  ): Promise<QuestionWithTagsAndOwner[]> {
    const questions = await QuestionsRepository.findAll(queryOptions);

    if (questions === null) {
      return [];
    }

    return questions.map((question) => question.toJSON());
  }
}
