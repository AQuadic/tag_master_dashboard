import { useState } from "react"
import Filter from "../icons/dashboard/Filter"

const DashboardHeader = () => {
    const [activeFilter, setActiveFilter] = useState("Weekly")
    const timeFilters = ["Weekly", "Monthly", "Annually"]

    return (
        <section>
            <div className="flex flex-wrap items-center gap-5">
                <div className="py-3 px-6 border-[0.88px] border-[#000000] rounded-[7px] flex items-center justify-center gap-3">
                    <Filter />
                    <p className="text-[#000000] text-[21.02px] font-medium">filter</p>
                </div>
                {timeFilters.map((filter) => (
                    <div
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`py-3 px-6 border-[0.88px] border-[#000000] rounded-[7px] flex items-center justify-center cursor-pointer transition-colors ${activeFilter === filter
                            ? "bg-[#002847] text-white border-none"
                            : "bg-transparent text-[#000000]"
                            }`}
                    >
                        <p className="text-[21.02px] font-medium">{filter}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DashboardHeader