import {
  generateRandomIntNumber,
  generateRandomLines,
  generateRandomLink,
  generateRandomName,
} from "../helpers/faker/common";

export const createTestStackQuestionResponse = () => ({
  answer_count: generateRandomIntNumber(),
  creation_date: generateRandomIntNumber(),
  is_answered: false,
  last_activity_date: generateRandomIntNumber(),
  link: generateRandomLink(),
  question_id: generateRandomIntNumber(),
  score: generateRandomIntNumber(),
  title: generateRandomName(),
  view_count: generateRandomIntNumber(),
  body: generateRandomLines(),
  up_vote_count: generateRandomIntNumber(),
  down_vote_count: generateRandomIntNumber(),
});
