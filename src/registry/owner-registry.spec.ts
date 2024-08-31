import { createTestStackOwnerResponse } from "../__test_utils/owner";
import { OwnerRegistry } from "./owner-registry";

describe("OwnerRegistry()", () => {
  const ownerRegistry = new OwnerRegistry();

  describe("find()", () => {
    it("returns null if question not exists", async () => {
      const result = await ownerRegistry.find(createTestStackOwnerResponse());

      expect(result).toBeNull();
    });

    it("returns added question from db", async () => {
      const questionPayload = createTestStackOwnerResponse();

      await ownerRegistry.push(questionPayload);

      const result = await ownerRegistry.find(questionPayload);

      expect(result?.id).toEqual(questionPayload.account_id);
    });
  });

  describe("push()", () => {
    it("adds new question when stack question response passed", async () => {
      const questionPayload = createTestStackOwnerResponse();

      const result = await ownerRegistry.push(questionPayload);

      expect(result?.id).toEqual(questionPayload.account_id);
    });
  });

  describe("findOrPush()", () => {
    const questionPayload = createTestStackOwnerResponse();

    it("adds question if its not present in db", async () => {
      const result = await ownerRegistry.findOrPush(questionPayload);

      expect(result?.id).toEqual(questionPayload.account_id);
    });
  });
});
