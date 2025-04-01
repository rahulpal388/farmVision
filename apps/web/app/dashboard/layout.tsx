import { ReactNode } from "react";
import { DashboardNavbar } from "../../components/dashboard.navbar";



export default function Dashboard({ children }: { children: ReactNode }) {
    return <div>
        <DashboardNavbar />

        {children}
    </div>
}