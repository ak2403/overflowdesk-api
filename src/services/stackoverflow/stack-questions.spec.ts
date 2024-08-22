import { StackQuestions } from "./stack-questions";
import { get } from "../../helpers/fetch";

jest.mock("../../helpers/fetch", () => ({
  get: jest.fn(),
}));

(get as jest.Mock).mockResolvedValue({});

describe("StackQuestions", () => {
  let stackQuestions = new StackQuestions("https://api.stackexchange.com/2.3");

  describe("list()", () => {
    it("returns response for a valid call", async () => {
      (get as jest.Mock).mockResolvedValueOnce({
        data: {
          items: [],
          has_more: true,
          quota_max: 1000,
          quota_remaining: 1000,
        },
      });

      const result = await stackQuestions.list({
        key: "123",
        site: "stackoverflow",
      });

      expect(result).toEqual({
        items: [],
        has_more: true,
        quota_max: 1000,
        quota_remaining: 1000,
      });
    });
  });

  describe("getById()", () => {
    it("returns response for a valid id", async () => {
      (get as jest.Mock).mockResolvedValueOnce({
        data: {
          items: [{}],
          has_more: true,
          quota_max: 1000,
          quota_remaining: 1000,
        },
      });

      const result = await stackQuestions.getById("123456", {
        key: "123",
        site: "stackoverflow",
      });

      expect(result).toEqual({
        items: [{}],
        has_more: true,
        quota_max: 1000,
        quota_remaining: 1000,
      });
    });
  });
});
