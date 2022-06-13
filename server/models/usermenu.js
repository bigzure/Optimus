'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserMenu.init({
    userId: DataTypes.STRING,
    menuId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserMenu',
  });
  return UserMenu;
};