


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


