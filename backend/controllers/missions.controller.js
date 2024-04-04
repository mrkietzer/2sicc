const getAllMission = async (req, res) => {
    try {
        res.status(200).json(allMissions)
    }

    catch (e) {
        res.status(400).send("Missions not Found")
    }
}

const getMission = async (req, res) => {
    try {
        res.status(200).send("Mission not Found")
    }

    catch (e) {
        res.status(400).send("Mission not Found")
    }
}

const createMission = async (req, res) => {
    try {
        res.status(201).send("Mission Created")
    }

    catch (e) {
        res.status(400).send("Mission not Created")
    }
}

const editMission = async (req, res) => {
    try {
        res.status(201).send("Mission Edited Successfully")
    }

    catch (e) {
        res.status(400).send("Mission edit Failed")
    }
}

const deleteMission = async (req, res) => {
    try {
        res.status(204).send("Mission Deleted")
    }

    catch (e) {
        res.status(400).send("Mission not Deleted")
    }
}

module.exports = {
    getAllMission,
    getMission,
    createMission,
    editMission,
    deleteMission
}