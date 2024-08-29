import { DataTypes, QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable("questiontags", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      questionId: {
        type: Sequelize.STRING,
        references: {
          model: { tableName: "questions" },
          key: "id",
        },
      },
      tagId: {
        type: Sequelize.STRING,
        references: {
          model: { tableName: "tags" },
          key: "id",
        },
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable("questiontags");
  },
};
