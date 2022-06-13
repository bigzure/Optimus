const auth = require("express").Router();

const controller = require("../controllers/auth.controller");
const { verifySignUp, authJwt } = require("../middleware");

auth.post(
  "/register",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  controller.signUp
);

auth.post("/login", controller.login);

module.exports = auth;
