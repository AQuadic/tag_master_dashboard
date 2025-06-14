import ActiveEmployee from "@/components/dashboard/ActiveEmployee"
import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard"
import DashboardChart from "@/components/dashboard/DashboardChart"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import MyProducts from "@/components/dashboard/MyProducts"

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <AnalyticsDashboard />
            <div className="flex md:flex-row flex-col justify-between mt-10">
                <div>
                    <DashboardChart />
                    <MyProducts />
                </div>
                <ActiveEmployee />
            </div>
        </div>
    )
}

export default Dashboard
