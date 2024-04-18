const Mission = require("../models/mission.model")

const getAllMission = async (req, res) => {
    try {
        const missionGetAll = await Mission.find({})
        res.status(200).json({ success: true, data: missionGetAll })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Missions Not Found" })
    }
}

const getMission = async (req, res) => {
    try {
        const missionGet = req.params.id;
        const mission = await Mission.findOne({ _id: missionGet })
        res.status(200).json({ success: true, data: mission })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Mission not Found" })
    }
}

const createMission = async (req, res) => {
    try {
        const newMission = await Mission.create(req.body)
        res.status(201).json({ success: true, msg: "Mission Created", data: newMission })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Mission not Created" })
    }
}

const editMission = async (req, res) => {
    try {
        const missionToEdit = req.params.id;
        const mission = await Mission.findOneAndUpdate(
            { _id: missionToEdit },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        res.status(201).json({ success: true, msg: "Mission Edited Successfully", data: mission })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Mission edit Failed" })
    }
}

const deleteMission = async (req, res) => {
    try {
        const missionToDelete = req.params.id;
        await taskModel.findOneAndDelete(
            { _id: missionToDelete }
        );
        res.status(204).json({ success: true, msg: "Mission Delete" })
    }

    catch (e) {
        res.status(400).json({ success: false, msg: "Mission not Deleted" })
    }
}

module.exports = {
    getAllMission,
    getMission,
    createMission,
    editMission,
    deleteMission
}