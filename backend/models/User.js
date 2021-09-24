const crypto = require("crypto")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre es un campo necesario para crear la cuenta"]
    },
    email: {
        type: String,
        required: [true, "Correo electrónico es un campo necesario para crear la cuenta"],
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "publisher"], // not admin here... it's better to set that from the database itself.
        default: "user"
    },
    password: {
        type: String,
        required: [true, "Contraseña es un campo necesario para crear la cuenta"],
        minlength: 6,
        select: false // when we get a user, it's not going to return the password from the DB.

    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) { // static method

    if (!this.isModified("password")) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt) // this = user in this case -> this in this case works like it does with classes. the this is actually bound to the instance.
}) // this mongoose middleware is going to run right before a user is saved.

// Don't forget to move this into the config file
const JWT_SECRET = "j3jr9j3rh9200"
const JWT_EXPIRE = "30d"

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () { // non-static method
    return jwt.sign({ id: this._id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRE
    }) // payload (data returned), secret, options
}

// Match user entered password to hashed password in DB
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
    // generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token & set to resetPasswordToken in model
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    // set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken

}

module.exports = mongoose.model("User", UserSchema)