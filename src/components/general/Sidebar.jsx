import { SidebarLinks } from "@/constants/sidbar/SidebarLinks";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import LogoutConfirm from "../logout/LogoutConfirm";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSwitchPopup, setShowSwitchPopup] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [logoutPosition, setLogoutPosition] = useState({ top: 0, left: 0 });
  const switchProfileRef = useRef(null);
  const logoutRef = useRef(null);
  const topLinks = SidebarLinks.slice(0, SidebarLinks.length - 2);
  const bottomLinks = SidebarLinks.slice(-2);

  const getCurrentActiveTitle = () => {
    const currentPath = location.pathname;

    const activeLink = SidebarLinks.find(
      (link) => link.path && currentPath === `/${link.path}`
    );
    return activeLink ? activeLink.title : "Dashboard";
  };

  const activeComponent = getCurrentActiveTitle();

  const handleItemClick = (title, path) => {
    if (title === "Logout") {
      if (logoutRef.current) {
        const rect = logoutRef.current.getBoundingClientRect();
        setLogoutPosition({
          top: rect.top,
          left: rect.right + 10,
        });
      }
      setShowLogoutPopup(!showLogoutPopup);
      setShowSwitchPopup(false);
    } else if (title === "Switch Profile") {
      setShowSwitchPopup(!showSwitchPopup);
      setShowLogoutPopup(false);
    } else if (path) {
      // Navigate to the path - now more flexible
      navigate(`/${path}`);
      setShowSwitchPopup(false);
      setShowLogoutPopup(false);
    }
  };

  return (
    <div className="flex-shrink-0 fixed">
      <aside>
        <div className="xl:w-[358px] w-20 min-h-[calc(100dvh-120px)] bg-[#002847] rounded-2xl mt-6 ml-6 flex flex-col xl:p-14 p-3">
          <div className="flex flex-col gap-10">
            {topLinks.map(
              ({ icon: Icon, activeIcon: ActiveIcon, title, path }, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-4 px-4 py-4 cursor-pointer rounded-2xl transition-all duration-200 ${
                    activeComponent === title
                      ? "bg-[#E6F3F9] shadow-md"
                      : "hover:bg-[#E6F3F9]"
                  }`}
                  onClick={() => handleItemClick(title, path)}
                >
                  <div className="mr-3">
                    {activeComponent === title && ActiveIcon ? (
                      <ActiveIcon className={`transition-colors text-black`} />
                    ) : (
                      <Icon
                        className={`transition-colors ${
                          activeComponent === title
                            ? "text-black"
                            : "text-[#EDEDED]"
                        }`}
                      />
                    )}
                  </div>
                  <p
                    className={`text-xl font-medium transition-colors xl:flex hidden ${
                      activeComponent === title
                        ? "text-black"
                        : "text-[#EDEDED] group-hover:text-black"
                    }`}
                  >
                    {title}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-auto flex flex-col gap-5 pt-8">
            {bottomLinks.map(
              ({ icon: Icon, activeIcon: ActiveIcon, title, path }, index) => (
                <div
                  key={index}
                  ref={
                    title === "Switch Profile"
                      ? switchProfileRef
                      : title === "Logout"
                      ? logoutRef
                      : null
                  }
                  className={`group flex items-center gap-4 px-4 py-4 cursor-pointer rounded-2xl transition-all duration-200 ${
                    (title === "Switch Profile" && showSwitchPopup) ||
                    (title === "Logout" && showLogoutPopup)
                      ? "bg-[#E6F3F9] shadow-md"
                      : activeComponent === title
                      ? "bg-[#E6F3F9] shadow-md"
                      : "hover:bg-[#E6F3F9]"
                  }`}
                  onClick={() => handleItemClick(title, path)}
                >
                  <div className="mr-3">
                    {(activeComponent === title && ActiveIcon) ||
                    (title === "Switch Profile" &&
                      showSwitchPopup &&
                      ActiveIcon) ||
                    (title === "Logout" && showLogoutPopup && ActiveIcon) ? (
                      <ActiveIcon className={`transition-colors text-black`} />
                    ) : (
                      <Icon
                        className={`transition-colors ${
                          activeComponent === title ||
                          (title === "Switch Profile" && showSwitchPopup) ||
                          (title === "Logout" && showLogoutPopup)
                            ? "text-black"
                            : "text-[#EDEDED]"
                        }`}
                      />
                    )}
                  </div>
                  <p
                    className={`text-xl font-medium transition-colors xl:flex hidden ${
                      activeComponent === title ||
                      (title === "Switch Profile" && showSwitchPopup) ||
                      (title === "Logout" && showLogoutPopup)
                        ? "text-black"
                        : "text-[#EDEDED] group-hover:text-black"
                    }`}
                  >
                    {title}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </aside>

      <LogoutConfirm
        showLogoutPopup={showLogoutPopup}
        setShowLogoutPopup={setShowLogoutPopup}
        logoutPosition={logoutPosition}
      />
    </div>
  );
};

export default Sidebar;
