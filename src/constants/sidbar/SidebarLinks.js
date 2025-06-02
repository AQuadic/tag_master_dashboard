import Analytics from "@/components/icons/sidebar/Analytics";
import CreateProfile from "@/components/icons/sidebar/CreateProfile";
import Dashboard from "@/components/icons/sidebar/Dashboard";
import Logout from "@/components/icons/sidebar/Logout";
import MyProducts from "@/components/icons/sidebar/MyProducts";
import PaymentPlan from "@/components/icons/sidebar/PaymentPlan";
import PaymentPlanActive from "@/components/icons/sidebar/PaymentPlanActive";
import SwitchProfile from "@/components/icons/sidebar/SwitchProfile";

export const SidebarLinks = [
    {
        icon: Dashboard ,
        title: "Dashboard"
    },
        {
        icon: Analytics ,
        title: "Analytics"
    },
        {
        icon: CreateProfile ,
        title: "Create Profile"
    },
        {
        icon: PaymentPlan ,
        activeIcon: PaymentPlanActive,
        title: "Payment Plan"
    },
        {
        icon: MyProducts ,
        title: "My Products"
    },
        {
        icon: SwitchProfile ,
        title: "Switch Profile"
    },
        {
        icon: Logout ,
        title: "Logout"
    },
]