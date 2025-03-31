import mongose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export interface IUser extends Document {
    _id: Schema.Types.ObjectId
    username: string,
    email: string,
    password: string,
    refresToken: string,
    avatar: string,
    checkPassword(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefrestoken(): string;
}



const UserSchema = new Schema<IUser>({
    username: {
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
        type: String
    },
    avatar: {
        type: String
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
    }, "dfewh&^%^&%^5621738qwbsDDDvw21t3876*&^*&62", { expiresIn: "1d" })
}

UserSchema.methods.generateRefrestoken = function (this: IUser): string {
    return jwt.sign({
        _id: this._id
    }, "dfewh&^%^&%hewnfihd%^$&^%68726v723tv76stHXVSAG", { expiresIn: "10d" })

}

export const UserModel = mongose.model<IUser>("User", UserSchema)