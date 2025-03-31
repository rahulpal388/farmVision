import { UserModel, IUser } from "@repo/db/userModal";
import { NextFunction, Request, Response } from "express";
import { apiResponse } from "@repo/utils/apiResponse";


export const userExits = async (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({ email });

        // if user does not exit it return
        if (!user) {
            res.status(401).json(new apiResponse(404, {
                message: "user doesn't exist signup first"
            }, "sucess"))
        } else {
            // if user exist check password the call the next function
            const isCorrectPassword = await user.checkPassword(password)
            console.log(`is password correct ${isCorrectPassword}`)
            if (!isCorrectPassword) {
                res.status(401).json(new apiResponse(401, {
                    message: "invalid credientals"
                }, "failed"))
                return
            }
            req.body.user = user;
            next();

        }


    } catch (error) {
        res.status(500).json(new apiResponse(500, {
            message: `server error : ${error}`
        }, "failed"))

    }



}