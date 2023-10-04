const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer
      primaryKey: true, // set as primary key
      allowNull: false, // doesn't allow null values
      autoIncrement: true // uses auto increment
    },
    category_name: {
      type: DataTypes.STRING, // string
      allowNull: false // doesn't allow null values
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
