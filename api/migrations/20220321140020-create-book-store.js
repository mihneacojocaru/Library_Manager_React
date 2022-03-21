'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('book_store', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      release_date: {
        type: DataTypes.DATEONLY
      },
      isbn_no: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('book_store');
  }
};