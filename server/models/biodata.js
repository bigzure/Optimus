"use strict";

const { v4: uuidv4 } = require("uuid");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Biodata.init(
    {
      userId: DataTypes.UUID,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      numberPhone: DataTypes.STRING,
      isSoftDeleted: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Biodata",
    }
  );

  Biodata.beforeCreate((biodata, options) => {
    biodata.id = uuidv4();
    biodata.isSoftDeleted = 0;
  });

  return Biodata;
};
