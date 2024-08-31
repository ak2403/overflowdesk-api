import { Owner } from "./owner";
import { Tag } from "./tag";

export type Question = {
  id: number;
  body: string;
  createdDate: number;
  downVoteCount: number;
  isAnswered: boolean;
  lastActivityDate: number;
  link: string;
  score: number;
  title: string;
  upVoteCount: number;
  viewCount: number;
};

export type QuestionWithTagsAndOwner = Question & Tag & Owner;
