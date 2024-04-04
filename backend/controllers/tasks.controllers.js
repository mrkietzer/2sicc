const getAllTasks = async (req, res) => {
    try {
        res.status(200).json(allTasks)
    }

    catch (e) {
        res.status(400).send("Tasks Not Found")
    }
}

const getTask = async (req, res) => {
    try {
        res.status(200).send("Task Found")
    }

    catch (e) {
        res.status(400).send("Task Not Found")
    }
}

const createTask = async (req, res) => {
    try {
        res.status(201).send("Task Created")
    }

    catch (e) {
        res.status(400).send("Task Created")
    }
}

const editTask = async (req, res) => {
    try {
        res.status(201).send("Task Edit Successful")
    }

    catch (e) {
        res.status(400).send("Task Edit Failed")
    }
}

const deleteTask = async (req, res) => {
    try {
        res.status(204).send("Task Deleted")
    }

    catch (e) {
        res.status(400).send("Task Not Deleted")
    }
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    editTask,
    deleteTask
}
