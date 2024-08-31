import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { databaseConnection } from "../connection";
import Tag from "./tags";
import QuestionTag from "./questiontags";
import Owner from "./owner";

class Question extends Model<
  InferAttributes<Question>,
  InferCreationAttributes<Question>
> {
  declare id: number;
  declare body: string;
  declare createdDate: number;
  declare downVoteCount: number;
  declare isAnswered: boolean;
  declare lastActivityDate: number;
  declare link: string;
  declare ownerId?: number;
  declare score: number;
  declare title: string;
  declare upVoteCount: number;
  declare viewCount: number;
}

Question.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    body: { type: DataTypes.TEXT, allowNull: false },
    createdDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    downVoteCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isAnswered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lastActivityDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    link: { type: DataTypes.STRING, allowNull: false },
    ownerId: {
      type: DataTypes.INTEGER,
      references: {
        model: Owner,
        key: "id",
      },
    },
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
  foreignKey: "questionId",
});

Tag.belongsToMany(Question, {
  through: QuestionTag,
  foreignKey: "tagId",
});

Question.belongsTo(Owner, {
  foreignKey: "ownerId",
  as: "owner",
});

Owner.hasMany(Question, {
  foreignKey: "id",
  as: "questions",
});

export default Question;
