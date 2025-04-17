"use client"
import { createContext, ReactNode, useState } from "react";


export interface IContext {
    accessToken: string | null,
    userId: string | null
    login: (token: string, id: string) => void,
    logout: () => void
}

export const AuthContext = createContext<IContext | null>(null);


export const AuthProvider = ({ children }: {
    children: ReactNode
}) => {
    const [accessToken, setAccessToken] = useState<IContext["accessToken"]>(null);
    const [userId, setUserId] = useState<IContext["userId"]>(null)


    const login = (token: string, id: string) => {
        setAccessToken(token);
        setUserId(id)
    }

    const logout = () => {
        setAccessToken(null);
        setUserId(null)
    }

    return <AuthContext.Provider value={{ accessToken, userId, login, logout }} >
        {children}
    </AuthContext.Provider>

}