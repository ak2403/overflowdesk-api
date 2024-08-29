import {
  generateRandomLines,
  generateRandomLink,
} from "../helpers/faker/common";
import { QuestionAdapter, QuestionParams } from "./question-adapter";

describe("QuestionAdapter()", () => {
  const questionAdapter = new QuestionAdapter();

  it("transforms stackoverflow question response to needed format", () => {
    const questionParams: QuestionParams = {
      answer_count: 2,
      body: generateRandomLines(),
      creation_date: 1234,
      down_vote_count: 2,
      is_answered: true,
      last_activity_date: 12123,
      link: generateRandomLink(),
      question_id: 1,
      score: 5,
      title: generateRandomLines(),
      up_vote_count: 5,
      view_count: 10,
    };

    const result = questionAdapter.transform(questionParams);

    expect(Object.keys(result)).toEqual([
      "id",
      "body",
      "createdDate",
      "downVoteCount",
      "isAnswered",
      "lastActivityDate",
      "link",
      "ownerId",
      "score",
      "title",
      "upVoteCount",
      "viewCount",
    ]);
    expect(result.id).toBe(1);
    expect(result.isAnswered).toBe(true);
  });
});
