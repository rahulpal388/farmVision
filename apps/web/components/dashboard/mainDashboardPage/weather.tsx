


// export function Weather() {

//     return <>
//         <div>
//             Weather Page
//         </div>
//     </>
// }



import React, { useState } from 'react';
import { format } from 'date-fns';
import { Cloud, Sun, Wind, Droplets, ThermometerSun, Sprout, Plane as Plant, AlertTriangle, Check, Info } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const weatherData = [
    {
        date: new Date(),
        temp: 22,
        humidity: 65,
        windSpeed: 12,
        precipitation: 30,
        description: "Partly Cloudy",
        uvIndex: 5
    },
    {
        date: new Date(Date.now() + 86400000),
        temp: 24,
        humidity: 60,
        windSpeed: 10,
        precipitation: 20,
        description: "Sunny",
        uvIndex: 7
    },
    {
        date: new Date(Date.now() + 172800000),
        temp: 21,
        humidity: 70,
        windSpeed: 15,
        precipitation: 40,
        description: "Light Rain",
        uvIndex: 3
    },
    {
        date: new Date(Date.now() + 259200000),
        temp: 23,
        humidity: 55,
        windSpeed: 8,
        precipitation: 10,
        description: "Clear",
        uvIndex: 6
    },
    {
        date: new Date(Date.now() + 345600000),
        temp: 20,
        humidity: 75,
        windSpeed: 14,
        precipitation: 60,
        description: "Rainy",
        uvIndex: 2
    }
];

const cropGuidelines = {
    wheat: {
        idealTemp: "20-25°C",
        idealHumidity: "50-70%",
        waterNeeds: "Moderate",
        risks: ["High humidity can cause rust disease", "Strong winds can cause lodging"],
        opportunities: ["Sunny days good for grain filling", "Light rain beneficial during stem elongation"]
    },
    corn: {
        idealTemp: "20-30°C",
        idealHumidity: "60-80%",
        waterNeeds: "High",
        risks: ["Frost damage in early stages", "Drought stress during tasseling"],
        opportunities: ["Warm weather promotes rapid growth", "Regular rainfall good for cob development"]
    },
    tomatoes: {
        idealTemp: "20-27°C",
        idealHumidity: "65-75%",
        waterNeeds: "Medium-High",
        risks: ["High humidity increases disease risk", "Temperature above 35°C affects fruit set"],
        opportunities: ["Consistent moisture good for fruit development", "Moderate temperatures optimal for ripening"]
    }
};

const getWeatherAdvice = (weather: typeof weatherData[0]) => {
    const advice = [];

    if (weather.temp > 30) {
        advice.push({
            type: 'warning',
            message: 'High temperature stress: Consider additional irrigation and crop shading'
        });
    }

    if (weather.humidity > 80) {
        advice.push({
            type: 'warning',
            message: 'High disease risk: Monitor for fungal diseases and consider preventive spraying'
        });
    }

    if (weather.windSpeed > 20) {
        advice.push({
            type: 'warning',
            message: 'Strong winds: Delay spraying operations and check crop support structures'
        });
    }

    if (weather.precipitation > 50) {
        advice.push({
            type: 'info',
            message: 'Heavy rain expected: Ensure proper drainage and postpone fertilizer application'
        });
    }

    if (weather.description.includes("Sunny") && weather.temp < 28) {
        advice.push({
            type: 'success',
            message: 'Ideal conditions for harvesting and field operations'
        });
    }

    return advice;
};

export function WeatherCard({ data }: { data: typeof weatherData[0] }) {
    const [showAdvice, setShowAdvice] = useState(false);
    const advice = getWeatherAdvice(data);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{format(data.date, 'EEEE')}</h3>
            <p className="text-sm text-gray-600 mb-4">{format(data.date, 'MMM d')}</p>

            <div className="flex items-center justify-center mb-4">
                {data.description.includes("Sunny") ? (
                    <Sun className="w-12 h-12 text-yellow-500" />
                ) : data.description.includes("Rain") ? (
                    <Cloud className="w-12 h-12 text-blue-500" />
                ) : (
                    <Cloud className="w-12 h-12 text-gray-500" />
                )}
            </div>

            <div className="w-full space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <ThermometerSun className="w-4 h-4 mr-2 text-red-500" />
                        <span className="text-sm">Temperature</span>
                    </div>
                    <span className="font-medium">{data.temp}°C</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Droplets className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="text-sm">Humidity</span>
                    </div>
                    <span className="font-medium">{data.humidity}%</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Wind className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">Wind Speed</span>
                    </div>
                    <span className="font-medium">{data.windSpeed} km/h</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Cloud className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-sm">Precipitation</span>
                    </div>
                    <span className="font-medium">{data.precipitation}%</span>
                </div>

                <button
                    onClick={() => setShowAdvice(!showAdvice)}
                    className="w-full mt-4 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-md transition-colors"
                >
                    {showAdvice ? 'Hide Advice' : 'Show Farming Advice'}
                </button>

                {showAdvice && advice.length > 0 && (
                    <div className="mt-4 space-y-2">
                        {advice.map((item, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-md flex items-start space-x-2 ${item.type === 'warning' ? 'bg-yellow-50 text-yellow-700' :
                                    item.type === 'success' ? 'bg-green-50 text-green-700' :
                                        'bg-blue-50 text-blue-700'
                                    }`}
                            >
                                {item.type === 'warning' && <AlertTriangle className="w-4 h-4 flex-shrink-0" />}
                                {item.type === 'success' && <Check className="w-4 h-4 flex-shrink-0" />}
                                {item.type === 'info' && <Info className="w-4 h-4 flex-shrink-0" />}
                                <span className="text-sm">{item.message}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function CropGuide({ crop, data }: { crop: keyof typeof cropGuidelines, data: typeof cropGuidelines[keyof typeof cropGuidelines] }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Plant className="w-6 h-6 mr-2 text-green-600" />
                {crop.charAt(0).toUpperCase() + crop.slice(1)} Guidelines
            </h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-blue-700">Ideal Temperature</p>
                        <p className="text-lg text-blue-900">{data.idealTemp}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-green-700">Ideal Humidity</p>
                        <p className="text-lg text-green-900">{data.idealHumidity}</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-medium text-gray-700 mb-2">Risk Factors:</h4>
                    <ul className="space-y-2">
                        {data.risks.map((risk, index) => (
                            <li key={index} className="flex items-center text-red-600">
                                <AlertTriangle className="w-4 h-4 mr-2" />
                                <span className="text-sm">{risk}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-gray-700 mb-2">Opportunities:</h4>
                    <ul className="space-y-2">
                        {data.opportunities.map((opportunity, index) => (
                            <li key={index} className="flex items-center text-green-600">
                                <Check className="w-4 h-4 mr-2" />
                                <span className="text-sm">{opportunity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Weather() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                            <Sprout className="w-8 h-8 mr-2 text-green-600" />
                            Farmer's Weather Forecast
                        </h1>
                        <p className="text-gray-600 mt-2">5-Day Weather Forecast for Agricultural Planning</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
                        <p className="text-gray-600">Last updated: {format(new Date(), 'h:mm a')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    {weatherData.map((data, index) => (
                        <WeatherCard key={index} data={data} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {(Object.entries(cropGuidelines) as [keyof typeof cropGuidelines, typeof cropGuidelines[keyof typeof cropGuidelines]][]).map(([crop, data]) => (
                        <CropGuide key={crop} crop={crop} data={data} />
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600" />
                        Weather Alerts and Recommendations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <h3 className="font-medium text-yellow-800 mb-2">Current Alerts</h3>
                            <ul className="space-y-2">
                                {weatherData[0]!.humidity > 70 && (
                                    <li className="flex items-center text-yellow-700">
                                        <AlertTriangle className="w-4 h-4 mr-2" />
                                        <span>High humidity levels - Monitor for disease</span>
                                    </li>
                                )}
                                {weatherData[0]!.windSpeed > 10 && (
                                    <li className="flex items-center text-yellow-700">
                                        <AlertTriangle className="w-4 h-4 mr-2" />
                                        <span>Strong winds - Secure equipment and structures</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h3 className="font-medium text-green-800 mb-2">Optimal Conditions</h3>
                            <ul className="space-y-2">
                                {weatherData[0]!.temp >= 20 && weatherData[0]!.temp <= 25 && (
                                    <li className="flex items-center text-green-700">
                                        <Check className="w-4 h-4 mr-2" />
                                        <span>Ideal temperature for most crops</span>
                                    </li>
                                )}
                                {weatherData[0]!.precipitation > 0 && weatherData[0]!.precipitation < 30 && (
                                    <li className="flex items-center text-green-700">
                                        <Check className="w-4 h-4 mr-2" />
                                        <span>Light precipitation good for growth</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

