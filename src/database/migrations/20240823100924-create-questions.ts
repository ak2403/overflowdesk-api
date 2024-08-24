import { DataTypes, QueryInterface } from "sequelize";

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable("questions", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      body: { type: Sequelize.STRING, allowNull: false },
      createdDate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      downVoted: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      lastActivityDate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      link: { type: Sequelize.STRING, allowNull: false },
      score: { type: Sequelize.INTEGER, defaultValue: 0 },
      title: { type: Sequelize.STRING, allowNull: false },
      upVoted: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      viewCount: { type: Sequelize.INTEGER, defaultValue: 0 },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable("questions");
  },
};
