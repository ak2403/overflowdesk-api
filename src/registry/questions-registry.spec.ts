import { createTestQuestionPayload } from "../__test_utils/generate-test-question";
import { createTestStackOwnerResponse } from "../__test_utils/owner";
import { createTestStackQuestionResponse } from "../__test_utils/question";
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

  describe("create()", () => {
    it("creates new question with tags and owner linked to it", async () => {
      const questionPayload = createTestStackQuestionResponse();

      const result = await questionsRegistry.create({
        ...questionPayload,
        tags: ["tag1"],
        owner: createTestStackOwnerResponse(),
      });

      expect(result).not.toBeNull();
    });
  });
});
