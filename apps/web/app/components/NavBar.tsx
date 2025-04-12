

export function NavBar() {

    return <>
        <div className="flex bg-green-400  justify-between h-[60px] overflow-hidden cursor-pointer">
            {/*  logo */}
            <div>
                <h1 className="  h-14   w-20   bg-red-200   rounded-[100%] ml-[10px] hover:  shadow-xl hover:shadow-slate-600  "><img  className="rounded-[100%] w-20 h-14" src="https://tse2.mm.bing.net/th?id=OIP.Im2zLwiberbfh7xvx--Y-wHaHa&pid=Api&P=0&h=180"></img> </h1>
            </div>


            {/* navbar items */}
            <div className="flex    gap-32  items-center flex-wrap  ">
                <div>
                    <h1 className="   bold text-black  text-2xl  font-serif hover:animate-ping duration-5000  active:animate-bounce duration-5000">Home</h1>
                </div>
                <div>
                    <h1 className=" bold text-black  text-2xl  font-serif hover:border-b-2 hover:animate-ping duration-5000  active:animate-bounce duration-5000                         ">About</h1>
                </div>
                <div>
                    <h1 className=" bold text-black  text-2xl  font-serif hover:border-b-2 hover:animate-ping duration-5000  active:animate-bounce duration-5000   ">HELP</h1>
                </div>
               
                <div className="">
                   
                   {/* display the options when hover on the features */}
                   <select className="w-[100px] h-10  border-2 border-black  " name="" id="">
                       <option value="weather">Weather</option>
                       <option value="soil">Soil Health</option>
                       <option value="fertilizer">Fertilizer Tips</option>
                       <option value="crop">Check Crop</option>
                       <option value="chats">Farmer Chats</option>
                       <option value="trade">Farmer Trade</option>
                       <option value="alerts">Alerts</option>
                   </select>
               </div>
            </div>

            {/* language */}
            <div className="relative     right-24   top-[10px] max-sm:hidden max-md:hidden  ">
                <select className="  w-[100px] h-10  border-2 border-black " name="" id="">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
               
            </div>
            <div className="flex  flex-wrap">
            <h1 className=" h-10   w-12   bg-red-200 rounded-[100%] mt-2 hover:  shadow-xl hover:shadow-slate-600  "></h1>
            </div>
          
        </div>
        <div className="h-[500px] w-[100%] bg-lime-400">
            <div className="h-[300px] w-[300px] bg-red-400 flex justify-between">
                <div className="bg-white border-2 border-black w-16 h-12    "><button>JOIN</button></div>
                <div  className="bg-white border-2 border-black  w-16 h-12  "    ><button>Sign In</button></div> 
            </div>
            </div>

    </>
}