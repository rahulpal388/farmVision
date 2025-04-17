"use client"

import { ReactNode, use, useEffect, useState } from "react";
import { DashboardNavbar } from "../../../components/dashboard/navbar.dashboard";
import { DashboardSideBar } from "../../../components/dashboard/sidebar.dashboard";
import { DashboardMainPage } from "../../../components/dashboard/mainContent.dashboard";
import { useAuth } from "../../../context/useAuth";
import axios from "axios";
import { useRouter } from "next/navigation";


export type ICurrentItems = "weather" | "market_Price" | "soil_health" | "fertilizers" | "chats" | "blogs"

export default function Dashboard({ children, params }: { children: ReactNode, params: Promise<{ userId: string }> }) {
    const [currentItem, setCurretItem] = useState<ICurrentItems>("weather")
    const [isSideBar, setIsSideBar] = useState<boolean>(false)
    const id = use(params).userId
    const { userId, login } = useAuth();
    const router = useRouter()

    const getAccessToken = async () => {
        const response = await axios.post("http://localhost:8080/api/v1/user/getAccessToken", {}, {
            withCredentials: true
        })
        console.log(response.data)
        const message = response.data.message
        login(message.accessToken, message._id);
        router.push(`/dashboard/${id}`)

    }

    useEffect(() => {
        if (userId !== id) {
            getAccessToken()
        }

    }, [])


    if (userId !== id) {
        return <>
            <div className="h-screen w-screen bg-black text-white lg:text-4xl max-lg:text-xl flex justify-center items-center  ">
                page not found
            </div>
        </>
    }

    return <div className="h-screen">
        <DashboardNavbar setIsSideBar={setIsSideBar} />
        <div className="flex  h-[90vh] w-full  ">
            <div className={`${isSideBar ? "max-md:block absolute top-18 h-[90vh] w-56 z-50  " : "max-md:hidden  lg:w-64 md:w-48 "} `} >
                <DashboardSideBar setCurrentItem={setCurretItem} />
            </div>
            <div className={`${isSideBar ? " w-screen  " : "w-full"}`}>
                <DashboardMainPage currentItem={currentItem} setIsSideBar={setIsSideBar} />
            </div>
        </div>

    </div>
}