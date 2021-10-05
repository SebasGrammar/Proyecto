const express = require("express");
// const AuthController = require("../controllers/test");
const { refreshAccessToken } = require("../controllers/test");

const router = express.Router();

router.post("/", refreshAccessToken);

module.exports = router;