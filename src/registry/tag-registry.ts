import { TagsRepository } from "../repositories/tags-repository";
import { Tag } from "../types/mappers/tag";
import { QueryOptions } from "../types/repositories/repository";

export class TagRegistry {
  async create(name: string): Promise<Tag> {
    return await TagsRepository.findOrpush(name);
  }

  async find(queryOptions: QueryOptions = {}): Promise<Tag[]> {
    return await TagsRepository.findAll(queryOptions);
  }
}
