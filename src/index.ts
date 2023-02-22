import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from "express";

dotenv.config();
const routers = require("./routers");

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3100;

app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`You listen PORT ${PORT}`);
});
