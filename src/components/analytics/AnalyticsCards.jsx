import { getEmployeesAnalytics } from "@/api/employees";
import { useState } from "react";
import { useQuery } from "react-query";
import LeftArrow from "../icons/analytics/LeftArrow";
import RightArrow from "../icons/analytics/RightArrow";
import Eye from "../icons/dashboard/Eye";
import Hand from "../icons/dashboard/Hand";
import Spinner from "../icons/general/Spinner";

const AnalyticsCards = ({ startDate, endDate, filterType }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["employees-analytics", currentPage, startDate, endDate],
    queryFn: () => getEmployeesAnalytics(currentPage, startDate, endDate),
    enabled: !!startDate && !!endDate,
  });

  const analytics = data?.data || [];
  const totalPages = data?.meta?.last_page || 1;

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 mt-10">
        <Spinner />
      </div>
    );
  }

  if (!startDate || !endDate) {
    return (
      <div className="flex justify-center items-center h-64 mt-10">
        <p className="text-gray-500 text-lg">
          Please select a date range to view analytics
        </p>
      </div>
    );
  }

  return (
    <section className="mt-10">
      {/* Date Range Indicator */}
      {startDate && endDate && (
        <div className="mb-6 text-center">
          <p className="text-sm text-gray-600 capitalize">
            {filterType} Analytics - {startDate.toLocaleDateString()} to{" "}
            {endDate.toLocaleDateString()}
          </p>
        </div>
      )}

      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-6">
        {analytics.map((member, index) => (
          <div
            key={index}
            className="w-full h-full border border-[#000000] rounded-[8px] p-4"
          >
            <div className="flex md:flex-row flex-col items-center gap-2">
              <img
                src={member.image}
                alt=""
                className="w-[64px] h-[64px] object-cover rounded-full"
              />
              <div>
                <h1 className="text-[#000000] text-base font-medium">
                  {member.name}
                </h1>
                <p className="text-[#878787] text-base font-medium text-center md:text-start truncate w-[200px]">
                  {member.email || "No email"}
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap items-center md:gap-14 gap-2">
              <div className="flex items-center gap-2">
                <Eye />
                <p className="text-[#5A5A5A] text-[22px] font-medium">
                  {member.basic_analytics?.views ?? 0}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Hand />
                <p className="text-[#5A5A5A] text-[22px] font-medium">
                  {member.basic_analytics?.clicks ?? 0}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-20 gap-4 flex-wrap">
        <div className="w-11 h-[41px] border border-[#000000] rounded-[8px] flex items-center justify-center">
          {currentPage}
        </div>
        <p>of {totalPages}</p>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className="cursor-pointer"
        >
          <LeftArrow />
        </button>

        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-8 h-8 rounded-md text-sm font-medium ${
                pageNum === currentPage
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              } border border-[#000000]`}
            >
              {pageNum}
            </button>
          ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="cursor-pointer"
          aria-label="Next Page"
        >
          <RightArrow />
        </button>
      </div>
    </section>
  );
};

export default AnalyticsCards;
