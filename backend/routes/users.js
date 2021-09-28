const express = require("express")
const { getUsers, createUser } = require("../controllers/users")
const router = express.Router()
const { login } = require("../controllers/auth")
const User = require("../models/User")

// router.get("/", function (req, res) {
//     // res.send("<h1>Hola. Bienvenidos a Express.</h1>")
//     // res.send({ name: "Sebastian" })
//     res.json({ name: "Sebastian" })
// })

// router.get("/api/v1/users", (req, res) => {
//     res.status(200).json({
//         users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
//     })
// })

// router.get("/api/v1/users/:id", (req, res) => {
//     res.status(200).json({
//         users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
//     })
// })

// router.post("/api/v1/users", (req, res) => {
//     res.status(200).json({
//         message: "El usuario ha sido creado con éxito."
//     })
// })

// router.put("/api/v1/users/:id", (req, res) => {
//     res.status(200).json({
//         message: `El usuario con id ${req.params.id} se ha editado con éxito.`
//     })
// })

// router.delete("/api/v1/users/:id", (req, res) => {
//     res.status(200).json({
//         message: `El usuario con id ${req.params.id} se ha eliminado con éxito.`
//     })
// })

// second part

// router.get("/", (req, res) => {
//     res.status(200).json({
//         users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
//     })
// })

// router.get("/", getUsers)

// the above can be simplified even more by doing:
router.route("/").get(getUsers)

router.get("/:id", async (req, res) => {
    // res.status(200).json({
    //     users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
    // })
    const user = await User.findById(req.params.id)
    res.status(200).json({
        success: true,
        user
    })
})

router.post("/", (req, res) => {
    res.status(200).json({
        message: "El usuario ha sido creado con éxito."
    })
})

router.post("/login", login)
router.post("/signup", createUser)

router.put("/:id", (req, res) => {
    res.status(200).json({
        message: `El usuario con id ${req.params.id} se ha editado con éxito.`
    })
})

router.delete("/:id", (req, res) => {
    res.status(200).json({
        message: `El usuario con id ${req.params.id} se ha eliminado con éxito.`
    })
})

module.exports = router