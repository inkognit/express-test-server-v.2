import express from "express";

const routers = express.Router();
const usersRouters = require("./modules/users/routers.user");
const carsRouters = require("./modules/cars/routers.car");

routers.use("/users", usersRouters);
routers.use("/cars", carsRouters);

module.exports = routers;
