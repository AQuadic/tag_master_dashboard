import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import Calender from "../icons/dashboard/Calender";
import Filter from "../icons/dashboard/Filter";

const DashboardHeader = ({
  onDateChange,
  startDate,
  endDate,
  onFilterChange,
}) => {
  const [activeFilter, setActiveFilter] = useState("Weekly");
  const timeFilters = ["Weekly", "Monthly", "Annually"];
  const [isOpen, setIsOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);
  const [selectingDate, setSelectingDate] = useState("start"); // "start" or "end"

  // Set initial weekly filter on component mount
  React.useEffect(() => {
    if (onDateChange && !startDate && !endDate) {
      const today = new Date();
      const weeklyStartDate = new Date(
        today.getTime() - 7 * 24 * 60 * 60 * 1000
      );
      onDateChange(weeklyStartDate, today);
      if (onFilterChange) {
        onFilterChange("weekly");
      }
    }
  }, [onDateChange, onFilterChange, startDate, endDate]);

  const formatDate = (date) => {
    if (!date) return "Select Date";
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleDateSelect = (selectedDate) => {
    if (selectingDate === "start") {
      setTempStartDate(selectedDate);
      // If end date is before start date, clear it
      if (tempEndDate && selectedDate > tempEndDate) {
        setTempEndDate(null);
      }
    } else {
      // Only set end date if it's after start date
      if (tempStartDate && selectedDate >= tempStartDate) {
        setTempEndDate(selectedDate);
      } else if (!tempStartDate) {
        setTempEndDate(selectedDate);
      }
    }
  };

  const handleApplyFilter = () => {
    if (tempStartDate && tempEndDate && onDateChange) {
      onDateChange(tempStartDate, tempEndDate);
      if (onFilterChange) {
        onFilterChange("custom");
      }
      setIsOpen(false);
    }
  };

  const handleTimeFilterClick = (filter) => {
    setActiveFilter(filter);
    const today = new Date();
    let calculatedStartDate,
      calculatedEndDate = today;

    switch (filter) {
      case "Weekly":
        calculatedStartDate = new Date(
          today.getTime() - 7 * 24 * 60 * 60 * 1000
        );
        break;
      case "Monthly":
        calculatedStartDate = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          today.getDate()
        );
        break;
      case "Annually":
        // Show current year plus past 2 years (3 years total) for better performance
        calculatedStartDate = new Date(
          today.getFullYear() - 2,
          0, // January
          1 // 1st day
        );
        calculatedEndDate = new Date(
          today.getFullYear(),
          11, // December
          31 // Last day
        );
        break;
      default:
        calculatedStartDate = today;
    }

    if (onDateChange) {
      onDateChange(calculatedStartDate, calculatedEndDate);
    }
    if (onFilterChange) {
      onFilterChange(filter.toLowerCase());
    }
  };

  return (
    <section>
      <div className="flex flex-wrap items-center gap-5">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger onClick={() => setIsOpen(true)}>
            <div className="md:py-3 md:px-6 p-1 border-[0.88px] border-[#000000] rounded-[7px] flex items-center justify-center gap-3">
              <Filter />
              <p className="text-[#000000] md:text-[21.02px] text-base font-medium">
                filter
              </p>
            </div>
          </DialogTrigger>
          <DialogContent className="md:w-[410px] w-full">
            <DialogHeader>
              <DialogTitle className="text-[#002F10] texet-[22px] font-semibold">
                Filter by Date Range
              </DialogTitle>
              <DialogDescription>
                <div className="flex items-center justify-between mt-6 gap-3">
                  <div
                    className={`px-5 py-3 border border-[#007EC1] bg-[#F6F6F6] rounded-[12px] flex items-center gap-2 cursor-pointer ${
                      selectingDate === "start" ? "ring-2 ring-[#007EC1]" : ""
                    }`}
                    onClick={() => setSelectingDate("start")}
                  >
                    <Calender />
                    <p className="text-[#007EC1] text-sm font-medium">
                      {formatDate(tempStartDate)}
                    </p>
                  </div>
                  <span className="text-gray-500">to</span>
                  <div
                    className={`px-5 py-3 border border-[#007EC1] bg-[#F6F6F6] rounded-[12px] flex items-center gap-2 cursor-pointer ${
                      selectingDate === "end" ? "ring-2 ring-[#007EC1]" : ""
                    }`}
                    onClick={() => setSelectingDate("end")}
                  >
                    <Calender />
                    <p className="text-[#007EC1] text-sm font-medium">
                      {formatDate(tempEndDate)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    {selectingDate === "start"
                      ? "Select start date"
                      : "Select end date"}
                  </p>
                </div>
                <div className="mt-6">
                  <Calendar
                    mode="single"
                    selected={
                      selectingDate === "start" ? tempStartDate : tempEndDate
                    }
                    onSelect={handleDateSelect}
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                    disabled={(date) => {
                      if (selectingDate === "end" && tempStartDate) {
                        return date < tempStartDate;
                      }
                      return date > new Date();
                    }}
                  />
                </div>
                <div className="mt-5 bottom-0">
                  <button
                    className={`w-full h-[64px] text-xl font-medium ${
                      tempStartDate && tempEndDate
                        ? "bg-[#000000] text-[#FFFFFF] hover:bg-gray-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={handleApplyFilter}
                    disabled={!tempStartDate || !tempEndDate}
                  >
                    Apply Filter
                  </button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {timeFilters.map((filter) => (
          <div
            key={filter}
            onClick={() => handleTimeFilterClick(filter)}
            className={`md:py-3 md:px-6 p-1 border-[0.88px] border-[#000000] rounded-[7px] flex items-center justify-center cursor-pointer transition-colors ${
              activeFilter === filter
                ? "bg-[#002847] text-white border-none"
                : "bg-transparent text-[#000000]"
            }`}
          >
            <p className="md:text-[21.02px] text-base font-medium">{filter}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardHeader;
