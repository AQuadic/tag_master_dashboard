import { editLinks } from "@/api/links";
import { useState } from "react";
import toast from "react-hot-toast";
import Search from "../icons/myaccount/Search";

const EditLinks = ({ linkData, onSuccess }) => {
    const [link, setLink] = useState(linkData.link || "");
    const [name, setName] = useState(linkData.name || "");

    const [activeFilter, setActiveFilter] = useState("All")
    const typesFilter = ["All", "Social media", "Business", "Creative", "Payments", "Media", "Other"]

    const handleUpdate = async () => {
        try {
            await editLinks(linkData.id, {
                link,
                name,
            });
            toast.success("Link edited successfully")
            onSuccess?.();
        } catch (error) {
            toast.error("Failed to update link")
            console.error("Failed to update link:", error);
        }
    };

    return (
        <div>
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

            <div className="my-4">
                <label className="block mb-1 font-medium">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-[72px] bg-[#FBFBFB] border-[0.5px] border-[#979797] rounded-[12px] mt-2.5 px-2 focus:outline-none"
                    placeholder="Enter name"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Link</label>
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full h-[72px] bg-[#FBFBFB] border-[0.5px] border-[#979797] rounded-[12px] mt-2.5 px-2 focus:outline-none"
                    placeholder="Enter link"
                />
            </div>

            <button
                onClick={handleUpdate}
                className="w-full h-[74px] bg-[#000000] rounded-[12px] mt-9 text-[#FFFFFF] text-xl font-medium"
            >
                Save Changes
            </button>
        </div>
    );
};

export default EditLinks;
