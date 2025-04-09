

// export function HeroSection() {
//     return <>
//         <div className="relative w-full h-full  top-0 left-0 -z-50 ">
//             <div className="">
//                 {/* there will be a video that will disply here  */}
//                 {/* <img src="/heroSection_Image.jpg" alt="" /> */}
//                 <video className="opacity-85 object-cover w-full  " autoPlay muted loop src="/farm_Vision_Video.mp4"></video>

//             </div>

//             {/* this div will  be on top of the image or video use an image to get reference */}
//             <div className="absolute lg:inset-36 sm:inset-28 max-sm:inset-12 flex justify-between gap-8 bg-red-400 h-fit lg:p-10 p-6 ">
//                 <div className="w-1/2 max-md:w-full flex items-center flex-col  ">
//                     <h1 className="xl:text-5xl lg:text-4xl sm:text-[1.5rem] max-sm:text-2xl  font-medium text-center leading-tight ">
//                         EMPOWER YOUR FARM WITH AI Pick crops by market trends and connect with farmers  <br className="max-sm:hidden" /> —all in one.
//                     </h1>
//                     <button className="text-xl sm:mt-12 max-sm:mt-7  ">Join Now</button>
//                 </div>
//                 <div className="size-72 relative left-28 -top-28 bg-green-100 rounded border max-md:hidden  ">
//                     Weather
//                 </div>
//             </div>

//         </div>
//     </>
// }

export function HeroSection() {
    return (
        <div className="absolute w-full top-0 left-0 overflow-hidden -z-50 ">
            {/* Background Video */}
            <div className="w-full h-[400px] sm:h-[500px] lg:h-screen relative">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover  -z-10"
                    autoPlay
                    muted
                    loop
                    src="/farm_Vision_Video.mp4"
                ></video>

            </div>

            {/* Overlay Content */}
            <div className="absolute inset-10 flex flex-col lg:flex-row justify-between items-center gap-8 px-6 sm:px-12 lg:px-24 py-12">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center text-white text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        <span className="text-green-600">EMPOWER YOUR FARM WITH AI</span>
                        <br />
                        <span className="text-lg sm:text-xl font-normal">
                            Pick crops by market trends and connect with farmers — all in one.
                        </span>
                    </h1>
                    <button className="mt-8 px-6 py-2 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition">
                        Join Now
                    </button>
                </div>

                {/* Right Weather Card */}
                <div className="hidden lg:flex w-64 h-64 bg-green-100 text-black rounded-lg border justify-center items-center text-xl font-medium">
                    Weather
                </div>
            </div>
        </div>
    );
}

