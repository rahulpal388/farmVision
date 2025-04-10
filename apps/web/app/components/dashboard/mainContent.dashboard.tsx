import { Dispatch, SetStateAction } from "react"
import { ICurrentItems } from "../../dashboard/layout"
import { Weather } from "./mainDashboardPage/weather"
import { SoilHealth } from "./mainDashboardPage/soilHealth"
import { Chats } from "./mainDashboardPage/chats"
import { Fertilizers } from "./mainDashboardPage/fertilizers"
import { MarketPrice } from "./mainDashboardPage/marketPrice"
import { Blogs } from "./mainDashboardPage/blogs."



export function DashboardMainPage({ currentItem, setIsSideBar }: {
    currentItem: ICurrentItems,
    setIsSideBar: Dispatch<SetStateAction<boolean>>
}) {
    return <>
        <div className="w-full  pb-5 h-full flex  overflow-y-scroll " onClick={() => { setIsSideBar(false) }} >
            {currentItem === "weather" && <Weather />}
            {currentItem === "soil_health" && <SoilHealth />}
            {currentItem === "chats" && <Chats />}
            {currentItem === "fertilizers" && <Fertilizers />}
            {currentItem === "market_Price" && <MarketPrice />}
            {currentItem === "blogs" && <Blogs />}
        </div>
    </>

}