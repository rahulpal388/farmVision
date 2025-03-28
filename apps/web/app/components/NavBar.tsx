

export function NavBar() {

    return <>
        <div>
            {/*  logo */}
            <div>
                <h1>Farm Vision</h1>
            </div>


            {/* navbar items */}
            <div>
                <div>
                    <h1>Home</h1>
                </div>
                <div>
                    <h1>Features</h1>
                    {/* display the options when hover on the features */}
                    <select name="" id="">
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

            {/* language */}
            <div>
                <select name="" id="">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>
        </div>

    </>
}