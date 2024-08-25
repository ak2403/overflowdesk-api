import Tag from "../database/models/tags";
import { QueryOptions } from "../types/repositories/repository";
import { structFilterOptions } from "./utils";

export class TagsRepository {
  static async findByName(name: string): Promise<string | null> {
    try {
      const tag = await Tag.findOne({
        where: {
          name,
        },
      });

      if (tag === null) {
        return null;
      }

      const { dataValues } = tag;

      return dataValues.id;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  static async findOrpush(name: string): Promise<Tag> {
    try {
      const [tag, created] = await Tag.findOrCreate({
        where: { name },
      });

      return tag;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }

  static async findAll(options: QueryOptions): Promise<{ name: string }[]> {
    try {
      const filterOptions = structFilterOptions(options);

      const tags = await Tag.findAll({ ...filterOptions });

      return tags.map(({ dataValues }) => dataValues);
    } catch (error) {
      console.log(error);
      //@ts-ignore
      throw new Error(error);
    }
  }
}
