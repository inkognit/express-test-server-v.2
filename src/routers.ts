import express from "express";

const routers = express.Router();
const usersRouters = require("./modules/users/routers.user");
const carsRouters = require("./modules/cars/routers.car");
const airRouters = require("./modules/airplains/routers.airplain");

routers.use("/users", usersRouters);
routers.use("/cars", carsRouters);
routers.use("/airplain", airRouters);

module.exports = routers;
