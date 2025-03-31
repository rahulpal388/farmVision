import { UserModel } from "@repo/db/userModal";
import { apiResponse } from "@repo/utils/apiResponse";
import { Request, Response } from "express";
import { Schema } from "mongoose";


// resister the user
export const UserResister = async (req: Request, res: Response) => {
    console.log(req.body)
    const { username, email, password } = req.body;

    try {
        // check does the user exist or not 
        const user = await UserModel.findOne({ email })

        // if user exist redirect to login page  (right now i ma redirecting to google.com)
        if (user) {
            // if not user resister the user
            console.log("user doesn't exist")
            res.status(400).json({
                message: "user already exist"
            })
            return
        }

        console.log("user exist")
        await UserModel.create({
            username,
            email,
            password
        }).then(resisterUser => {

            res.status(200).json({
                user: resisterUser
            })
        })




    } catch (error) {
        res.status(500).json({
            message: "error while sending the data "
        })

    }

}


// generate the access and refresToken and store the refresh token in DB 
const generateAccessAndRefreshToken = async function (_id: Schema.Types.ObjectId): Promise<{ accessToken: string, refreshToken: string }> {
    const user = await UserModel.findById(_id);
    const accessToken = user!.generateAccessToken()
    const refreshToken = user!.generateRefrestoken()

    user!.refresToken = refreshToken
    user!.save({ validateBeforeSave: false })

    return { accessToken, refreshToken }
}

// login the user and return the tokens
export const UserLogin = async (req: Request, res: Response) => {
    // user has been checked using the middleware [ checkuser ]

    // 1. create a jwt and refresh token
    const { _id } = req.body.user;

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(_id);

    res
        .status(200)
        .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
        .cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
        .json(new apiResponse(200, { message: "your cookie has been set" }, "sucess"))




}


export const UserLogout = async (req: Request, res: Response) => {
    // logout the user
    res.status(200).json(new apiResponse(200, { message: "user is logout" }, "sucess"))
}