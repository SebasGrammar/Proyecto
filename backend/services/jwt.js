// const jwt = require("jwt-simple");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// const SECRET_KEY = "gR7cH9Svfj8JLe4c186Ghs48hheb3902nh5DsA";
const JWT_SECRET = "j3jr9j3rh9200"
const JWT_EXPIRE = "30d"

exports.createAccessToken = function (user) {
    console.log("this doesn't even run")
    const payload = {
        id: user._id,
        name: user.name,
        // lastname: user.lastname,
        email: user.email,
        role: user.role,
        isAdmin: false,
        createToken: moment().unix(),
        exp: moment()
            .add(3, "hours")
            .unix()
    };

    // return jwt.encode(payload, JWT_SECRET);
    return jwt.sign(payload, JWT_SECRET);
};

exports.createRefreshToken = function (user) {
    const payload = {
        id: user._id,
        exp: moment()
            .add(30, "days")
            .unix()
    };

    // return jwt.encode(payload, JWT_SECRET);
    return jwt.sign(payload, JWT_SECRET);
};

// exports.decodedToken = function (token) {
//     return jwt.decode(token, JWT_SECRET, true);
// };