import { StackQuestionMapper } from "./stack-question-mapper";

describe("StackQuestionMapper", () => {
  it("transform question response to valid model", () => {
    const result = StackQuestionMapper.transform({
      tags: ["tag"],
      is_answered: true,
      view_count: 24,
      answer_count: 1,
      score: 1,
      creation_date: 1547025378,
      question_id: 54106638,
      link: "demo-link",
      title: "demo-title",
    });

    expect(result).toMatchSnapshot();
  });
});
