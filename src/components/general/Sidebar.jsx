import { SidebarLinks } from "@/constants/sidbar/SidebarLinks"

const Sidebar = () => {
    const topLinks = SidebarLinks.slice(0, SidebarLinks.length - 2);
    const bottomLinks = SidebarLinks.slice(-2);

    return (
        <section className="container">
            <div className="w-[358px] h-[959px] bg-[#002847] rounded-2xl mt-6 flex flex-col p-14">
                <div className="flex flex-col gap-10">
                    {topLinks.map(({ icon: Icon, title }, index) => (
                        <div key={index} className="group flex items-center gap-4 px-4 py-4 hover:bg-[#E6F3F9] cursor-pointer rounded-2xl">
                            <div className="mr-3"><Icon /></div>
                            <p className="text-[#EDEDED] text-xl font-medium group-hover:text-black">{title}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-auto flex flex-col gap-5">
                    {bottomLinks.map(({ icon: Icon, title }, index) => (
                        <div key={index} className="group flex items-center gap-4 px-4 py-4 hover:bg-[#E6F3F9] cursor-pointer rounded-2xl">
                            <div className="mr-3"><Icon /></div>
                            <p className="text-[#EDEDED] text-xl font-medium group-hover:text-black">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
