import express, { Router } from "express";
import { checkUserExist } from "../middlewares/checkUserExist.js";
import { createUser } from "../controllers/createUser.js";
import { checkPasswordAndGenerateTokens } from "../middlewares/checkPasswordAndGenerateTokens.js";
import { loginUser } from "../controllers/loginUser.js";
import { getWeather } from "../controllers/getWeather.js";
import { getAccessToken } from "../controllers/getAccessToken.js";

const router: Router = express.Router()


router.post("/signup", checkUserExist, createUser, loginUser);
router.post("/login", checkPasswordAndGenerateTokens, loginUser)
router.get("/weather", getWeather)
router.post("/getAccessToken", getAccessToken)

export default router


