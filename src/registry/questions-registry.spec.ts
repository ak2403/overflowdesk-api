import { QuestionsRegistry } from "./questions-registry";

describe("QuestionsRegistry()", () => {
  const questionsRegistry = new QuestionsRegistry();

  describe("fetchAll()", () => {
    it("returns questions with owner and tags", async () => {
      const questions = await questionsRegistry.fetchAll();

      expect(questions.length).not.toBe(0);
      expect(Object.keys(questions[0])).toEqual([
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
        "tags",
        "owner",
      ]);
    });
  });
});
