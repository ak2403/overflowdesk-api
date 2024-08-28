import { QuestionMapper } from "./question-mapper";

describe("QuestionMapper()", () => {
  const questionMapper = new QuestionMapper();

  it("construct question for passed attribute values", () => {
    questionMapper.id = 1;
    questionMapper.body = "sample-body";
    questionMapper.link = "sample-link";

    expect(questionMapper.build()).toMatchSnapshot();
  });
});
