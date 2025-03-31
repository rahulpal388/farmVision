import mongose from "mongoose"


export const connectDB = async () => {
    try {
        await mongose.connect("mongodb://localhost:27017/farmVision")
        console.log("database is connected")

    } catch (error) {
        throw new Error("db connection erorr")

    }
}