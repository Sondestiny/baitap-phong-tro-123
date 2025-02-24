'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Image, { foreignKey: 'imagesID', targetKey: 'id', as: 'images'})
      Post.belongsTo(models.User, {foreignKey: 'userID', targetKey: 'id', as: 'user'})
      Post.belongsTo(models.Atribute, {foreignKey: 'attributesID', targetKey: 'id', as: 'attribute'})
    }
  }
  Post.init({
    title: DataTypes.STRING,
    star: DataTypes.STRING,
    labelcode: DataTypes.STRING,
    address: DataTypes.STRING,
    attributesID: DataTypes.STRING,
    categoryCode: DataTypes.STRING,
    description: DataTypes.STRING,
    userID: DataTypes.STRING,
    overviewID: DataTypes.STRING,
    imagesID: DataTypes.STRING,
    codePrice: DataTypes.STRING,
    codeArea: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};