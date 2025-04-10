"use client"
import { AlignLeft } from "lucide-react";
import { useTranslation } from "react-i18next";


export function NavBar() {
    const { t, i18n } = useTranslation()
    return <>
        <div className="  flex bg-green-400 justify-between px-6 py-5 z-50 bg-transparent  p-6 rounded-2xl shadow-xl  ">
            {/*  logo */}
            <div className="max-md:hidden">
                {/* <h1 >Farm Vision</h1>
                <h1 >Farmvison</h1> */}

                <img className="h-7 w-36" src="/farmvisonLogo.png" alt="" />
            </div>


            {/* navbar items */}
            <div >
                <div className="flex gap-10 max-md:hidden">
                    <div>
                        <h1>{t('home')}</h1>
                    </div>
                    <div>
                        <h1>{t("feature")}</h1>
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
                        <h1>Profile</h1>
                    </div>
                    <div>
                        <h1>help</h1>
                    </div>
                </div>
                <div>
                    <AlignLeft className="h-8 w-8 hidden max-md:block" />
                </div>
            </div>

            {/* language */}
            <div className="flex gap-6">
                <div>
                    {/*  */}
                    <select name="" id="" onChange={(e) => { i18n.changeLanguage(`${e.currentTarget.value}`) }} >
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    <button>SignIn</button>
                </div>
            </div>
        </div>

    </>
}