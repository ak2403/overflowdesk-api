import Tag from "../database/models/tags";

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
}
