const AuthService = require("../services/auth.service");
const BiodataService = require("../services/biodata.service");
const UserRoleService = require("../services/userRole.service");
const RoleService = require("../services/role.service");
const sq = require("../models").sequelize;

exports.signUp = async (req, res) => {
  const transaction = await sq.transaction();
  try {
    const data = req.body;
    const user = await AuthService.createOne(data, transaction);
    const biodata = await BiodataService.createOne(
      { userId: user.id, ...data },
      transaction
    );
    const role = await RoleService.getOneByRole(data);
    const userRole = await UserRoleService.createOne(
      { roleId: role.id, userId: user.id },
      transaction
    );
    await transaction.commit();
    return res.status(200).json({
      status: 200,
      message: "success",
      data: {
        ...user.dataValues,
        ...biodata.dataValues,
        ...userRole.dataValues,
      },
    });
  } catch (error) {
    await transaction.rollback();
    return res.status(500).send({ status: 500, message: error.message });
  }
};

exports.login = async (req, res) => {
  const data = req.body;
  const user = await AuthService.getOneByEmail(data);
  if (!user) {
    return res.status(404).send({
      status: 404,
      message: "User not found",
    });
  }
  const isPasswordValid = await AuthService.verifyPassword(data, user.password);
  if (!isPasswordValid) {
    return res.status(401).send({
      status: 401,
      message: "Invalid password",
    });
  }
  const token = await AuthService.generateToken(user);
  return res.status(200).json({
    status: 200,
    message: "success",
    data: {
      ...user.dataValues,
      token,
    },
  });
};
