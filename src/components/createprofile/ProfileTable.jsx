import { useState } from "react";
import Delete from "../icons/profile/Delete";
import Eye from "../icons/profile/Eye";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "../ui/dialog";
import DataForm from "../general/DataForm";
import ProfileHeader from "./ProfileHeader";
import { useQuery, useQueryClient } from "react-query";
import { getEmployees } from "@/api/employees";
import Spinner from "../icons/general/Spinner";
import { updateUser } from "@/api/user";
import { useAuthStore } from "@/stores/userStore";

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

    return (
        <div className="mt-8">
            <ProfileHeader onAdd={handleAddProfile} />
            <div className="w-[200px] md:w-full overflow-x-auto mt-6">
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

                                    <Delete />
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
