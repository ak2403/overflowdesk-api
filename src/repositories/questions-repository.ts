import QuestionModel from "../database/models/questions";
import { Question } from "../types/mappers/question";
import { QueryOptions, Repository } from "../types/repositories/repository";
import { structFilterOptions } from "./utils";

export class QuestionsRepository extends Repository {
  static async findAll(options: QueryOptions): Promise<QuestionModel[]> {
    const filterOptions = structFilterOptions(options);
    try {
      const questions = await QuestionModel.findAll(filterOptions);

      return questions;
    } catch (error) {
      //@ts-ignore
      throw new Error(error);
    }
  }

  static async find(id: number): Promise<QuestionModel | null> {
    try {
      const question = await QuestionModel.findOne({
        where: {
          id: String(id),
        },
      });

      if (question === null) {
        return null;
      }

      return question;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  static async update(question: Question): Promise<boolean> {
    try {
      const { id, ...rest } = question;
      const [updated] = await QuestionModel.update(rest, {
        where: {
          id,
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

  static async push(question: Question): Promise<Question> {
    try {
      return await QuestionModel.create(question);
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }
}
