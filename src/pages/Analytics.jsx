import AnalyticsCards from "@/components/analytics/AnalyticsCards";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useState } from "react";

const Analytics = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filterType, setFilterType] = useState("weekly");

  const handleDateChange = (newStartDate, newEndDate) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    console.log("Analytics date range updated:", {
      start: newStartDate?.toISOString(),
      end: newEndDate?.toISOString(),
    });
  };

  const handleFilterChange = (newFilterType) => {
    setFilterType(newFilterType);
    console.log("Analytics filter type updated:", newFilterType);
  };

  return (
    <div>
      <DashboardHeader
        onDateChange={handleDateChange}
        onFilterChange={handleFilterChange}
        startDate={startDate}
        endDate={endDate}
      />
      <AnalyticsCards
        startDate={startDate}
        endDate={endDate}
        filterType={filterType}
      />
    </div>
  );
};

export default Analytics;
