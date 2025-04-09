
import { AlignLeft } from "lucide-react";


export function NavBar() {

    return <>
        <div className="  flex  justify-between px-6 py-5 z-50 bg-transparent bg-white p-6 rounded-2xl shadow-xl  ">
            {/*  logo */}
            <div className="max-md:hidden">
                <h1 >Farm Vision</h1>
            </div>
            <div >
                <div className="flex gap-10 max-md:hidden">
                    <div>
                        <h1>Home</h1>
                    </div>
                    <div>
                        <h1>Features</h1>
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
                    <select name="" id="">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
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