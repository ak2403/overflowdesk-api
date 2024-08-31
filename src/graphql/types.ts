import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";

export const GraphTagType = new GraphQLObjectType({
  name: "Tag",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

export const GraphOwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    profileLink: { type: GraphQLString },
    reputation: { type: GraphQLString },
  },
});

export const GraphQuestionType = new GraphQLObjectType({
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
      type: new GraphQLList(GraphTagType),
    },
    owner: {
      type: GraphOwnerType,
    },
  },
});
