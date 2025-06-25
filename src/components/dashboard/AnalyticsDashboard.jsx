import { analyticsData } from "@/constants/dashboard/AnalyticsData"
import ConversionRate from "../icons/dashboard/ConversionRate"
import CircularProgress from "../icons/dashboard/CircleProgress"
import { useQuery } from "react-query";
import { getAnalytics } from "@/api/analytics";

// eslint-disable-next-line react/prop-types
const AnalyticsCard = ({ icon: Icon, title, value, percentage, changeText, changeColor, progressBarColor = "#007EC1", arrowIcon: ArrowIcon }) => {

    const { data: analytics = {} } = useQuery({
        queryKey: ["analytics"],
        queryFn: getAnalytics,
    });


    console.log(analytics)

    return (
        <div className="md:w-[350px] w-full h-full rounded-2xl px-4 py-8" style={{ boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="flex items-center gap-4">
                <Icon />
                <p className="text-[#1D0909] md:text-[22px] text-base font-medium">{title}</p>
            </div>
            <p className="text-[#000000] text-2xl font-medium mt-3.5">{value}</p>
            <div className="flex items-center gap-4 mt-3">
                <div className="flex-1 md:min-w-48 relative">
                    <div className="absolute -top-8 right-12 bg-[#FFFFFF] text-black text-xs px-2 py-1 rounded-md"
                        style={{ boxShadow: '1px 1px 2px 0px #0000004D' }}
                    >
                        {percentage}%
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-700"></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 relative">
                        <div
                            className="h-2 rounded-full transition-all duration-300"
                            style={{
                                width: `${percentage}%`,
                                backgroundColor: progressBarColor
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center md:gap-2 md:mt-[27px] mt-4">
                <ArrowIcon />
                <p className="text-[15.8px]" style={{ color: changeColor }}>{percentage}%</p>
                <p className="text-[#000000] text-[15.8px]">{changeText}</p>
            </div>
        </div>
    )
}

const AnalyticsDashboard = () => {
    return (
        <section className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-6">
                {analyticsData.map((data) => (
                    <AnalyticsCard
                        key={data.id}
                        icon={data.icon}
                        title={data.title}
                        value={data.value}
                        percentage={data.percentage}
                        changeText={data.changeText}
                        changeColor={data.changeColor}
                        progressBarColor={data.progressBarColor}
                        arrowIcon={data.arrowIcon}
                    />
                ))}
            </div>

            <div className="md:w-[350px] w-full h-full rounded-2xl px-4 py-5" style={{ boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)' }}>
                <div className="flex items-center gap-4">
                    <ConversionRate />
                    <p className="text-[#1D0909] md:text-[22px] text-sm font-medium">Conversion Rate</p>
                </div>
                <div className="mt-[11px] flex items-center justify-around">
                    <p className="text-[#000000] text-[32px] font-medium">25%</p>
                    <CircularProgress />
                </div>
                <div className="flex items-center justify-around mt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#007EC1] rounded-full"></div>
                        <p className="text-[#1D0909] text-base font-medium">Views</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#F8E6F9] rounded-full"></div>
                        <p className="text-[#1D0909] text-base font-medium">Clicks</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnalyticsDashboard