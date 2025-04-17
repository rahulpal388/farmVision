import userSignUp from "./userSignup.js";

const userLogin = userSignUp.pick({
    email: true,
    password: true
});

export default userLogin;
