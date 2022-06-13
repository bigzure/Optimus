const { UserRole } = require("../models");

exports.createOne = async ({ roleId, userId }, transaction) => {
  try {
    const result = await UserRole.create({ roleId, userId }, { transaction });
    return result;
  } catch (error) {
    throw error;
  }
};
