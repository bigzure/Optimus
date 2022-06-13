const { Role } = require("../models");

exports.getOneByRole = async ({ role }) => {
  try {
    const result = await Role.findOne({
      where: { name: role },
    });
    if (!result) {
      throw new Error("Role not found");
    }
    return result;
  } catch (error) {
    throw error;
  }
};
