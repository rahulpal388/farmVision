import { UserModel } from "@repo/db/userModal";
import { apiResponse } from "@repo/utils/apiResponse";
import { NextFunction, Request, Response } from "express";



export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, terms } = req.body;
    const user = await UserModel.create({
        name,
        email,
        password,
        terms
    })

    req.body._id = user._id;

    // it should redirect to /login endpoint
    next()
}