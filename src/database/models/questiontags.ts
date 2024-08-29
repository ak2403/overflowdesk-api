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
  declare questionId: string;
  declare tagId: string;
}

QuestionTag.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    questionId: {
      type: DataTypes.STRING,
      references: {
        model: Question,
        key: "id",
      },
    },
    tagId: {
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
