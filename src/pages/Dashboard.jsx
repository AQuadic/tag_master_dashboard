import ActiveEmployee from "@/components/dashboard/ActiveEmployee";
import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MyProducts from "@/components/dashboard/MyProducts";
import { useState } from "react";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filterType, setFilterType] = useState("weekly");

  const handleDateChange = (newStartDate, newEndDate) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    console.log("Date range updated:", {
      start: newStartDate?.toISOString(),
      end: newEndDate?.toISOString(),
    });
  };

  const handleFilterChange = (newFilterType) => {
    setFilterType(newFilterType);
    console.log("Filter type updated:", newFilterType);
  };

  return (
    <div>
      <DashboardHeader
        onDateChange={handleDateChange}
        onFilterChange={handleFilterChange}
        startDate={startDate}
        endDate={endDate}
      />
      <AnalyticsDashboard startDate={startDate} endDate={endDate} />
      <div className="flex md:flex-row flex-col justify-between mt-10">
        <div>
          <DashboardChart
            startDate={startDate}
            endDate={endDate}
            filterType={filterType}
          />
          <MyProducts />
        </div>
        <ActiveEmployee />
      </div>
    </div>
  );
};

export default Dashboard;
