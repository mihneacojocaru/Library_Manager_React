'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookStore.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false
    },
    author: {
      type:DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type:DataTypes.DATEONLY,
      allowNull: false
    },
    isbn_no: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    createdAt:false,
    updatedAt:false,
    tableName:"book_store"
  });
  return BookStore;
};