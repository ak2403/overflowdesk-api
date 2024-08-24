import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { databaseConnection } from "../connection";

class Question extends Model<
  InferAttributes<Question>,
  InferCreationAttributes<Question>
> {
  declare id: string;
  declare body: string;
  declare createdDate: number;
  declare downVoted: number;
  declare lastActivityDate: number;
  declare link: string;
  declare score: number;
  declare title: string;
  declare upVoted: number;
  declare viewCount: number;
}

Question.init(
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    body: { type: DataTypes.STRING, allowNull: false },
    createdDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    downVoted: {
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
    upVoted: {
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

export default Question;
