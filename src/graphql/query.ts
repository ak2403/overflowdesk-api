import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { GraphQuestionType, GraphTagType } from "./types";
import { QuestionsRegistry } from "../registry/questions-registry";
import { TagRegistry } from "../registry/tag-registry";

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    questions: {
      type: new GraphQLList(GraphQuestionType),
      args: {
        sortBy: {
          type: new GraphQLNonNull(GraphQLString),
        },
        desc: {
          type: GraphQLBoolean,
          defaultValue: true,
        },
      },
      resolve: (_parentValue, { desc, sortBy }) => {
        const questionsRepository = new QuestionsRegistry();

        return questionsRepository.fetchAll({
          orderBy: {
            sortBy,
            desc,
          },
        });
      },
    },
    tags: {
      type: new GraphQLList(GraphTagType),
      args: {
        name: {
          type: GraphQLString,
          defaultValue: "",
        },
      },
      resolve: (_parentValue, { name }) => {
        const tagRegistry = new TagRegistry();

        return tagRegistry.find({
          searchBy: {
            name,
          },
        });
      },
    },
  },
});
