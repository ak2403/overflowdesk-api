import { faker } from "@faker-js/faker";

export const generateRandomIntNumber = (): number => {
  return faker.number.int({ max: 1000 });
};

export const generateRandomLines = (length: number = 1): string => {
  return faker.lorem.lines({ min: length, max: length });
};

export const generateRandomLink = (): string => faker.image.url();
