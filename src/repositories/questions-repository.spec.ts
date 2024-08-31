import {
  createTestQuestionPayload,
  generateTestQuestion,
} from "../__test_utils/generate-test-question";
import { generateRandomIntNumber } from "../helpers/faker/common";
import { Question } from "../types/mappers/question";
import { QuestionsRepository } from "./questions-repository";

describe("QuestionsRepository", () => {
  describe("push()", () => {
    let addedRecord: Question;

    it("returns id of valid record", async () => {
      const [addedId, questionPayload] = await generateTestQuestion();

      addedRecord = questionPayload;

      expect(addedId).toBeTruthy();
    });

    it("throws error when attempt to add duplicate record", async () => {
      try {
        await QuestionsRepository.push(addedRecord);
      } catch (error) {
        //@ts-ignore
        expect(error.message).toBe(
          "SequelizeUniqueConstraintError: Validation error"
        );
      }
    });
  });

  describe("find()", () => {
    let addedRecord: Question;

    it("finds question by id", async () => {
      const [addedId, questionPayload] = await generateTestQuestion();

      addedRecord = questionPayload;

      const result = await QuestionsRepository.find(addedId);

      const { dataValues = {} } = result || {};

      const { ownerId, ...rest } = dataValues;

      expect(result).not.toBeNull();
      expect(rest).toEqual(questionPayload);
    });

    it("returns null when no record found", async () => {
      const result = await QuestionsRepository.find(generateRandomIntNumber());

      expect(result).toBeNull();
    });
  });

  describe("findAll()", () => {
    it("returns all questions", async () => {
      const result = await QuestionsRepository.findAll({
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
    it("updates question by id", async () => {
      const [addedId, questionPayload] = await generateTestQuestion();

      await QuestionsRepository.update({
        ...questionPayload,
        title: "updated title",
      });

      const updatedResult = await QuestionsRepository.find(addedId);

      expect(updatedResult).not.toBeNull();
      expect(updatedResult?.title).toBe("updated title");
    });

    it("returns false when no record found", async () => {
      const result = await QuestionsRepository.update(
        createTestQuestionPayload()
      );

      expect(result).toBeFalsy();
    });
  });
});
