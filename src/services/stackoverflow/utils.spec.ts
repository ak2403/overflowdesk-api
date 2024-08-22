import { structApiUrl } from "./utils";

describe("structApiUrl()", () => {
  it("should return valid url string", () => {
    const result = structApiUrl({
      url: "http://mockurl.com",
      key: "123",
      type: "questions",
    });

    expect(result).toBe("http://mockurl.com/questions?key=123");
  });
});
