export type StackOverflowResponse<T> = {
  has_more: boolean;
  items: T[];
  quota_max: number;
  quota_remaining: number;
};

export type Owner = {
  account_id: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
};

export type StackOverflowQuestion = {
  answer_count: number;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  owner: Owner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
  body: string;
  up_vote_count: number;
  down_vote_count: number;
};

export type StackOverflowQuestionDetail = StackOverflowQuestion & {
  accepted_answer_id: string;
};
