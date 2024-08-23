import { StackQuestion } from "../types/mappers/stack-question";
import { StackOverflowQuestion } from "../types/models/stackoverflow";

type PrimaryQuestionProps = Omit<
  StackOverflowQuestion,
  "owner" | "last_activity_date" | "content_license"
>;

export class StackQuestionMapper {
  static transform(question: PrimaryQuestionProps): StackQuestion {
    const { creation_date, question_id, link, score, tags, title, view_count } =
      question;

    return {
      createdDate: creation_date,
      id: question_id,
      link,
      score,
      tags,
      title,
      viewCount: view_count,
    };
  }
}
