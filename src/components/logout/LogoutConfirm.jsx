import Logout from "../icons/logout/Logout";
import { postLogout } from "@/api/auth";
import Cookies from "js-cookie";
import { useAuthStore } from "@/stores/userStore";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const LogoutConfirm = ({
    showLogoutPopup,
    setShowLogoutPopup,
    logoutPosition
}) => {
    const setUser = useAuthStore((state) => state.setUser);

    const handleCancel = () => {
        setShowLogoutPopup(false);
    };

    const handleLogout = async () => {
        try {
            await postLogout();
        } catch (error) {
            toast.error("Logout failed:", error);
        } finally {
            setUser(null);
            Cookies.remove("Tag_master_admin");
            window.location.href = "/signin";
        }
    };

    if (!showLogoutPopup) return null;

    return (
        <div
            className="fixed inset-0 z-40"
            onClick={() => setShowLogoutPopup(false)}
        >
            <div
                className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80"
                style={{
                    top: logoutPosition.top - 80,
                    left: logoutPosition.left
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-center mb-4">
                    <Logout />
                </div>

                <div className="text-center mb-6">
                    <p className="text-base font-normal text-[#000000] mb-2">
                        Are you sure to log out
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleLogout}
                        className="flex-1 px-4 py-2 text-white bg-[#002847] hover:bg-[#003a5f] rounded-lg font-medium transition-colors cursor-pointer"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={handleCancel}
                        className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirm;