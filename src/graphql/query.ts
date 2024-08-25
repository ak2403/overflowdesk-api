import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { QuestionType, TagType } from "./types";
import { QuestionsRepository } from "../repositories/questions";
import { TagsRepository } from "../repositories/tags";

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    questions: {
      type: new GraphQLList(QuestionType),
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
        const questionsRepository = new QuestionsRepository();

        return questionsRepository.findAll({
          orderBy: {
            sortBy,
            desc,
          },
        });
      },
    },
    tags: {
      type: new GraphQLList(TagType),
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
