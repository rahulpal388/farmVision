import mongose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { ACCESS_SECRET, REFRESH_SECRET } from "@repo/constants/constant"

export interface IUser extends Document {
    _id: Schema.Types.ObjectId
    name: string,
    email: string,
    password: string,
    refresToken: string,
    avatar: string,
    checkPassword(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefrestoken(): string;
}



const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    refresToken: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: null
    }
})

// pre middleware to encrypt password

UserSchema.pre("save", async function (next) {
    // check if the password is modified or not
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 12);
})


// method to check password

UserSchema.methods.checkPassword = async function (this: IUser, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(userPassword, this.password);

}

// method to generate access token

UserSchema.methods.generateAccessToken = function (this: IUser): string {
    return jwt.sign({
        _id: this._id
    }, ACCESS_SECRET, { expiresIn: "1d" })
}

UserSchema.methods.generateRefrestoken = function (this: IUser): string {
    return jwt.sign({
        _id: this._id
    }, REFRESH_SECRET, { expiresIn: "10d" })

}

export const UserModel = mongose.model<IUser>("User", UserSchema)