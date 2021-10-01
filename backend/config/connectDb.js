const mongoose = require('mongoose')
// 'mongodb://localhost:27017/test'
const connectDb = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI, {
        // const conn = await mongoose.connect('mongodb://localhost:27017/Proyecto')
        console.log(process.env.PORT)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host} - ${conn.connection.name}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDb