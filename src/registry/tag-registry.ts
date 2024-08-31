import { TagsRepository } from "../repositories/tags-repository";
import { Tag } from "../types/mappers/tag";

export class TagRegistry {
  async create(name: string): Promise<Tag> {
    return await TagsRepository.findOrpush(name);
  }
}
