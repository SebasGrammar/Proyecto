const asyncHandler = require("../middleware/asyncHandler")
const User = require("../models/User")

exports.getUsers = (req, res, next) => {
    res.status(200).json({
        users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
    })
}

exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        data: user
    });
});