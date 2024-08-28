import { AnswerMapper } from "./answer-mapper";

describe("AnswerMapper()", () => {
  const answerMapper = new AnswerMapper();

  it("construct answer with passed attribute values", () => {
    answerMapper.id = 123;
    answerMapper.body = "sample body";
    answerMapper.commentCount = 2;
    answerMapper.downVoteCount = 1;
    answerMapper.questionId = 456;
    answerMapper.score = 2;
    answerMapper.upVoteCount = 2;

    expect(answerMapper.build()).toMatchSnapshot();
  });
});
