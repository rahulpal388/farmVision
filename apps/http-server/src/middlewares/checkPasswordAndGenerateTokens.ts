import { UserModel } from "@repo/db/userModal";
import { NextFunction, Request, Response } from "express";
import userLogin from "@repo/zod/userLogin"
import { apiResponse } from "@repo/utils/apiResponse";


export const checkPasswordAndGenerateTokens = async (req: Request, res: Response, next: NextFunction) => {
    const userData = userLogin.safeParse(req.body)

    if (!userData) {
        res.status(401).json(new apiResponse(401, { message: "type validation failed" }, "failed"))
        return;
    }
    const user = await UserModel.findOne({ email: req.body.email })

    if (!user) {
        res.status(400).json(new apiResponse(400, { message: "user doesn't exist first signup" }, "failed"))
        return;
    }

    const verifyPassword = user.checkPassword(req.body.password);

    if (!verifyPassword) {
        res.status(401).json(new apiResponse(401, { message: "incorrect password" }, "failed"))
        return;
    }


    req.body._id = user._id;
    next();

}