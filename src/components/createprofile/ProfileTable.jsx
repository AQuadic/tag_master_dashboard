import { useState } from "react";
import Delete from "../icons/profile/Delete";
import Eye from "../icons/profile/Eye";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "../ui/dialog";
import DataForm from "../general/DataForm";
import ProfileHeader from "./ProfileHeader";
import { useQuery, useQueryClient } from "react-query";
import { deleteUser, getEmployees } from "@/api/employees";
import Spinner from "../icons/general/Spinner";
import { updateUser } from "@/api/user";
import { useAuthStore } from "@/stores/userStore";
import toast from "react-hot-toast";

const ProfileTable = () => {
    const { user, setUser } = useAuthStore();
    const [isEditOpen, setEditOpen] = useState(false);
    const queryClient = useQueryClient();

    const { data: employees = [], isLoading } = useQuery({
        queryKey: ["employees"],
        queryFn: getEmployees,
    });

    const [profiles, setProfiles] = useState([]);

    const handleAddProfile = (newProfile) => {
        setProfiles((prev) => [...prev, newProfile]);
    };

    const handleUserUpdated = (updatedUser) => {
        setProfiles((prev) =>
            prev.map((p) => (p.id === updatedUser.id ? updatedUser : p))
        );

        queryClient.invalidateQueries(["employees"]);
    };

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
                                    <Dialog open={isEditOpen} onOpenChange={setEditOpen}>
                                        <DialogTrigger>
                                            <Eye />
                                        </DialogTrigger>
                                        <DialogContent className="w-full h-auto overflow-auto">
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <DataForm
                                                        onSubmit={updateUser}
                                                        onFinish={() => setEditOpen(false)}
                                                        user={user}
                                                        setUser={(updatedUser) => {
                                                            setUser(updatedUser);
                                                            handleUserUpdated(updatedUser);
                                                        }}
                                                    />
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
            </div>
        </div>
    );
};

export default ProfileTable;
