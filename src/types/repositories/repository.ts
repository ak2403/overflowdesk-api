import { Order } from "sequelize";

export type QueryOptions = {
  include?: {
    as: string;
    model: any;
    where?: Record<string, Record<symbol, string>>;
  }[];
  limit?: number;
  offset?: number;
  orderBy?: {
    sortBy: string;
    desc: boolean;
  };
  searchBy?: Record<string, string>;
};

export type FilterOptions = {
  order?: Order;
  limit?: number;
  offset?: number;
  where?: Record<string, object>;
};

export abstract class Repository {}
