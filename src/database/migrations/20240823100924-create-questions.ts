import { DataTypes, QueryInterface } from "sequelize";

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable("questions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      body: { type: Sequelize.TEXT, allowNull: false },
      createdDate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      downVoteCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      isAnswered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      lastActivityDate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      link: { type: Sequelize.STRING, allowNull: false },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: { tableName: "owners" },
          key: "id",
        },
      },
      score: { type: Sequelize.INTEGER, defaultValue: 0 },
      title: { type: Sequelize.STRING, allowNull: false },
      upVoteCount: {
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
