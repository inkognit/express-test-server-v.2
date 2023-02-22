import { getAirplan, getAirplans, postAirplain } from "./repository.airplain";
import express from "express";

const routers = express.Router();

routers.post("/", async (req, res) => {
  const { body } = req;
  if (!body) return res.sendStatus(400);
  const response = await postAirplain(body);
  return res.send(response);
});

routers.get("/", (req, res) => {
  const response = getAirplans();
  res.send(response);
});
routers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await getAirplan(+id);
  res.send(response);
});

module.exports = routers;
