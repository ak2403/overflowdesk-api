import { OwnerMapper } from "../mappers/owner-mapper";
import { Adapter } from "../types/adapters/adapter";
import { Owner } from "../types/mappers/owner";
import { OwnerResponse } from "../types/services/stackoverflow/question";

export class OwnerAdapter implements Adapter<OwnerResponse, Owner> {
  static transform(response: OwnerResponse): Owner {
    const {
      account_id,
      display_name,
      link,
      profile_image,
      reputation,
      user_id,
    } = response;

    const ownerMapper = new OwnerMapper();

    ownerMapper.accountId = account_id;
    ownerMapper.name = display_name;
    ownerMapper.profileImage = profile_image;
    ownerMapper.profileLink = link;
    ownerMapper.reputation = reputation;
    ownerMapper.userId = user_id;

    return ownerMapper.build();
  }
}
