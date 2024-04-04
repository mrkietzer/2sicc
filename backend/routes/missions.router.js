const express = require("express");
const router = express.Router();

const {
    getAllMissions,
    getMission,
    createMission,
    editMission,
    deleteMission,
    getAllMission
} = require("../controllers/missions.controller")

router.route("/").get(getAllMission);
router.route("/:id").get(getMission);
router.route("/").post(createMission);
router.route("/:id").put(editMission);
router.route("/:id").delete(deleteMission);

module.exports = router;