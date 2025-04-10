


export function FeatureSectionCart({ isReverse, heading, description, src }: {
    isReverse: boolean,
    heading: string,
    description: string,
    src: string
}) {

    return <>
        <div className={`flex gap-6 mb-10 justify-evenly  ${isReverse && "flex-row-reverse"} items-center px-3 border bg-green-200 border-green-600 py-3  rounded shadow-xl  `}>
            <div className="w-1/2 max-sm:w-full " >
                <h1 className="text-2xl text-center font-semibold text-green-600 mb-6 ">{heading}</h1>
                <p className="text-center">{description}</p>
            </div>
            <div>
                <img className="h-56 w-56 rounded max-sm:hidden " src={src} alt="" />
            </div>
        </div>
    </>

}