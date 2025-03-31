

export function Button({ placeholder, type, onClick }: {
    placeholder: string,
    type: "primary" | "secondary" | "action"
    onClick: () => void
}) {

    return <>
        <button>{placeholder}</button>
    </>

}