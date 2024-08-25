import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";

export const TagType = new GraphQLObjectType({
  name: "Tag",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

export const QuestionType = new GraphQLObjectType({
  name: "Question",
  fields: {
    id: { type: GraphQLString },
    body: { type: GraphQLString },
    createdDate: { type: GraphQLInt },
    downVoteCount: { type: GraphQLInt },
    lastActivityDate: { type: GraphQLInt },
    link: { type: GraphQLString },
    score: { type: GraphQLInt },
    title: { type: GraphQLString },
    upVoteCount: { type: GraphQLInt },
    viewCount: { type: GraphQLInt },
    tags: {
      type: new GraphQLList(TagType),
    },
  },
});
