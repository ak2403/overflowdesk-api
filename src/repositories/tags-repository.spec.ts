import { generateRandomName } from "../helpers/faker/common";
import { TagsRepository } from "./tags-repository";

const generateTag = (): { name: string } => ({
  name: generateRandomName(),
});

describe("TagsRepository", () => {
  const tag = generateTag();

  describe("findByName()", () => {
    it("returns null when no name found", async () => {
      const result = await TagsRepository.findByName(tag.name);

      expect(result).toBeNull();
    });

    it("returns valid tag for given name", async () => {
      await TagsRepository.findOrpush(tag.name);
      const result = await TagsRepository.findByName(tag.name);

      expect(result).toBeTruthy();
    });
  });

  describe("findOrpush()", () => {
    it("returns valid tag for existing name", async () => {
      const result = await TagsRepository.findOrpush(tag.name);

      expect(result.name).toBe(tag.name);
    });

    it("returns valid tag for a new name", async () => {
      const newTag = generateTag();
      const result = await TagsRepository.findOrpush(newTag.name);

      expect(result.name).toBe(newTag.name);
    });
  });

  describe("findAll()", () => {
    it("returns list of tags", async () => {
      const result = await TagsRepository.findAll();

      expect(result.length).not.toBe(0);
    });
  });
});
