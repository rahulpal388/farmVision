import { Mic } from "lucide-react";



const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const upDistricts = [
    "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha (J.P. Nagar)", "Auraiya",
    "Ayodhya (Faizabad)", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur",
    "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi (Sant Ravidas Nagar)", "Bijnor",
    "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah",
    "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar (Noida)", "Ghaziabad",
    "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras (Mahamaya Nagar)",
    "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj",
    "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj",
    "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad",
    "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj (Allahabad)", "Rae Bareli",
    "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli",
    "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
];



export function MarketPrice() {

    const today = new Date().toISOString().split("T")[0];
    return <>
        <div className=" w-full md:pr-16 ">
            {/* search bar */}
            <div className="flex mt-12  md:justify-end max-md:justify-center   ">
                <div className="flex">
                    <div className="flex items-center justify-center border-l-2 border-t-2 border-b-2 px-2 py-1 gap-4 rounded-l-lg">
                        <input className="outline-none max-sm:w-36 " type="text" id="" placeholder="Search...." />
                    </div>
                    <button className="bg-green-300 rounded-r-lg px-1 ">Submit</button>
                    <button className="bg-green-300 p-1 rounded-full ml-4 flex justify-center items-center "><Mic /> </button>
                </div>
            </div>

            {/* select the area or state */}
            <div className="flex gap-2 px-12  justify-evenly items-center flex-wrap  mt-8 ">
                <div>
                    <select className="outline-none border border-black rounded p-1 ">
                        {states.map((x) => <option value={x}>{x}</option>)}
                    </select>
                </div>
                <div>
                    <select className=" outline-none border border-black rounded p-1 w-48">
                        {upDistricts.map((x) => <option value={x}>{x}</option>)}
                    </select>
                </div>
                <div className="border border-black rounded p-1">
                    <input type="date" defaultValue={today} />
                </div>
            </div>
            <div className="mt-12  flex gap-2 flex-wrap justify-center ">
                <Commodities />
                <Commodities />
                <Commodities />
                <Commodities />
                <Commodities />
                <Commodities />
                <Commodities />
            </div>

        </div>
    </>
}

// function Commodities() {
//     const today = new Date().toISOString().split("T")[0];

//     return <div className="shadow-[0_20px_50px_rgba(34,_197,_94,_0.2)]
//   rounded p-2  ">
//         <div className="flex justify-center ">
//             <h1 className="text-xl font-bold">Tamato</h1>
//         </div>
//         {/* <div className="">
//             <table className="">
//                 <thead className="border flex gap-3 text-sm justify-center  border-b-2 ">
//                     <tr className="flex flex-col items-center border-r-2 py-2 px-1">
//                         Price in Rs
//                         <tbody className="flex gap-3 border-t-2 ">
//                             <tr>Min</tr>
//                             <tr>Max</tr>
//                             <tr>Common</tr>
//                         </tbody>
//                     </tr>
//                     <tr className="border-r-2 py-2 px-1">Commodity Arrivals</tr>
//                     <tr className="border-r-2 py-2 px-1">Commodity Traded</tr>
//                     <tr className="border-r-2 py-2 px-1">Unit</tr>
//                     <tr className=" py-2 px-1">Date</tr>
//                 </thead>
//             </table>
//         </div> */}

//         <div className="flex flex-col gap-2 mt-2">
//             {/* Price */}
//             <div>
//                 <h1 className="text-xl font-medium">Price</h1>
//                 <div className="flex gap-3">
//                     <span>Max : 1200</span>
//                     <span>Min : 120</span>
//                     <span>Common : 120</span>
//                 </div>
//             </div>
//             <div>
//                 <h1 ><span className="text-xl font-medium">Commodity Arrivals :</span> 59</h1>
//             </div>
//             <div>
//                 <h1 ><span className="text-xl font-medium">Commodity Traded : </span>59</h1>
//             </div>
//             <div className="flex justify-between items-center">
//                 <h1><span className="text-xl font-medium">Unit :</span> Qui</h1>
//                 <p className="text-xs">{today}</p>
//             </div>
//         </div>


//     </div>
// }

function Commodities() {
    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 border border-green-200">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-green-700">Tomato</h1>
                <p className="text-sm text-gray-500">{today}</p>
            </div>

            {/* Price Section */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-700">Price</h2>
                <div className="flex justify-between items-center mt-2 text-sm gap-1 ">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md">Max: ₹1200</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md">Min: ₹120</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md">Common: ₹120</span>
                </div>
            </div>

            {/* Commodity Details */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-700">Market Info</h2>
                <div className="mt-2 text-gray-600">
                    <p><span className="font-medium text-green-700">Arrivals:</span> 59</p>
                    <p><span className="font-medium text-green-700">Traded:</span> 59</p>
                    <p><span className="font-medium text-green-700">Unit:</span> Qui</p>
                </div>
            </div>
        </div>
    );
}

export default Commodities;
