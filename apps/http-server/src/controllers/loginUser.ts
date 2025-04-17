import { UserModel } from "@repo/db/userModal";
import { apiResponse } from "@repo/utils/apiResponse";
import { NextFunction, Request, Response } from "express";



export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const _id = req.body._id;

    const user = await UserModel.findById(_id);
    if (!user) {
        res.status(401).json(new apiResponse(401, { message: "user not found" }, "failed"))
        return;
    };

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefrestoken();

    user.refresToken = refreshToken;
    await user.save({ validateBeforeSave: true })

    req.body.tokens = { accessToken, refreshToken };

    res
        .status(200)
        .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        .json(new apiResponse(200, { refreshToken, accessToken, _id: user._id }, "success"))
}