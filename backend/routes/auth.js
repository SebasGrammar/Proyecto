const express = require("express");
const AuthController = require("../controllers/test");

const router = express.Router();

router.post("/", AuthController.refreshAccessToken);

module.exports = router;