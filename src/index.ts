import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
const routers = require("./routers");

const app = express();

const PORT = process.env.PORT || 3100;

app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`You listen PORT ${PORT}`);
});
