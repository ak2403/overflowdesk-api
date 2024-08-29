import {
  generateRandomIntNumber,
  generateRandomLink,
  generateRandomName,
} from "../helpers/faker/common";
import { Owner } from "../types/mappers/owner";
import { OwnerRepository } from "./owner-repository";

describe("OwnerRepository", () => {
  const newOwner: Owner = {
    id: generateRandomIntNumber(),
    name: generateRandomName(),
    profileImage: generateRandomLink(),
    profileLink: generateRandomLink(),
    reputation: 2,
    userId: 1,
  };

  describe("push()", () => {
    it("creates new owner for passed value", async () => {
      const result = await OwnerRepository.push(newOwner);

      expect(result).not.toBeNull();
      expect(result).toMatchObject(newOwner);
    });

    it("throws error when existing owner tried to add", async () => {
      try {
        await OwnerRepository.push(newOwner);
      } catch (error) {
        //@ts-ignore
        expect(error.message).toBe(
          "SequelizeUniqueConstraintError: Validation error"
        );
      }
    });
  });

  describe("findById()", () => {
    it("finds owner by id", async () => {
      const result = await OwnerRepository.findById(newOwner.id);

      expect(result).not.toBeNull();
      expect(result).toMatchObject(newOwner);
    });

    it("returns null if no owner found", async () => {
      const result = await OwnerRepository.findById(generateRandomIntNumber());

      expect(result).toBeNull();
    });
  });
});
