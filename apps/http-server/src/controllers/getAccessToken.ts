import { REFRESH_SECRET } from "@repo/constants/constant";
import { UserModel } from "@repo/db/userModal";
import { apiResponse } from "@repo/utils/apiResponse";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"



export async function getAccessToken(req: Request, res: Response,) {

    const cookie = req.headers.cookie?.split(";");
    let token: string | undefined = undefined;

    cookie?.forEach(x => {

        const [key, value] = x.trim().split("=")
        if (key === "refreshToken") {
            token = value;
        }
    })


    if (!token) {
        res.status(401).json(new apiResponse(401, { message: "user not logged in" }, "failed"))
        return;
    }
    console.log(token)

    const decoded = jwt.verify(token, REFRESH_SECRET)
    console.log(decoded)
    if (typeof decoded === "string") {
        res.status(401).json(new apiResponse(401, { message: "user not logged in" }, "failed"))
        return;
    }

    const user = await UserModel.findById(decoded._id);

    if (!user) {
        res.status(401).json(new apiResponse(401, { message: "user not logged in" }, "failed"))
        return;
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefrestoken();

    user.refresToken = refreshToken;
    user.save({ validateBeforeSave: false })

    res
        .status(200)
        .json(new apiResponse(200, { refreshToken, accessToken, _id: user._id }, "succes"))

}