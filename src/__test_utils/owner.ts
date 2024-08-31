import {
  generateRandomIntNumber,
  generateRandomLink,
  generateRandomName,
} from "../helpers/faker/common";

export const createTestStackOwnerResponse = () => ({
  account_id: generateRandomIntNumber(),
  display_name: generateRandomName(),
  link: generateRandomLink(),
  profile_image: generateRandomLink(),
  reputation: generateRandomIntNumber(),
  user_id: generateRandomIntNumber(),
  user_type: "",
});
