

const features = [
    {
        title: "Crop Suggestion",
        description: "Find the best crops for your farm using AI. Get personalized suggestions based on weather, soil, and market trends"
    },
    {
        title: "Connect with Farmers",
        description: "Join a community to share knowledge, seek advice, and collaborate with fellow farmers"
    },
    {
        title: "Trade with Farmers",
        description: "Buy, sell, and trade crops, seeds, and farming essentials directly with other farmers."
    },
    {
        title: "Soil Health",
        description: "Track soil moisture, pH, and nutrients to improve fertility and boost crop yield."
    },
    {
        title: " Fertilizer Tips",
        description: "Get personalized fertilizer recommendations to enhance soil health and ensure eco-friendly farming."
    }
]



export function Features() {


    return <>
        <div>
            <div>
                <h1>Features</h1>
            </div>
            <div>
                {/* to change the feature card function   */}
                {features.map((x, i) => <FeaturesCards key={i} title={x.title} description={x.description} />)}
            </div>
        </div>
    </>
}




function FeaturesCards({ title, description }: {
    title: String,
    description: String
}) {

    return <div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
}