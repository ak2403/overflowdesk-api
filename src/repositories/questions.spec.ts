import {
  generateRandomIntNumber,
  generateRandomLines,
} from "../helpers/faker/common";
import { StackQuestion } from "../types/mappers/stack-question";
import { QuestionsRepository } from "./questions";

const generateQuestion = (): StackQuestion => ({
  id: generateRandomIntNumber(),
  body: generateRandomLines(),
  createdDate: generateRandomIntNumber(),
  downVoteCount: 0,
  lastActivityDate: generateRandomIntNumber(),
  link: generateRandomLines(),
  score: generateRandomIntNumber(),
  tags: [generateRandomLines()],
  title: generateRandomLines(2),
  upVoteCount: 0,
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
        //@ts-ignore
        expect(error.message).toBe(
          "SequelizeUniqueConstraintError: Validation error"
        );
      }
    });
  });

  describe("find()", () => {
    const questionToAdd = generateQuestion();

    it("finds question by id", async () => {
      const repo = new QuestionsRepository();

      await repo.push(questionToAdd);

      const result = await repo.find(String(questionToAdd.id));

      expect(result).not.toBeNull();
      expect(result?.body).toBe(questionToAdd.body);
    });

    it("returns null when no record found", async () => {
      const repo = new QuestionsRepository();

      const result = await repo.find(String(generateRandomIntNumber()));

      expect(result).toBeNull();
    });
  });

  describe("findAll()", () => {
    it("returns all questions", async () => {
      const repo = new QuestionsRepository();

      const result = await repo.findAll({
        orderBy: {
          sortBy: "lastActivityDate",
          desc: true,
        },
      });

      expect(result).not.toBeNull();
      expect(result.length).not.toBe(0);
    });
  });

  describe("update()", () => {
    const questionToAdd = generateQuestion();

    it("updates question by id", async () => {
      const repo = new QuestionsRepository();

      await repo.push(questionToAdd);

      await repo.update({
        ...questionToAdd,
        title: "updated title",
      });

      const updatedResult = await repo.find(String(questionToAdd.id));

      expect(updatedResult).not.toBeNull();
      expect(updatedResult?.title).toBe("updated title");
    });

    it("returns false when no record found", async () => {
      const repo = new QuestionsRepository();

      const result = await repo.update({
        ...questionToAdd,
        id: generateRandomIntNumber(),
      });

      expect(result).toBeFalsy();
    });
  });

  describe("pushWithTags()", () => {
    const questionToAdd = generateQuestion();

    it("returns id of valid record", async () => {
      const repo = new QuestionsRepository();

      const result = await repo.pushWithTags(questionToAdd);

      expect(result).toBeTruthy();
    });

    it.todo("returns question with tags");

    it.skip("throws error when attempt to add duplicate record", async () => {
      const repo = new QuestionsRepository();

      try {
        await repo.push(questionToAdd);
      } catch (error) {
        //@ts-ignore
        expect(error.message).toBe(
          "SequelizeUniqueConstraintError: Validation error"
        );
      }
    });
  });
});
