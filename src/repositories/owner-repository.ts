import OwnerModel from "../database/models/owner";
import { Owner } from "../types/mappers/owner";
import { Repository } from "../types/repositories/repository";

export class OwnerRepository extends Repository {
  static async findById(id: number): Promise<Owner | null> {
    try {
      const owner = await OwnerModel.findByPk(id);

      if (owner === null) {
        return null;
      }

      return owner.dataValues;
    } catch (error) {
      //@ts-ignore
      throw new Error(error);
    }
  }

  static async push(owner: Owner): Promise<Owner> {
    try {
      const created = await OwnerModel.create(owner);

      return created.dataValues;
    } catch (error) {
      //@ts-ignore
      throw new Error(error);
    }
  }
}
