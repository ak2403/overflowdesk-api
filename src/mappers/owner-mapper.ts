import { Mapper } from "../types/mappers/mapper";
import { Owner } from "../types/mappers/owner";

export class OwnerMapper implements Mapper<Owner> {
  private _accountId!: number;
  private _name!: string;
  private _profileImage!: string;
  private _profileLink!: string;
  private _reputation!: number;
  private _userId!: number;

  set accountId(id: number) {
    this._accountId = id;
  }

  set name(name: string) {
    this._name = name;
  }

  set profileImage(linkToImage: string) {
    this._profileImage = linkToImage;
  }

  set profileLink(linkToProfile: string) {
    this._profileLink = linkToProfile;
  }

  set reputation(reputation: number) {
    this._reputation = reputation;
  }

  set userId(id: number) {
    this._userId = id;
  }

  build(): Owner {
    return {
      id: this._accountId,
      name: this._name,
      profileImage: this._profileImage,
      profileLink: this._profileLink,
      reputation: this._reputation,
      userId: this._userId,
    };
  }
}
