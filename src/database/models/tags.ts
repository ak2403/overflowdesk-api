import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { databaseConnection } from "../connection";

class Tag extends Model<InferAttributes<Tag>, InferCreationAttributes<Tag>> {
  declare id: CreationOptional<string>;
  declare name: string;
}

Tag.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: databaseConnection,
    modelName: "tag",
    tableName: "tags",
  }
);

export default Tag;
