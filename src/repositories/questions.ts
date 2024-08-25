import Question from "../database/models/questions";
import { StackQuestion } from "../types/mappers/stack-question";
import { TagsRepository } from "./tags";

export class QuestionsRepository {
  async find(id: string): Promise<StackQuestion | null> {
    try {
      const question = await Question.findOne({
        where: {
          id: String(id),
        },
      });

      if (question === null) {
        return null;
      }

      const { dataValues } = question;

      return {
        ...dataValues,
        id: Number(id),
        tags: [],
      };
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  async update(question: StackQuestion): Promise<boolean> {
    try {
      const { id, ...rest } = question;
      const [updated] = await Question.update(rest, {
        where: {
          id: String(question.id),
        },
      });

      if (updated === 1) {
        return true;
      }

      return false;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  async push(question: Omit<StackQuestion, "tags">): Promise<Question> {
    try {
      const { id, ...rest } = question;

      const added = await Question.create({
        id: String(id),
        ...rest,
      });

      return added;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  async pushWithTags(question: StackQuestion): Promise<string> {
    try {
      const { tags, ...rest } = question;
      const addedQuestion = await this.push(rest);

      const createTagsPromises = Promise.allSettled(
        tags.map(TagsRepository.findOrpush)
      );

      const promiseResults = await createTagsPromises;

      const addedTags = promiseResults.filter(
        ({ status }) => status === "fulfilled"
      );

      //@ts-ignore
      await addedQuestion.addTag(addedTags[0].value);

      return addedQuestion.id;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }
}
