import { structApiUrl } from "./utils";

describe("structApiUrl()", () => {
  it("should return valid url string", () => {
    const result = structApiUrl(
      {
        url: "http://mockurl.com",
        type: "questions",
      },
      { key: "123", site: "stack" }
    );

    expect(result).toBe("http://mockurl.com/questions?key=123&site=stack");
  });
});
