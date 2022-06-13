"use strict";

const { v4: uuidv4 } = require("uuid");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isSoftDeleted: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((user, options) => {
    user.id = uuidv4();
    user.isSoftDeleted = 0;
  });

  return User;
};
