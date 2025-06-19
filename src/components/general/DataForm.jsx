import { useState } from "react";
import logo from '/images/Header/logo.svg';
import CardName from "../icons/paymentplan/CardName";
import Email from "../icons/analytics/Email";
import Flag from "../icons/profile/Flag";
import Phone from "../icons/profile/Phone";
import Lock from "../icons/profile/Lock";
import { updateUser } from "@/api/user";
import toast from "react-hot-toast";

const DataForm = ({ onSubmit, onFinish, setUser, user }) => {
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        phone_country: user?.phone_country || "EG",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.password) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            const response = await onSubmit(formData);
            if (response?.user && setUser) setUser(response.user);

            if (user) {
                toast.success("Profile updated successfully");
            } else {
                toast.success("Account created successfully");
            }

            if (onFinish) onFinish();
        } catch (error) {
            if (error?.response?.data?.errors) {
                const errors = error.response.data.errors;
                Object.values(errors).forEach((msgs) =>
                    msgs.forEach((msg) => toast.error(msg))
                );
            } else {
                toast.error("Operation failed");
            }
        }
    };

    const handleCancel = () => {
        if (onFinish) onFinish();
    };

    return (
        <div className="flex flex-col items-center justify-between mt-6">
            <img src={logo} alt="Logo" className="mx-auto" />
            <div className="relative">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-2 px-10"
                />
                <div className="absolute top-[35%] left-2">
                    <CardName />
                </div>
            </div>

            <div className="relative">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-2 px-10"
                />
                <div className="absolute top-[45%] left-2">
                    <Email />
                </div>
            </div>

            <div className="mt-6 flex md:flex-row flex-col items-center gap-[22px]">
                <div className="md:w-[101px] w-full h-[58px] border rounded-[8px] flex items-center justify-center gap-4">
                    <Flag />
                    <p>+20</p>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        name="phone"
                        placeholder="971-123456789"
                        value={formData.phone}
                        onChange={handleChange}
                        className="md:w-[327px] w-full h-[58px] border rounded-[8px] px-9"
                    />
                    <div className="absolute top-[35%] left-2">
                        <Phone />
                    </div>
                </div>
            </div>

            <div className="relative">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-6 px-9"
                />
                <div className="absolute top-[50%] left-2">
                    <Lock />
                </div>
            </div>

            <div className="relative">
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-6 px-9"
                />
                <div className="absolute top-[50%] left-2">
                    <Lock />
                </div>
            </div>


            <button
                onClick={handleSubmit}
                className="w-[255px] h-[59px] bg-[#002847] rounded-[12px] text-[#FFFFFF] text-2xl font-medium mt-8"
            >
                Confirm
            </button>
            <p
                onClick={handleCancel}
                className="text-[#FD0000] text-2xl mt-5 cursor-pointer"
            >
                Cancel
            </p>
        </div>
    );
};

export default DataForm;
