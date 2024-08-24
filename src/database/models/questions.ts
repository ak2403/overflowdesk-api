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
  declare createdDate: number;
  declare link: string;
  declare score: number;
  declare title: string;
  declare viewCount: number;
}

Question.init(
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    createdDate: DataTypes.INTEGER,
    link: DataTypes.STRING,
    score: DataTypes.INTEGER,
    title: DataTypes.STRING,
    viewCount: DataTypes.INTEGER,
  },
  {
    sequelize: databaseConnection,
    modelName: "question",
    tableName: "questions",
    timestamps: false,
  }
);

export default Question;
