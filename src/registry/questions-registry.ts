import { QuestionAdapter } from "../adapters/question-adapter";
import { QuestionsRepository } from "../repositories/questions-repository";
import { Question, QuestionWithTagsAndOwner } from "../types/mappers/question";
import { QueryOptions } from "../types/repositories/repository";
import { QuestionResponse } from "../types/services/stackoverflow/question";
import { OwnerRegistry } from "./owner-registry";
import { TagRegistry } from "./tag-registry";

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

  async findById(id: number): Promise<Question | null> {
    return await QuestionsRepository.find(id);
  }

  async create(question: QuestionResponse): Promise<Question> {
    const { owner, tags, ...rest } = question;

    const ownerRepository = new OwnerRegistry();

    const ownerAdded = await ownerRepository.findOrPush(owner);

    const newQuestion = QuestionAdapter.transform(rest);

    const questionAdded = await QuestionsRepository.push(newQuestion);

    const tagRegistry = new TagRegistry();

    for (let i = 0; i < tags.length; i++) {
      const tagAdded = await tagRegistry.create(tags[i]);

      //@ts-ignore
      await questionAdded.addTag(tagAdded.id);
    }

    //@ts-ignore
    await questionAdded.setOwner(ownerAdded.id);

    return questionAdded;
  }

  async update(question: QuestionResponse): Promise<boolean> {
    const { ...rest } = question;

    return await QuestionsRepository.update(QuestionAdapter.transform(rest));
  }
}
