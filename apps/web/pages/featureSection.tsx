import { FeatureSectionCart } from "../components/featureSectionCart";


const farmVisionFeatures = [
    {
        heading: "Weather",
        description: "Get real-time weather updates and accurate forecasts tailored to your farm. Receive alerts for extreme weather conditions and advice on optimal times for planting, irrigation, and harvesting. Stay ahead of the weather to make better farming decisions.",
        src: "/farmer_weather.png"
    },
    {
        heading: "Chat with Farmers",
        description: "Connect with fellow farmers to exchange knowledge, share experiences, and ask for advice. Build a network and support community-driven farming growth.",
        src: "/farmer_weather.png" // Same image, or use a different one for chat
    },
    {
        heading: "Trade with Farmers",
        description: "Buy and sell farm produce directly with other farmers. Access better deals and expand your market reach with a simple and secure trading platform.",
        src: "/farmer_weather.png" // Same image, or use a different one for trade
    },
    {
        heading: "Soil Health",
        description: "Monitor the health of your soil and receive actionable insights to improve its quality. Make informed decisions on fertilizers and irrigation for better yields.",
        src: "/farmer_weather.png" // Same image, or use a different one for soil health
    },
    {
        heading: "Fertilizers",
        description: "Get expert advice on choosing the right fertilizers for your crops. Learn how to use them effectively to improve crop growth and sustainability.",
        src: "/farmer_weather.png" // Same image, or use a different one for fertilizers
    }
];



export function FeatureSection() {
    return <>

        <div className=" bg-green-100  px-6 sm:px-12 lg:px-24 pt-10 pb-10  ">
            <div className="mb-10">
                <h1 className="text-3xl  text-center  ">Features </h1>
            </div>
            <div>
                {farmVisionFeatures.map((x, i) => (
                    <FeatureSectionCart
                        key={i}
                        isReverse={((i + 1) % 2) === 0}
                        heading={x.heading}
                        description={x.description}
                        src={x.src}
                    />
                ))}

            </div>

        </div>
    </>
}
