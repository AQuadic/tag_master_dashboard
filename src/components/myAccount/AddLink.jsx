import { useState } from "react"
import Search from "../icons/myaccount/Search"
import LinkedIn from "../icons/myaccount/LinkedIn"
import Whatsapp from "../icons/myaccount/Whatsapp"
import Instagram from "../icons/myaccount/Instagram"
import Tiktok from "../icons/myaccount/Tiktok"
import Facebook from "../icons/myaccount/Facebook"
import X from "../icons/myaccount/X"

const AddLink = () => {
    const [activeFilter, setActiveFilter] = useState("All")
    const typesFilter = ["All", "Social media", "Business", "Creative", "Payments", "Media", "Other"]

    const LinksData = [
        {
            icon: <LinkedIn />,
            title: 'Linked in'
        },
        {
            icon: <Whatsapp />,
            title: 'Whatsapp'
        },
        {
            icon: <Instagram />,
            title: 'Instagram'
        },
        {
            icon: <Tiktok />,
            title: 'Tiktok'
        },
        {
            icon: <Facebook />,
            title: 'Facebook'
        },
        {
            icon: <X />,
            title: 'X'
        },
    ]

    return (
        <section>
            <div className="relative">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="w-full h-[65px] bg-[#FBFBFB] rounded-[50px] px-10"
                    placeholder="Search"
                />
                <div className="absolute top-3">
                    <Search />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
                {typesFilter.map((filter) => (
                    <div
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`py-2 px-3 rounded-[7px] flex items-center justify-center cursor-pointer transition-colors ${activeFilter === filter
                            ? "bg-[#002847] text-white border-none"
                            : "bg-[#FBFBFB] text-[#000000]"
                            }`}
                    >
                        <p className="text-[21.02px] font-medium">{filter}</p>
                    </div>
                ))}
            </div>

            <div className='mt-[28px]'>
                {LinksData.map((data, index) => {
                    return (
                        <div key={index} className='w-full h-full bg-[#FBFBFB] rounded-[12px] py-[18px] px-[38px] mt-4 flex md:items-center justify-between'>
                            <div className='flex items-center gap-[14px]'>
                                {data.icon}
                                <p className='text-[#000000] text-lg'>{data.title}</p>
                            </div>
                            <p className='text-[#002847] text-base font-medium mt-4 md:mt-0'>{data.link}</p>
                            <div>
                                <button className="text-[#002847] text-base font-medium">Add</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AddLink
