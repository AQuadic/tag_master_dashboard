import { Calendar } from "@/components/ui/calendar"
import React, { useState } from "react"
import Filter from "../icons/dashboard/Filter"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Calender from "../icons/dashboard/Calender"

const DashboardHeader = () => {
    const [activeFilter, setActiveFilter] = useState("Weekly")
    const timeFilters = ["Weekly", "Monthly", "Annually"]
    const [date, setDate] = React.useState(new Date())

    return (
        <section>
            <div className="flex flex-wrap items-center gap-5">
                <Dialog>
                    <DialogTrigger>
                        <div className="md:py-3 md:px-6 p-1 border-[0.88px] border-[#000000] rounded-[7px] flex items-center justify-center gap-3">
                            <Filter />
                            <p className="text-[#000000] md:text-[21.02px] text-base font-medium">filter</p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className='md:w-[410px] w-full'>
                        <DialogHeader>
                            <DialogTitle className='text-[#002F10] texet-[22px] font-semibold'>Filter by</DialogTitle>
                            <DialogDescription>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="px-5 py-3 border border-[#007EC1] bg-[#F6F6F6] rounded-[12px] flex items-center gap-2">
                                        <Calender />
                                        <p className="text-[#007EC1] text-lg font-medium">2 July 2024</p>
                                    </div>
                                    <div className="px-5 py-3 border border-[#007EC1] bg-[#F6F6F6] rounded-[12px] flex items-center gap-2">
                                        <Calender />
                                        <p className="text-[#007EC1] text-lg font-medium">2 July 2024</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border shadow-sm"
                                        captionLayout="dropdown"
                                    />
                                </div>
                                <div className="mt-5 bottom-0">
                                    <button className="w-full h-[64px] bg-[#000000] text-[#FFFFFF] text-xl font-medium">تطبيق</button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                {timeFilters.map((filter) => (
                    <div
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`md:py-3 md:px-6 p-1 border-[0.88px] border-[#000000] rounded-[7px] flex items-center justify-center cursor-pointer transition-colors ${activeFilter === filter
                            ? "bg-[#002847] text-white border-none"
                            : "bg-transparent text-[#000000]"
                            }`}
                    >
                        <p className="md:text-[21.02px] text-base font-medium">{filter}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DashboardHeader