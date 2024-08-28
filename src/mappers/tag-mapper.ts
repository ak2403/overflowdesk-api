import { Mapper } from "../types/mappers/mapper";
import { Tag } from "../types/mappers/tag";

export class TagMapper implements Mapper<Tag> {
  private _id!: string;
  private _name!: string;

  set id(id: string) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }

  build(): Tag {
    return {
      id: this._id,
      name: this._name,
    };
  }
}
