import Eye from "@/components/icons/dashboard/Eye"
import Hand from "@/components/icons/dashboard/Hand"
import PurpleArrow from "@/components/icons/dashboard/PurpleArrow"
import UpArrow from "@/components/icons/dashboard/UpArrow"

export const analyticsData = [
    {
            icon: Eye,
            title: "Total Views",
            dataKey: "view",
            value: 325,
            percentage: 75,
            changeText: "Compared to last week",
            changeColor: "#009F32",
            progressBarColor: "#007EC1",
            arrowIcon: UpArrow,
        },
        {
            icon: Hand,
            title: "Total Clicks",
            dataKey: "click",
            value: 132,
            percentage: 25,
            changeText: "Compared to last week",
            changeColor: "#9D00A6",
            progressBarColor: "#9D00A6",
            arrowIcon: PurpleArrow,
        },
    ]
