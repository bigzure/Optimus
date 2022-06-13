const routes = require("express").Router();

routes.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

routes.use("/auth", require("./auth"));

module.exports = routes;
