"use strict";

const { v4: uuidv4 } = require("uuid");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      isSoftDeleted: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Role",
    }
  );

  Role.beforeCreate((role, options) => {
    role.id = uuidv4();
    role.isSoftDeleted = 0;
  });

  return Role;
};
