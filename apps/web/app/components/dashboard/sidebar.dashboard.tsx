import React, { SetStateAction } from "react";
import { ICurrentItems } from "../../dashboard/layout";
import { DashboardSideBarItems } from "./sidebarItems.dashboard";



export function DashboardSideBar({ setCurrentItem }: {
    setCurrentItem: React.Dispatch<SetStateAction<ICurrentItems>>
}) {
    return (
        <div className="border-r-2 h-full pt-5 pb-5 px-6 bg-gradient-to-br to-green-50 from-blue-50 flex flex-col gap-4">
            <DashboardSideBarItems title="Weather" onClick={() => setCurrentItem("weather")} />
            <DashboardSideBarItems title="Market Price" onClick={() => setCurrentItem("market_Price")} />
            <DashboardSideBarItems title="Soil Health" onClick={() => setCurrentItem("soil_health")} />
            <DashboardSideBarItems title="Fertilizers" onClick={() => setCurrentItem("fertilizers")} />
            <DashboardSideBarItems title="Chats" onClick={() => setCurrentItem("chats")} />
            <DashboardSideBarItems title="Blogs" onClick={() => setCurrentItem("blogs")} />

            {/* Fixing Logout Button */}
            <div className="mt-auto">
                <button className="bg-red-500 text-white flex items-center justify-center py-2 px-5 rounded font-medium hover:bg-red-600 transition">
                    Logout
                </button>
            </div>
        </div>
    );
}
