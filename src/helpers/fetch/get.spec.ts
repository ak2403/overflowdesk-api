import { get } from "./get";

describe("get", () => {
  it("should return response for valid input", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue("sample response"),
      ok: true,
      status: 200,
    } as unknown as Response);

    const response = await get("http://mockurl.com");

    expect(response).toEqual({
      data: "sample response",
      ok: true,
      status: 200,
    });
  });

  it("should throw stackoverflow error when 'ok' = false", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({
        error_id: 400,
        error_name: "bad_parameter",
        error_message: "invalid parameter passed",
      }),
      ok: false,
    } as unknown as Response);

    try {
      await get("http://mockurl.com");
    } catch (error) {
      expect(error.name).toBe("stackoverflow-error");
      expect(error.errorResponse).toEqual({
        error_id: 400,
        error_name: "bad_parameter",
        error_message: "invalid parameter passed",
      });
    }
  });
});
