"use client"
import { Button } from "@repo/ui/button";
import { AlignLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export function NavBar() {
    const { t, i18n } = useTranslation()
    const router = useRouter()
    return <>
        <div className="  flex bg-green-400 justify-between items-center px-6 py-5 z-50 bg-transparent  p-6 rounded-2xl shadow-xl  ">
            {/*  logo */}
            <div className="max-md:hidden">
                <img className="h-7 w-36" src="/farmvisonLogo.png" alt="" />
            </div>


            {/* navbar items */}
            <div >
                <div className="flex gap-10  max-md:hidden">
                    <div>
                        <h1>{t('navBar.home')}</h1>
                    </div>
                    <div>
                        <h1>{t("navBar.feature")}</h1>
                        {/* display the options when hover on the features */}
                        <select name="" id="" className="hidden">
                            <option value="weather">Weather</option>
                            <option value="soil">Soil Health</option>
                            <option value="fertilizer">Fertilizer Tips</option>
                            <option value="crop">Check Crop</option>
                            <option value="chats">Farmer Chats</option>
                            <option value="trade">Farmer Trade</option>
                            <option value="alerts">Alerts</option>
                        </select>
                    </div>
                    <div>
                        <h1>{t('navBar.profile')}</h1>
                    </div>
                    <div>
                        <h1>{t('navBar.help')}</h1>
                    </div>
                </div>
                <div>
                    <AlignLeft className="h-8 w-8 hidden max-md:block" />
                </div>
            </div>

            {/* language */}
            <div className="flex gap-6 items-center ">
                <div>
                    {/*  */}
                    <select className="outline-none px-4 border border-black rounded bg-[#c2f1c1]  " onChange={(e) => { i18n.changeLanguage(`${e.currentTarget.value}`) }} >
                        <option value="en"  >English</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
                <div>
                    <Button placeholder={t('navBar.signIn')} type="secondary" onClick={() => {
                        console.log("sigin in")
                        router.push('/signup')
                    }} />
                </div>
            </div>
        </div>

    </>
}