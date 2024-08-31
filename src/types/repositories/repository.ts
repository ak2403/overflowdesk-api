import { Model, Order } from "sequelize";

export type QueryOptions = {
  orderBy?: {
    sortBy: string;
    desc: boolean;
  };
  searchBy?: Record<string, string>;
  limit?: number;
  offset?: number;
};

export type FilterOptions = {
  order?: Order;
  limit?: number;
  offset?: number;
  where?: Record<string, object>;
};

export abstract class Repository {}
