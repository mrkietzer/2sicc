const Task = require("../models/task.model")

const getAllTasks = async (req, res) => {
    try {
        const taskGetall = await Task.find({})
        res.status(200).json({ success: true, data: taskGetall })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Tasks Not Found" })
    }
}

const getTask = async (req, res) => {
    try {
        const taskGet = req.params.id;
        const task = await Task.findOne({ _id: taskGet })
        res.status(200).json({ success: true, data: task })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Task Not Found" })
    }
}

const createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        res.status(201).json({ success: true, msg: "Task Created", data: newTask })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Task not Created" })
    }
}

const editTask = async (req, res) => {
    try {
        const taskToEdit = req.params.id;
        const task = await Task.findOneAndUpdate(
            { _id: taskToEdit },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        res.status(201).json({ success: true, msg: "Task Edit Successful", data: task })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Task Edit Failed" })
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskToDelete = req.params.id;
        await Task.findOneAndDelete(
            { _id: taskToDelete }
        );
        res.status(204).json({ success: true, msg: "Task Deleted" })
    }

    catch (e) {
        res.status(400).json({ success: true, msg: "Task Not Deleted" })
    }
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    editTask,
    deleteTask
}
