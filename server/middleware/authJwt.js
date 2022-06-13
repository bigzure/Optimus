const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = await req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "Token tidak boleh kosong!",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Token tidak valid!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  let accessAllowed = ["admin"];
  let accessRole = await checkAccessRole(req.userId, accessAllowed);

  if (accessRole) {
    next();
  } else {
    res.status(401).send({
      message: "Tidak memiliki akses admin!",
    });
  }
};

const isRoot = async (req, res, next) => {
  let accessAllowed = ["root"];
  let accessRole = await checkAccessRole(req.userId, accessAllowed);

  if (accessRole) {
    next();
  } else {
    res.status(401).send({
      message: "Tidak memiliki akses root!",
    });
  }
};

const isRootOrAdmin = async (req, res, next) => {
  let accessAllowed = ["admin", "root"];
  let accessRole = await checkAccessRole(req.userId, accessAllowed);

  if (accessRole) {
    next();
  } else {
    res.status(401).send({
      message: "Tidak memiliki akses admin/ root!",
    });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isRoot,
  isRootOrAdmin,
};

module.exports = authJwt;
