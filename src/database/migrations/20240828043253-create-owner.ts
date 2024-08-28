import { DataTypes, QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable("owners", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      reputation: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      profileImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profileLink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable("owners");
  },
};
