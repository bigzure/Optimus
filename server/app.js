require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes"));
app.get("/", (req, res) => {
  res.send({ status: "ok", message: "App running ..." });
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
