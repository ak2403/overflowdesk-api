import {
  generateRandomIntNumber,
  generateRandomLines,
  generateRandomLink,
  generateRandomName,
} from "../helpers/faker/common";
import { OwnerRepository } from "../repositories/owner-repository";
import { QuestionsRepository } from "../repositories/questions-repository";
import { TagsRepository } from "../repositories/tags-repository";
import { Question } from "../types/mappers/question";

export const createTestQuestionPayload = () => ({
  body: generateRandomLines(),
  createdDate: generateRandomIntNumber(),
  downVoteCount: 0,
  id: generateRandomIntNumber(),
  isAnswered: false,
  lastActivityDate: generateRandomIntNumber(),
  link: generateRandomLines(),
  score: generateRandomIntNumber(),
  title: generateRandomLines(2),
  upVoteCount: 0,
  viewCount: generateRandomIntNumber(),
});

export const generateTestQuestion = async (): Promise<[number, Question]> => {
  try {
    const tagAdded = await TagsRepository.findOrpush("tag1");
    const ownerAdded = await OwnerRepository.push({
      id: generateRandomIntNumber(),
      name: generateRandomName(),
      profileImage: generateRandomLink(),
      profileLink: generateRandomLink(),
      reputation: 1,
      userId: generateRandomIntNumber(),
    });
    const questionPayload = createTestQuestionPayload();

    const questionAdded = await QuestionsRepository.push(questionPayload);

    //@ts-ignore
    await questionAdded.addTag(tagAdded.id);
    //@ts-ignore
    await questionAdded.setOwner(ownerAdded.id);

    return [questionAdded.id, questionPayload];
  } catch (error) {
    throw new Error(error);
  }
};
