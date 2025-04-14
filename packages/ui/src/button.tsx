


const ButtonStyle = {
    default: " px-4 py-2 rounded font-semibold hover:ui-opacity-70  ",
    primary: " ui-bg-gradient-to-t ui-from-[#228b22] ui-to-[#207521]  ",
    secondary: "bg-green-300  ",
    action: "bg-green-400"
}




export function Button({ placeholder, type, onClick, className }: {
    placeholder: string,
    type: "primary" | "secondary" | "action"
    onClick: () => void,
    className?: string
}) {

    return <>
        <button className={`${ButtonStyle.default} ${ButtonStyle[type]} ${className}  `} onClick={onClick} >{placeholder}</button >
    </>

}