import express from "express";

import {
  createTask,
  getAllTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controller/task-controller.js";

import {
  loginUser,
  singupUser,
  logoutUser,
} from "../controller/user-controller.js";

import {
  authenticateToken,
  createNewToken,
} from "../controller/jwt-controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", singupUser);
router.post("/logout", logoutUser);

router.post("/token", createNewToken);

router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

router.get("/task/:id", getTask);
router.get("/tasks", getAllTask);

export default router;
