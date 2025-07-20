import { editLinks } from "@/api/links";
import { useState } from "react";
import toast from "react-hot-toast";

const EditLinks = ({ linkData, onSuccess }) => {
    const [link, setLink] = useState(linkData.link || "");
    const [name, setName] = useState(linkData.name || "");

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
            <h2 className="text-xl font-semibold mb-4">Edit Link</h2>

            <div className="mb-4">
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
