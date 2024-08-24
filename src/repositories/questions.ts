import Question from "../database/models/questions";
import { StackQuestion } from "../types/mappers/stack-question";

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

  async push(question: StackQuestion): Promise<string> {
    try {
      const { id, tags, ...rest } = question;

      const { id: createdId } = await Question.create({
        id: String(id),
        ...rest,
      });

      return createdId;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }
}
