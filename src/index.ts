import express from "express";
const routers = require("./routers");

const app = express();

const PORT = process.env.PORT || 3100;

app.use("/api", routers);

app.listen(PORT, () => {
  console.log("some text");
});
