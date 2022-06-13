"use strict";

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuidv4(),
          username: "super",
          email: "super@optimus.com",
          password: bcrypt.hashSync("super123", 8),
          isSoftDeleted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          username: "admin",
          email: "admin@optimus.com",
          password: bcrypt.hashSync("admin123", 8),
          isSoftDeleted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          username: "member",
          email: "member@optimus.com",
          password: bcrypt.hashSync("member123", 8),
          isSoftDeleted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
