import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import { databaseConnection } from "../connection";

class Owner extends Model<
  InferAttributes<Owner>,
  InferCreationAttributes<Owner>
> {
  declare id: number;
  declare userId: number;
  declare reputation: number;
  declare profileImage: string;
  declare profileLink: string;
}

Owner.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reputation: { type: DataTypes.INTEGER, defaultValue: 0 },
    profileImage: {
      type: DataTypes.STRING,
    },
    profileLink: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "owner",
    sequelize: databaseConnection,
    tableName: "owners",
    timestamps: false,
  }
);

export default Owner;
