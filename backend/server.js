const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const connectDB = require("./config/connectDb")
const cors = require("cors")

// Routes
const users = require("./routes/users")
const auth = require("./routes/auth")

dotenv.config() // initialize dotenv

connectDB()

// const app = express()
const app = express()
app.use('*', cors());

// Enable JSON to be sent through POST requests
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Mount routes
app.use("/api/v1/users", users);
app.use("/api/v1/refresh-access-token", auth);

app.get("/", function (req, res) {
    res.json({ name: "Sebastian" })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running on port ${PORT}`));