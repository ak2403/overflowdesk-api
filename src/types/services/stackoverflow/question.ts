export type StackOverflowResponse<T> = {
  has_more: boolean;
  items: T[];
  quota_max: number;
  quota_remaining: number;
};

export type OwnerResponse = {
  account_id: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
};

export type TagsResponse = string[];

export type QuestionResponse = {
  answer_count: number;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  owner: OwnerResponse;
  question_id: number;
  score: number;
  tags: TagsResponse;
  title: string;
  view_count: number;
  body: string;
  up_vote_count: number;
  down_vote_count: number;
};

export type QuestionDetailResponse = QuestionResponse & {
  accepted_answer_id: string;
};
