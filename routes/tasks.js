const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  modifyTask,
  getTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).patch(modifyTask);

module.exports = router;
