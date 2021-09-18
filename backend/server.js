const express = require("express")
const dotenv = require("dotenv")

// Routes
const users = require("./routes/users")

dotenv.config({ path: "./config/config.env" })

const app = express()

// Mount routes
app.use("/api/v1/users", users);

app.get("/", function (req, res) {
    // res.send("<h1>Hola. Bienvenidos a Express.</h1>")
    // res.send({ name: "Sebastian" })
    res.json({ name: "Sebastian" })
})

// app.get("/api/v1/users", (req, res) => {
//     res.status(200).json({
//         users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
//     })
// })

// app.get("/api/v1/users/:id", (req, res) => {
//     res.status(200).json({
//         users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
//     })
// })

// app.post("/api/v1/users", (req, res) => {
//     res.status(200).json({
//         message: "El usuario ha sido creado con éxito."
//     })
// })

// app.put("/api/v1/users/:id", (req, res) => {
//     res.status(200).json({
//         message: `El usuario con id ${req.params.id} se ha editado con éxito.`
//     })
// })

// app.delete("/api/v1/users/:id", (req, res) => {
//     res.status(200).json({
//         message: `El usuario con id ${req.params.id} se ha eliminado con éxito.`
//     })
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running on port ${PORT}`));