import { MembersData } from "@/constants/Analytics/MembersData"
import Eye from "../icons/dashboard/Eye"
import Hand from "../icons/dashboard/Hand"
import LeftArrow from "../icons/analytics/LeftArrow"
import RightArrow from "../icons/analytics/RightArrow"
import { useState } from "react"

const AnalyticsCards = () => {

    const totalPages = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrev = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };


    return (
        <section className="mt-10">
            <div className="flex flex-wrap gap-6">
                {MembersData.map((member, index) => {
                    return (
                        <div key={index} className="md:w-[293px] w-full h-full border border-[#000000] rounded-[8px] p-4">
                            <div className="flex md:flex-row flex-col items-center gap-2">
                                <img src={member.image} alt="Employee" />
                                <div>
                                    <h1 className="text-[#000000] text-base font-medium">{member.name}</h1>
                                    <p className="text-[#878787] text-base font-medium text-center md:text-start">{member.title}</p>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="flex flex-wrap items-center md:gap-8 gap-2">
                                <div className="flex items-center gap-2">
                                    <Eye />
                                    <p className="text-[#5A5A5A] text-[22px] font-medium">{member.show}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Hand />
                                    <p className="text-[#5A5A5A] text-[22px] font-medium">{member.click}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex items-center justify-center mt-20 gap-6">
                <div className="w-11 h-[41px] border border-[#000000] rounded-[8px] flex items-center justify-center">
                    {currentPage}
                </div>
                <p>of {totalPages}</p>
                <button onClick={handlePrev} disabled={currentPage === 1} aria-label="Previous Page" className="cursor-pointer">
                    <LeftArrow />
                </button>
                <button onClick={handleNext} disabled={currentPage === totalPages} aria-label="Next Page" className="cursor-pointer">
                    <RightArrow />
                </button>
            </div>
        </section>
    )
}

export default AnalyticsCards
