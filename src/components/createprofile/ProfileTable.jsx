import { useState } from "react";
import Delete from "../icons/profile/Delete";
import Eye from "../icons/profile/Eye";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "../ui/dialog";
import DataForm from "../general/DataForm";
import ProfileHeader from "./ProfileHeader";
import { useQuery, useQueryClient } from "react-query";
import { deleteUser, getEmployees } from "@/api/employees";
import Spinner from "../icons/general/Spinner";
// import { updateUser } from "@/api/user";
import { useAuthStore } from "@/stores/userStore";
import toast from "react-hot-toast";
import LeftArrow from "../icons/analytics/LeftArrow";
import RightArrow from "../icons/analytics/RightArrow";
import Lock from "../icons/profile/Lock";
import Phone from "../icons/profile/Phone";
import Flag from "../icons/profile/Flag";
import Email from "../icons/analytics/Email";
import CardName from "../icons/paymentplan/CardName";
import logo from '/images/Header/logo.svg';

const ProfileTable = () => {
    const { user, setUser } = useAuthStore();
    const [isEditOpen, setEditOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [page, setPage] = useState(1);
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["employees", page],
        queryFn: () => getEmployees(page),
        keepPreviousData: true,
    });

    const employees = data?.data || [];
    const totalPages = Math.ceil(data?.meta?.total / data?.meta?.per_page) || 1;
    const [profiles, setProfiles] = useState([]);

    const handleAddProfile = (newProfile) => {
        setProfiles((prev) => [...prev, newProfile]);
    };

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        phone_country: user?.phone_country || "EG",
        password: "",
        password_confirmation: "",
    });

    if (isLoading) return <Spinner />;

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            toast.success("User deleted successfully");

            setProfiles((prev) => prev.filter((p) => p.id !== id));

            queryClient.invalidateQueries(["employees"]);
        } catch (err) {
            toast.error("Failed to delete user");
            console.error(err);
        }
    };

    if (isLoading) return <Spinner />;

    return (
        <div className="mt-8">
            <ProfileHeader onAdd={handleAddProfile} />
            <div className="w-[250px] md:w-[400px] lg:w-full overflow-x-auto mt-6">
                <table className="min-w-[700px] w-full">
                    <thead className="text-[#000000] text-2xl font-medium">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Option
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(employees.length ? employees : profiles).map((item) => (
                            <tr key={item.id} className="text-center">
                                <td className="px-2 py-4 font-medium text-[#000000] text-xl">
                                    #{item.id}
                                </td>
                                <td className="px-2 py-4 font-medium text-[#009F32] text-xl">
                                    {item.email || "--"}
                                </td>
                                <td className="px-2 py-4 font-medium text-[#000000] text-xl">
                                    {item.name}
                                </td>
                                <td className="px-2 py-4 font-medium text-[#000000] text-xl">
                                    {item.phone || "--"}
                                </td>
                                <td className="px-2 py-4 flex items-center gap-8">
                                    <Dialog >
                                        <DialogTrigger asChild>
                                            <button
                                                className="p-0 m-0 bg-transparent border-none cursor-pointer"
                                                onClick={() => setSelectedProfile(item)}
                                            >
                                                <Eye />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="w-full h-auto overflow-auto">
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <div className="flex flex-col items-center justify-between mt-6">
                                                        <img src={logo} alt="Logo" className="mx-auto" />
                                                        <div className="relative w-full max-w-[450px]">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Name"
                                                                value={selectedProfile?.name || ""}
                                                                className="w-full h-[58px] border rounded-[8px] mt-2 px-10"
                                                                disabled
                                                            />
                                                            <div className="absolute top-[35%] left-2">
                                                                <CardName />
                                                            </div>
                                                        </div>

                                                        <div className="relative w-full max-w-[450px]">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email"
                                                                value={selectedProfile?.email || ""}
                                                                className="w-full h-[58px] border rounded-[8px] mt-2 px-10"
                                                                disabled
                                                            />
                                                            <div className="absolute top-[45%] left-2">
                                                                <Email />
                                                            </div>
                                                        </div>

                                                        <div className="mt-6 flex md:flex-row flex-col items-center gap-[22px] w-full max-w-[450px]">
                                                            <div className="md:w-[101px] w-full h-[58px] border rounded-[8px] flex items-center justify-center gap-4">
                                                                <p>+20</p>
                                                                <Flag />
                                                            </div>
                                                            <div className="relative w-full">
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    placeholder="971-123456789"
                                                                    value={selectedProfile?.phone || ""}
                                                                    className="w-full h-[58px] border rounded-[8px] px-9"
                                                                    disabled
                                                                />
                                                                <div className="absolute top-[35%] left-2">
                                                                    <Phone />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="relative w-full max-w-[450px]">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                placeholder="Password"
                                                                value={selectedProfile?.password || ""}
                                                                className="w-full h-[58px] border rounded-[8px] mt-6 px-9"
                                                                disabled
                                                            />
                                                            <div className="absolute top-[50%] left-2">
                                                                <Lock />
                                                            </div>
                                                        </div>

                                                        <div className="relative w-full max-w-[450px]">
                                                            <input
                                                                type="password"
                                                                name="password_confirmation"
                                                                placeholder="Confirm Password"
                                                                value={selectedProfile?.password_confirmation || ""}
                                                                className="w-full h-[58px] border rounded-[8px] mt-6 px-9"
                                                                disabled
                                                            />
                                                            <div className="absolute top-[50%] left-2">
                                                                <Lock />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>


                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="p-0 m-0 bg-transparent border-none cursor-pointer">
                                                <Delete />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="w-full h-auto overflow-auto">
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <div className="w-full h-full bg-white rounded-2xl">
                                                        <h1 className="text-black text-xl font-medium">
                                                            Are you sure you want to delete account?
                                                        </h1>
                                                        <div className="flex gap-3 mt-4">
                                                            <button
                                                                onClick={() => handleDeleteUser(item.id)}
                                                                className="flex-1 px-4 py-2 text-white bg-[#002847] hover:bg-[#003a5f] rounded-lg font-medium transition-colors"
                                                            >
                                                                Confirm
                                                            </button>
                                                            <button
                                                                onClick={() => setEditOpen(false)}
                                                                className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-center gap-4 mt-14">
                    <div className="w-11 h-[41px] border border-[#000000] rounded-[8px] flex items-center justify-center">
                        {page}
                    </div>
                    <p>of {totalPages}</p>
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={!data?.links?.prev}
                        aria-label="Previous Page"
                        className="cursor-pointer disabled:opacity-50"
                    >
                        <LeftArrow />
                    </button>

                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={!data?.links?.next}
                        aria-label="Next Page"
                        className="cursor-pointer disabled:opacity-50"
                    >
                        <RightArrow />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProfileTable;
