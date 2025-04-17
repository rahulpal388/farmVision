import { useContext } from "react";
import { AuthContext, IContext } from "./authProvider";



export const useAuth = (): IContext => {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used in a authProvider")

    }

    return context
}