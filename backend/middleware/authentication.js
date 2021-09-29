const jwt = require("jsonwebtoken")
// const asyncHandler = require("./async")
const asyncHandler = require("./asyncHandler")
const User = require("../models/User")

// // Protect routes
// exports.protect = asyncHandler(async (req, res, next) => {
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) { // check the authorization header 
//         token = req.headers.authorization.split(" ")[1]; //token, without the Bearer bit.   
//     }
//     // else if (req.cookies.token) {
//     //     token = req.cookies.token
//     // }

//     // Make sure token exists
//     if (!token) {
//         return next("Not authorized to access this route")
//     }

//     const JWT_SECRET = "j3jr9j3rh9200"

//     try {
//         // verify token
//         const decoded = jwt.verify(token, JWT_SECRET)

//         console.log(decoded)

//         req.user = await User.findById(decoded.id)

//         next()
//     } catch (error) {
//         return next("Not authorized to access this route")
//     }
// })

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
    let token;
    // if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) { // check the authorization header 
    //     token = req.headers.authorization.split(" ")[1]; //token, without the Bearer bit.   
    // }

    // console.log(req.headers)

    // this authorization header is set from the frontend, when making requests with axios.
    // have a look at Usuarios.js
    if (req.headers.authorization) { // check the authorization header 
        token = req.headers.authorization //token, without the Bearer bit.   
    }

    // else if (req.cookies.token) {
    //     token = req.cookies.token
    // }

    // Make sure token exists
    if (!token) {
        return next("Not authorized to access this route")
    }

    const JWT_SECRET = "j3jr9j3rh9200"

    try {
        // verify token
        const decoded = jwt.verify(token, JWT_SECRET)

        console.log(decoded)

        req.user = await User.findById(decoded.id)

        next()
    } catch (error) {
        return next("Not authorized to access this route")
    }
})

// // Grant access to specific roles
// exports.authorize = (...roles) => {
//     return (req, res, next) => {
//         if (!roles.includes(req.user.role)) {
//             return next(`User role ${req.user.role} is not authorized to perform this action`)
//         }
//         next()
//     }
// }

// Grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(`User role ${req.user.role} is not authorized to perform this action`)
        }
        next()
    }
}