"use strict";

const { v4: uuidv4 } = require("uuid");
const { Role, User } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = await Role.findAll();
    const users = await User.findAll();

    await queryInterface.bulkInsert(
      "UserRoles",
      [
        {
          id: uuidv4(),
          roleId: roles[0].id,
          userId: users[0].id,
          isSoftDeleted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          roleId: roles[1].id,
          userId: users[1].id,
          isSoftDeleted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          roleId: roles[2].id,
          userId: users[2].id,
          isSoftDeleted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserRoles", null, {});
  },
};
