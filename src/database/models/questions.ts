import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { databaseConnection } from "../connection";
import Tag from "./tags";
import QuestionTag from "./questiontags";

class Question extends Model<
  InferAttributes<Question>,
  InferCreationAttributes<Question>
> {
  declare id: string;
  declare body: string;
  declare createdDate: number;
  declare downVoteCount: number;
  declare lastActivityDate: number;
  declare link: string;
  declare score: number;
  declare title: string;
  declare upVoteCount: number;
  declare viewCount: number;
}

Question.init(
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    body: { type: DataTypes.TEXT, allowNull: false },
    createdDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    downVoteCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    lastActivityDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    link: { type: DataTypes.STRING, allowNull: false },
    score: { type: DataTypes.INTEGER, defaultValue: 0 },
    title: { type: DataTypes.STRING, allowNull: false },
    upVoteCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    viewCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {
    sequelize: databaseConnection,
    modelName: "question",
    tableName: "questions",
    timestamps: false,
  }
);

Question.belongsToMany(Tag, {
  through: QuestionTag,
});

Tag.belongsToMany(Question, {
  through: QuestionTag,
});

export default Question;
