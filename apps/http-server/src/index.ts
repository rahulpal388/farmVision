import express from "express";
import { connectDB } from "@repo/db/index";
import cors from "cors"
import cookieParser from "cookie-parser"




const app = express();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(cookieParser())
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

