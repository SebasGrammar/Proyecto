exports.getUsers = (req, res, next) => {
    res.status(200).json({
        users: ["Laura", "Juan", "Wilmar", "Diego", "Sebastian"]
    })
}