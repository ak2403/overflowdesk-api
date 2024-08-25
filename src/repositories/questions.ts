import Question from "../database/models/questions";
import Tag from "../database/models/tags";
import { StackQuestion } from "../types/mappers/stack-question";
import { QueryOptions, Repository } from "../types/repositories/repository";
import { TagsRepository } from "./tags";
import { structFilterOptions } from "./utils";

export class QuestionsRepository extends Repository<Question> {
  async findAll(options: QueryOptions): Promise<StackQuestion[]> {
    const filterOptions = structFilterOptions(options);

    const questions = await Question.findAll({
      include: [{ model: Tag, as: "tags" }],
      ...filterOptions,
    });

    if (questions === null) {
      return [];
    }

    const questionsWithTags = questions.map(
      //@ts-ignore
      ({ dataValues: { tags, ...rest } }) => ({
        ...rest,
        //@ts-ignore
        tags: tags.map(({ dataValues }) => dataValues),
      })
    );

    //@ts-ignore
    return questionsWithTags;
  }

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

      for (let i = 0; i < addedTags.length; i++) {
        //@ts-ignore
        await addedQuestion.addTag(addedTags[i].value);
      }

      return addedQuestion.id;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }
}
