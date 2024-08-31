import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { GraphQuestionType, GraphTagType } from "./types";
import { TagsRepository } from "../repositories/tags-repository";
import { QuestionsRegistry } from "../registry/questions-registry";

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
      resolve: (_parentValue, args) => {
        const { sortBy, desc } = args;
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
      resolve: (_parentValue, args) => {
        const { name } = args;

        return TagsRepository.findAll({
          searchBy: {
            name,
          },
        });
      },
    },
  },
});
