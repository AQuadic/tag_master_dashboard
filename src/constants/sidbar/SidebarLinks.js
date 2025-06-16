import ActiveAccount from "@/components/icons/sidebar/ActiveAccount";
import ActiveAnalytics from "@/components/icons/sidebar/ActiveAnalytics";
import ActiveDashboard from "@/components/icons/sidebar/ActiveDashboard";
import ActiveProducts from "@/components/icons/sidebar/ActiveProducts";
import ActiveProfile from "@/components/icons/sidebar/ActiveProfile";
import Analytics from "@/components/icons/sidebar/Analytics";
import CreateProfile from "@/components/icons/sidebar/CreateProfile";
import Dashboard from "@/components/icons/sidebar/Dashboard";
import Logout from "@/components/icons/sidebar/Logout";
import MyProducts from "@/components/icons/sidebar/MyProducts";
import PaymentPlan from "@/components/icons/sidebar/PaymentPlan";
import PaymentPlanActive from "@/components/icons/sidebar/PaymentPlanActive";

export const SidebarLinks = [
    {
        icon: Dashboard ,
        activeIcon: ActiveDashboard,
        title: "Dashboard"
    },
        {
        icon: Analytics ,
        activeIcon: ActiveAnalytics,
        title: "Analytics"
    },
        {
        icon: CreateProfile ,
        activeIcon: ActiveProfile,
        title: "Create Profile"
    },
        {
        icon: PaymentPlan ,
        activeIcon: PaymentPlanActive,
        title: "Payment Plan"
    },
        {
        icon: PaymentPlan ,
        activeIcon: ActiveAccount,
        title: "My Account"
    },
        {
        icon: MyProducts ,
        activeIcon: ActiveProducts,
        title: "My Products"
    },
        {
        icon: Logout ,
        title: "Logout"
    },
]