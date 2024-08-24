import { DataTypes, QueryInterface } from "sequelize";

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable("questions", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      createdDate: {
        type: Sequelize.INTEGER,
      },
      link: {
        type: Sequelize.STRING,
      },
      score: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      viewCount: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable("questions");
  },
};
