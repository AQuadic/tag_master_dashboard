import { SidebarLinks } from "@/constants/sidbar/SidebarLinks";
import Analytics from "@/pages/Analytics";
import CreateProfile from "@/pages/CreateProfile";
import Dashboard from "@/pages/Dashboard";
import MyAccount from "@/pages/MyAccount";
import MyProducts from "@/pages/MyProducts";
import PaymentPlan from "@/pages/PaymentPlan";
import { useState, useRef } from "react";
import SwitchProfile from "../switchAccount/SwitchProfile";

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [showSwitchPopup, setShowSwitchPopup] = useState(false);
  const [switchProfilePosition, setSwitchProfilePosition] = useState({ top: 0, left: 0 });
  const switchProfileRef = useRef(null);
  const topLinks = SidebarLinks.slice(0, SidebarLinks.length - 2);
  const bottomLinks = SidebarLinks.slice(-2);

  const handleItemClick = (title) => {
    if (title === "Switch Profile") {
      if (switchProfileRef.current) {
        const rect = switchProfileRef.current.getBoundingClientRect();
        setSwitchProfilePosition({
          top: rect.top,
          left: rect.right + 10
        });
      }
      setShowSwitchPopup(!showSwitchPopup);
    } else if (title === "Logout") {
      console.log("Logout clicked");
    } else {
      setActiveComponent(title);
      setShowSwitchPopup(false);
    }
  };

  const renderActiveComponent = () => {
    return componentMap[activeComponent];
  };

  const componentMap = {
    "Payment Plan": <PaymentPlan />,
    "Dashboard": <Dashboard />,
    "Analytics": <Analytics />,
    "Create Profile": <CreateProfile />,
    "My Products": <MyProducts />,
    "My Account": <MyAccount />
  };

  return (
    <div className="flex container relative">
      <aside className="flex-shrink-0">
        <div className="xl:w-[358px] w-20 min-h-[calc(100dvh-120px)] bg-[#002847] rounded-2xl mt-6 ml-6 flex flex-col xl:p-14 p-3">
          <div className="flex flex-col gap-10">
            {topLinks.map(
              ({ icon: Icon, activeIcon: ActiveIcon, title }, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-4 px-4 py-4 cursor-pointer rounded-2xl transition-all duration-200 ${activeComponent === title
                    ? "bg-[#E6F3F9] shadow-md"
                    : "hover:bg-[#E6F3F9]"
                    }`}
                  onClick={() => handleItemClick(title)}
                >
                  <div className="mr-3">
                    {activeComponent === title && ActiveIcon ? (
                      <ActiveIcon className={`transition-colors text-black`} />
                    ) : (
                      <Icon
                        className={`transition-colors ${activeComponent === title
                          ? "text-black"
                          : "text-[#EDEDED]"
                          }`}
                      />
                    )}
                  </div>
                  <p
                    className={`text-xl font-medium transition-colors xl:flex hidden ${activeComponent === title
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

          <div className="mt-auto flex flex-col gap-5">
            {bottomLinks.map(
              ({ icon: Icon, activeIcon: ActiveIcon, title }, index) => (
                <div
                  key={index}
                  ref={title === "Switch Profile" ? switchProfileRef : null}
                  className={`group flex items-center gap-4 px-4 py-4 cursor-pointer rounded-2xl transition-all duration-200 ${title === "Switch Profile" && showSwitchPopup
                    ? "bg-[#E6F3F9] shadow-md"
                    : activeComponent === title
                      ? "bg-[#E6F3F9] shadow-md"
                      : "hover:bg-[#E6F3F9]"
                    }`}
                  onClick={() => handleItemClick(title)}
                >
                  <div className="mr-3">
                    {((activeComponent === title && ActiveIcon) || (title === "Switch Profile" && showSwitchPopup && ActiveIcon)) ? (
                      <ActiveIcon className={`transition-colors text-black`} />
                    ) : (
                      <Icon
                        className={`transition-colors ${activeComponent === title || (title === "Switch Profile" && showSwitchPopup)
                          ? "text-black"
                          : "text-[#EDEDED]"
                          }`}
                      />
                    )}
                  </div>
                  <p
                    className={`text-xl font-medium transition-colors xl:flex hidden ${activeComponent === title || (title === "Switch Profile" && showSwitchPopup)
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

      <main className="flex-1 p-6">
        <div className="">{renderActiveComponent()}</div>
      </main>

      <SwitchProfile
        showSwitchPopup={showSwitchPopup}
        setShowSwitchPopup={setShowSwitchPopup}
        switchProfilePosition={switchProfilePosition}
        switchProfileRef={switchProfileRef}
      />
    </div>
  );
};

export default Sidebar;
