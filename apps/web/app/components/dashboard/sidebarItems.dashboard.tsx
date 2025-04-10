


export function DashboardSideBarItems({ title, onClick }: {
    title: string
    onClick: () => void
}) {

    return <>
        <div>
            <div className="bg-green-200 flex items-center justify-center py-2 rounded font-medium hover:opacity-80 cursor-pointer  " onClick={onClick}>
                <span>{title}</span>
            </div>
        </div>
    </>
}