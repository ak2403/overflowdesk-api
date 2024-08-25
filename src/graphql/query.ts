import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import Question from "../database/models/questions";
import Tag from "../database/models/tags";
import { QuestionType } from "./types";
import { QuestionsRepository } from "../repositories/questions";

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    questions: {
      type: new GraphQLList(QuestionType),
      args: {
        descSortByActivity: {
          type: GraphQLBoolean,
          defaultValue: true,
        },
      },
      resolve: (parentValue, args) => {
        const questionsRepository = new QuestionsRepository();

        return questionsRepository.findAll();
      },
    },
    question: {
      type: QuestionType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (parentValue, args) => {
        const questions = Question.findOne({
          where: { id: args.id },
          include: [{ model: Tag, as: "tags" }],
        });

        return questions;
      },
    },
  },
});
