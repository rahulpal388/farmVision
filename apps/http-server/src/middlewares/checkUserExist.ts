import { NextFunction, Request, Response } from "express";
import userSignUp from "@repo/zod/userSignUp"
import { apiResponse } from "@repo/utils/apiResponse";
import { UserModel } from "@repo/db/userModal";



export const checkUserExist = async (req: Request, res: Response, next: NextFunction) => {
    const userData = userSignUp.safeParse(req.body);

    if (!userData.success) {
        res.status(401).json(new apiResponse(401, { message: "type validation failed" }, "failed"))
        return;
    }

    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
        next();
        return;
    } else {
        res.status(401).json(new apiResponse(401, { message: "user already exist" }, "failed"))
    }

}