const asyncHandler = require("../middleware/asyncHandler")
const moment = require("moment")
const User = require("../models/User");
const { createRefreshToken } = require("../services/jwt");

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

    // createRefreshToken() // create refresh token right when the user logs in // put this inside sendTokenResponse next
    sendTokenResponse(user, 200, res); // this is what sends the data we used in Test. (result object)
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {

    console.log("IS THIS RUNNING OR NOT?")

    // Create token
    const token = user.getSignedJwtToken();

    // refresh token
    // const refreshToken = createRefreshToken(user) || "no token"
    const refreshToken = createRefreshToken(user)

    // console.log(createRefreshToken(user))

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true
    };


    // res.status(statusCode).cookie('token', token, options).cookie("yes", "no").json({
    //     success: true,
    //     token,
    //     yes: "no"
    // });

    res.status(statusCode).cookie('token', token, options).cookie("refreshToken", refreshToken).json({
        success: true,
        token,
        refreshToken
    });

};

// exports.createRefreshToken = function (user) {
//     const payload = {
//         id: user._id,
//         exp: moment()
//             .add(30, "days")
//             .unix()
//     };

//     return jwt.encode(payload, SECRET_KEY);
// };