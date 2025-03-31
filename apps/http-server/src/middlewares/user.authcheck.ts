import { apiResponse } from "@repo/utils/apiResponse";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export const isUserAuthenticated = async function (req: Request, res: Response, next: NextFunction) {
    const token = req.headers.cookie?.split("; ")[0]?.split("=")[1]

    // if the cookie doesn'thave any token return 
    if (!token) {
        res.status(401).json(new apiResponse(401, {
            message: "no token found login first"
        }, "failed"))
        return
    }

    const decodedToken = jwt.verify(token, "dfewh&^%^&%^5621738qwbsDDDvw21t3876*&^*&62");

    if (!decodedToken || typeof decodedToken === "string") {
        res.status(400).json(new apiResponse(400, { message: "invalid token" }, "failed"))
        return
    } else {

        // if the decodedToken 
        req.body._id = decodedToken._id
        next()
    }

}