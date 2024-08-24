import Question from "../database/models/questions";
import { StackQuestion } from "../types/mappers/stack-question";

export class QuestionsRepository {
  async push(question: StackQuestion): Promise<string> {
    try {
      const { id, createdDate, link, score, title, viewCount } = question;

      const { id: createdId } = await Question.create({
        id: String(id),
        createdDate,
        link,
        score,
        title,
        viewCount,
      });

      return createdId;
    } catch (error) {
      console.log(error);

      throw new Error(error);
    }
  }
}
