import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { databaseConnection } from "../connection";
import Question from "./questions";
import Tag from "./tags";

class QuestionTag extends Model<
  InferAttributes<QuestionTag>,
  InferCreationAttributes<QuestionTag>
> {
  declare id: CreationOptional<string>;
  declare question_id: string;
  declare tag_id: string;
}

QuestionTag.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    question_id: {
      type: DataTypes.STRING,
      references: {
        model: Question,
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.STRING,
      references: {
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize: databaseConnection,
    modelName: "questiontag",
    tableName: "questiontags",
  }
);

export default QuestionTag;
