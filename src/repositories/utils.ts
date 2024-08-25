import { Op } from "sequelize";
import { FilterOptions, QueryOptions } from "../types/repositories/repository";

export const structFilterOptions = (
  queryOptions: QueryOptions
): FilterOptions => {
  const {
    orderBy: { sortBy = "", desc } = {},
    limit = 100,
    offset = 0,
    searchBy = {},
  } = queryOptions;

  const filterOptions: FilterOptions = {
    limit,
    offset,
  };

  const searchByKeys = Object.keys(searchBy);

  if (searchByKeys.length !== 0) {
    let searchProps = {};

    searchByKeys.forEach((key) => {
      searchProps = {
        ...searchProps,
        [key]: {
          [Op.like]: `%${searchBy[key]}%`,
        },
      };
    });

    filterOptions.where = searchProps;
  }

  if (sortBy) {
    filterOptions.order = [[sortBy, desc ? "DESC" : "ASC"]];
  }

  return filterOptions;
};
