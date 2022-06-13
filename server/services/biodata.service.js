const { Biodata } = require("../models");

exports.createOne = async (
  { userId, firstName, lastName, numberPhone },
  transaction
) => {
  try {
    const result = await Biodata.create(
      { userId, firstName, lastName, numberPhone },
      { transaction }
    );
    return result;
  } catch (error) {
    throw error;
  }
};
