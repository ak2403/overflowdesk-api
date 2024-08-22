import { get } from "./get";

describe("get", () => {
  it("should return response for valid input", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue("sample response"),
      ok: true,
      status: 200,
    } as unknown as Response);

    const response = await get("http://mockurl.com", {});

    expect(response).toEqual({
      statusCode: 200,
      data: "sample response",
    });
  });

  it("should throw error when 'ok' = false", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue("sample response"),
      ok: false,
    } as unknown as Response);

    try {
      await get("http://mockurl.com", {});
    } catch (error) {
      expect(error.message).toBe("Error in get api");
    }
  });
});
