import { StackQuestions } from "./stack-questions";

const StackApiUrl = process.env.STACK_API_URL || "";
const StackApiKey = process.env.STACK_API_KEY || "";

describe("StackQuestions", () => {
  let stackQuestions = new StackQuestions(StackApiUrl);

  describe("list()", () => {
    it("returns response for a valid call", async () => {
      const result = await stackQuestions.list({
        key: StackApiKey,
        site: "stackoverflow",
      });

      expect(Object.keys(result)).toEqual([
        "items",
        "has_more",
        "quota_max",
        "quota_remaining",
      ]);
      expect(result).toMatchSnapshot();
    });
  });

  describe("getById()", () => {
    it("returns response for a valid id", async () => {
      const result = await stackQuestions.getById("123456", {
        key: StackApiKey,
        site: "stackoverflow",
      });

      expect(Object.keys(result)).toEqual([
        "items",
        "has_more",
        "quota_max",
        "quota_remaining",
      ]);
      expect(result).toMatchSnapshot();
    });
  });
});
