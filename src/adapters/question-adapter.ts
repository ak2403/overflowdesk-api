import { QuestionMapper } from "../mappers";
import { Adapter } from "../types/adapters/adapter";
import { Question } from "../types/mappers/question";
import { QuestionResponse } from "../types/services/stackoverflow/question";

export type QuestionParams = Omit<QuestionResponse, "tags" | "owner">;

export class QuestionAdapter implements Adapter<QuestionResponse, Question> {
  static transform(question: QuestionParams): Question {
    const {
      body,
      creation_date: createdDate,
      down_vote_count: downVoteCount,
      is_answered: isAnswered,
      last_activity_date: lastActivityDate,
      link,
      question_id: questionId,
      score,
      title,
      up_vote_count: upVoteCount,
      view_count: viewCount,
    } = question;

    const questionMapper = new QuestionMapper();

    questionMapper.id = questionId;
    questionMapper.body = body;
    questionMapper.createdDate = createdDate;
    questionMapper.downVoteCount = downVoteCount;
    questionMapper.isAnswered = isAnswered;
    questionMapper.lastActivityDate = lastActivityDate;
    questionMapper.link = link;
    questionMapper.score = score;
    questionMapper.title = title;
    questionMapper.upVoteCount = upVoteCount;
    questionMapper.viewCount = viewCount;

    return questionMapper.build();
  }
}
