

export function NavBar() {

    return <>
        <div class="flex bg-green-400  justify-between h-[60px] overflow-hidden">
            {/*  logo */}
            <div>
                <h1 class="  h-14   w-20   bg-red-200   rounded-[100%] ml-[10px] hover:  shadow-xl hover:shadow-slate-600  "></h1>
            </div>


            {/* navbar items */}
            <div class="flex    gap-32  items-center flex-wrap  ">
                <div>
                    <h1 class="   bold text-black  text-2xl  font-serif hover:animate-ping duration-5000  active:animate-bounce duration-5000   ">Home</h1>
                </div>
                <div>
                    <h1 class=" bold text-black  text-2xl  font-serif hover:border-b-2 hover:animate-ping duration-5000  active:animate-bounce duration-5000                         ">About</h1>
                </div>
                <div>
                    <h1 class=" bold text-black  text-2xl  font-serif hover:border-b-2 hover:animate-ping duration-5000  active:animate-bounce duration-5000   ">HELP</h1>
                </div>
               
                <div class="">
                   
                   {/* display the options when hover on the features */}
                   <select class="w-[100px] h-10  border-2 border-black w-[160px] " name="" id="">
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
            <div class="relative     right-24   top-[10px] max-sm:hidden max-md:hidden  ">
                <select class="  w-[100px] h-10  border-2 border-black " name="" id="">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
               
            </div>
            <div class="flex  flex-wrap">
            <h1 class=" h-10   w-12   bg-red-200 rounded-[100%] mt-2 hover:  shadow-xl hover:shadow-slate-600  "></h1>
            </div>
          
        </div>

    </>
}