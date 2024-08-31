import { OwnerMapper } from "../mappers/owner-mapper";
import { OwnerRepository } from "../repositories/owner-repository";
import { Owner } from "../types/mappers/owner";
import { OwnerResponse } from "../types/services/stackoverflow/question";

export class OwnerRegistry {
  async find(response: OwnerResponse): Promise<Owner | null> {
    const owner = OwnerMapper.transform(response).build();

    return await OwnerRepository.findById(owner.id);
  }

  async push(response: OwnerResponse): Promise<Owner> {
    const owner = OwnerMapper.transform(response).build();

    return await OwnerRepository.push(owner);
  }

  async findOrPush(response: OwnerResponse): Promise<Owner> {
    const ownerFromDb = await this.find(response);

    if (ownerFromDb != null) {
      return ownerFromDb;
    }

    return await this.push(response);
  }
}
