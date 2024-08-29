import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import { databaseConnection } from "../connection";
import Question from "./questions";

class Owner extends Model<
  InferAttributes<Owner>,
  InferCreationAttributes<Owner>
> {
  declare id: number;
  declare name: string;
  declare profileImage: string;
  declare profileLink: string;
  declare reputation: number;
  declare userId: number;
}

Owner.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
    },
    profileLink: {
      type: DataTypes.STRING,
    },
    reputation: { type: DataTypes.INTEGER, defaultValue: 0 },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "owner",
    sequelize: databaseConnection,
    tableName: "owners",
    timestamps: false,
  }
);

Owner.belongsTo(Question, {
  foreignKey: "ownerId",
});

export default Owner;
