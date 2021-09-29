const asyncHandler = require("../middleware/asyncHandler")
const User = require("../models/User")

exports.login = asyncHandler(async (req, res, next) => {
    console.log("1. ")
    const { email, password } = req.body;

    // Validate emil & password
    if (!email || !password) {
        return next('Please provide an email and password');
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password'); // retrieve password to be able to compare both the entered password and the one in the database

    if (!user) {
        // return next('Invalid credentials');
        return next('No user with the email provided has been found');
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next('Invalid credentials');
    }

    sendTokenResponse(user, 200, res); // this is what sends the data we used in Test. (result object)
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {

    console.log("IS THIS RUNNING OR NOT?")

    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token
    });
};