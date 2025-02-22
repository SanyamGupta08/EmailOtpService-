const express = require("express");
const { validateOtp, createOtp, deleteOtp } = require("../controller/index");
const router = express.Router();
const validateService = require("../middleware/validateService");
router.get("/validateOtp", validateService, validateOtp);
router.post("/createOtp", validateService, createOtp);
router.delete("/deleteOtp", validateService, deleteOtp);

module.exports = router;
