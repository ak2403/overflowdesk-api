export type QueryOptions = {
  filter?: string;
  key: string;
  order?: string;
  site: string;
  sort?: string;
};

export type ApiOptions = {
  id?: string;
  type: string;
  url: string;
};

export enum StackOverflowApiType {
  Questions = "questions",
}
