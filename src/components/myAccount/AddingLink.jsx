import { useState } from 'react'
import SuperLink from "../icons/myaccount/SuperLink"
import Youtube from "../icons/myaccount/Youtube"
import EditImage from "./EditImage"
import { addLinks } from '@/api/links'
import { useAuthStore } from '@/stores/userStore'
import toast from 'react-hot-toast'

const AddingLink = ({ onSuccess }) => {
    const { user } = useAuthStore();

    const [formData, setFormData] = useState({
        profile_id: user?.id || "",
        name: "",
        link: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addLinks(formData);
            console.log("Add link response:", response);
            if (onSuccess) onSuccess();
        } catch (error) {
            toast.error("Error adding link")
        }
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center">
                <div className="relative">
                    <Youtube />
                    <div className="absolute right-16 top-0 cursor-pointer">
                        <EditImage />
                    </div>
                </div>
                <p className="text-[#000000] text-xl mt-2.5">Youtube</p>
            </div>

            <div className="w-full h-[72px] flex items-center justify-between border border-[#979797] rounded-[35px] mt-10 p-6">
                <div className="flex items-center gap-1.5">
                    <SuperLink />
                    <p className="text-[#000000] text-base">Super link</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <div className="w-full h-[72px] flex items-center justify-between border border-[#979797] rounded-[35px] mt-10 p-6">
                <div className="flex items-center gap-1.5">
                    <p className="text-[#000000] text-base">Active</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mt-12">
                    <label htmlFor="name" className="text-[#000000] text-base">Platform Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Youtube"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-[72px] bg-[#FBFBFB] border-[0.5px] border-[#979797] rounded-[12px] mt-2.5 px-2 focus:outline-none"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="link" className="text-[#000000] text-base">Link URL</label>
                    <input
                        type="text"
                        name="link"
                        id="link"
                        placeholder="https://www.youtube.com/"
                        value={formData.link}
                        onChange={handleChange}
                        className="w-full h-[72px] bg-[#FBFBFB] border-[0.5px] border-[#979797] rounded-[12px] mt-2.5 px-2 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full h-[74px] bg-[#000000] rounded-[12px] mt-9 text-[#FFFFFF] text-xl font-medium"
                >
                    Add
                </button>
            </form>

            <button className="text-[#F80D0D] text-[22px] font-medium mt-9 flex justify-center mx-auto">
                Cancel
            </button>
        </section>
    )
}

export default AddingLink
