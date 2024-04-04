const express = require("express");
const router = express.Router();

const {
    getAllTasks,
    getTask,
    createTask,
    editTask,
    deleteTask
} = require("../controllers/tasks.controllers")

router.route("/").get(getAllTasks);
router.route("/:id").get(getTask);
router.route("/").post(createTask);
router.route("/:id").put(editTask);
router.route("/:id").delete(deleteTask);

module.exports = router;