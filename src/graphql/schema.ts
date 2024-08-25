import { GraphQLSchema } from "graphql";
import { RootQuery } from "./query";

export const schema = new GraphQLSchema({
  query: RootQuery,
});
