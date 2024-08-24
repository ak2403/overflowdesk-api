import { authenticateConnection } from "./connection";

describe("authenticateConnection()", () => {
  it("returns true when db connection authenticated", async () => {
    const result = await authenticateConnection();

    expect(result).toBeTruthy();
  });
});
