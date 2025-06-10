import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import MyProducts from "@/components/dashboard/MyProducts"

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <AnalyticsDashboard />
            <MyProducts />
        </div>
    )
}

export default Dashboard
