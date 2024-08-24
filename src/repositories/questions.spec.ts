import {
  generateRandomIntNumber,
  generateRandomLines,
} from "../helpers/faker/common";
import { QuestionsRepository } from "./questions";

const generateQuestion = () => ({
  createdDate: generateRandomIntNumber(),
  id: generateRandomIntNumber(),
  link: generateRandomLines(),
  score: generateRandomIntNumber(),
  tags: [generateRandomLines()],
  title: generateRandomLines(2),
  viewCount: generateRandomIntNumber(),
});

describe("QuestionsRepository", () => {
  describe("push()", () => {
    const questionToAdd = generateQuestion();

    it("returns id of valid record", async () => {
      const repo = new QuestionsRepository();

      const result = await repo.push(questionToAdd);

      expect(result).toBeTruthy();
    });

    it("throws error when attempt to add duplicate record", async () => {
      const repo = new QuestionsRepository();

      try {
        await repo.push(questionToAdd);
      } catch (error) {
        expect(error.message).toBe(
          "SequelizeUniqueConstraintError: Validation error"
        );
      }
    });
  });
});
