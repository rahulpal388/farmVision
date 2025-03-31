import express from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { connectDB } from "@repo/db/index";
import * as dotenv from "dotenv"
import { UserModel } from "@repo/db/userModal"

dotenv.config({
    path: "./env"
})

const app = express();
app.use(express.json())
// wait to connect to database
connectDB().then(() => {
    app.listen(8080, () => {
        console.log("listening on port 8080...........")
    })
})


// router import 
import userRouter from "./routes/user.router.js"


// routers
app.use("/api/v1/user", userRouter)


