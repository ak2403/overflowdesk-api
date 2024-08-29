import TagModel from "../database/models/tags";
import { Tag } from "../types/mappers/tag";
import { QueryOptions, Repository } from "../types/repositories/repository";
import { structFilterOptions } from "./utils";

export class TagsRepository extends Repository {
  static async findByName(name: string): Promise<Tag | null> {
    try {
      const tag = await TagModel.findOne({
        where: {
          name,
        },
      });

      if (tag === null) {
        return null;
      }

      return tag.dataValues;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  static async findOrpush(name: string): Promise<Tag> {
    try {
      const [tag, _created] = await TagModel.findOrCreate({
        where: { name },
      });

      return tag.dataValues;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  static async findAll(options: QueryOptions = {}): Promise<Tag[]> {
    try {
      const filterOptions = structFilterOptions(options);

      const tags = await TagModel.findAll({ ...filterOptions });

      return tags.map(({ dataValues }) => dataValues);
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }
}
