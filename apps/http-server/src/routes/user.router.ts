import express, { Router } from "express";
import { UserLogin, UserLogout, UserResister } from "../controllers/user.controlles.js";
import { userExits } from "../middlewares/checkuser.middleware.js";
import { isUserAuthenticated } from "../middlewares/user.authcheck.js";

const router: Router = express.Router()

router.route("/register").post(UserResister)
router.route("/login").get(userExits, UserLogin)
router.route("/logout").post(isUserAuthenticated, UserLogout)


export default router