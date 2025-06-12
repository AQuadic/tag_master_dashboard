import { ProfileData } from "@/constants/profile/ProfileData";
import Delete from "../icons/profile/Delete";
import Eye from "../icons/profile/Eye";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "../ui/dialog";
import DataForm from "../general/DataForm";

const ProfileTable = () => {

    return (
        <div>
            <div className="relative overflow-x-auto mt-8">
                <table className="w-full text-left rtl:text-right">
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
                        {ProfileData.map((item) => (
                            <tr key={item.id} className="">
                                <th scope="row" className="px-2 py-4 font-medium text-[#000000] text-xl">
                                    #{item.id}
                                </th>
                                <td className="px-2 py-4 font-medium text-[#009F32] text-xl">
                                    {item.email}
                                </td>
                                <td className="px-2 py-4 font-medium text-[#000000] text-xl">
                                    {item.name}
                                </td>
                                <td className="px-2 py-4 font-medium text-[#000000] text-xl">
                                    {item.phone}
                                </td>
                                <td className="px-2 py-4 flex items-center gap-8">
                                    <Dialog>
                                        <DialogTrigger>
                                            <Eye />
                                        </DialogTrigger>
                                        <DialogContent className=' w-full h-auto overflow-auto'>
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <DataForm />
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
