const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Es necesario el nombre de la orden"]
    },
    user: {
        type: mongoose.Schema.ObjectId,// user who created the order
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Order", OrderSchema)