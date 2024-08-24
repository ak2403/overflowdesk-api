import { StackQuestion } from "../types/mappers/stack-question";
import { StackOverflowQuestion } from "../types/models/stackoverflow";

type PrimaryQuestionProps = Omit<
  StackOverflowQuestion,
  "owner" | "content_license"
>;

export class StackQuestionMapper {
  static transform(question: PrimaryQuestionProps): StackQuestion {
    const {
      creation_date,
      last_activity_date,
      question_id,
      link,
      score,
      tags,
      title,
      up_vote_count,
      down_vote_count,
      body,
      view_count,
    } = question;

    return {
      createdDate: creation_date,
      id: question_id,
      link,
      score,
      tags,
      title,
      viewCount: view_count,
      lastActivityDate: last_activity_date,
      body,
      upVoteCount: up_vote_count,
      downVoteCount: down_vote_count,
    };
  }
}
