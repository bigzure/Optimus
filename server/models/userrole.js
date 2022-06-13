"use strict";

const { v4: uuidv4 } = require("uuid");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserRole.init(
    {
      userId: DataTypes.UUID,
      roleId: DataTypes.UUID,
      isSoftDeleted: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "UserRole",
    }
  );

  UserRole.beforeCreate((userRole, options) => {
    userRole.id = uuidv4();
    userRole.isSoftDeleted = 0;
  });

  return UserRole;
};
