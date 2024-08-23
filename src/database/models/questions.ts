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
    id: DataTypes.STRING,
    createdDate: DataTypes.INTEGER,
    link: DataTypes.STRING,
    score: DataTypes.INTEGER,
    title: DataTypes.STRING,
    viewCount: DataTypes.INTEGER,
  },
  {
    sequelize: databaseConnection,
    modelName: "question",
  }
);

export default Question;
