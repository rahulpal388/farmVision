
"use client"

import { ReactNode, useState } from "react";
import { DashboardNavbar } from "../../components/dashboard/navbar.dashboard";
import { DashboardSideBar } from "../../components/dashboard/sidebar.dashboard";
import { DashboardMainPage } from "../../components/dashboard/mainContent.dashboard";


export type ICurrentItems = "weather" | "market_Price" | "soil_health" | "fertilizers" | "chats" | "blogs"

export default function Dashboard({ children }: { children: ReactNode }) {

    const [currentItem, setCurretItem] = useState<ICurrentItems>("weather")
    const [isSideBar, setIsSideBar] = useState<boolean>(false)

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