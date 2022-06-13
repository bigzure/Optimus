const { User, ROLES } = require("../models");

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    let user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (user) {
      res.status(400).send({
        username: ["Username sudah digunakan!"],
      });
    } else {
      let user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        res.status(400).send({
          email: ["Email sudah digunakan!"],
        });
      } else {
        next();
      }
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles && req.body.roles.length > 0) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).send({
          roles: [`Role '${req.body.roles[i]}' tidak terdaftar!`],
        });
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
