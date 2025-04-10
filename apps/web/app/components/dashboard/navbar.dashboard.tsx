import { AlignLeft } from "lucide-react";
import { Fascinate } from "next/font/google";
import { Dispatch, SetStateAction } from "react";


export function DashboardNavbar({ setIsSideBar }: {
    setIsSideBar: Dispatch<SetStateAction<boolean>>
}) {

    return <>
        <div className="h-[10vh] px-6 py-6 flex justify-between items-center border-b-2 ">
            {/* logo */}
            <div >
                <p className="font-bold italic  max-md:hidden "> FarmVision</p>
                <AlignLeft className={`hidden max-md:block hover:cursor-pointer`} onClick={() => { setIsSideBar(prev => !prev) }} />
            </div>
            <div>
                {/* profile */}
                <div className="h-10 w-10 rounded-full bg-green-300 flex items-center justify-center  ">
                    <p className="text-green-700">R</p>
                </div>
            </div>
        </div >
    </>
}