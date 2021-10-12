const express = require("express")
const { getUsers, createUser } = require("../controllers/users")
const router = express.Router()
const { login } = require("../controllers/auth")
const User = require("../models/User")

const { protect, authorize } = require("../middleware/authentication")

// router.route("/").get(getUsers)
// router.route("/").get(protect, getUsers)
// router.route("/").get(protect, authorize("publisher"), getUsers)
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

router.put("/:id", protect, authorize("user", "publisher"), async (req, res) => {

    // this user prop is set in the protect middleware.
    console.log(req.user)

    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true
    });

    // res.status(200).json({
    //     success: true,
    //     data: user
    // });

    res.status(200).json({
        message: `El usuario con id ${req.params.id} se ha editado con éxito.`
    })
})

router.delete("/:id", protect, authorize("admin"), async (req, res) => {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: `El usuario con id ${req.params.id} se ha eliminado con éxito.`
    })
})

module.exports = router