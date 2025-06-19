import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import DataForm from "../general/DataForm"
import { createProfile } from "@/api/createProfile"

const ProfileHeader = ({ onAdd }) => {
    const [open, setOpen] = useState(false);

    const handleCreate = async (formData) => {
        const res = await createProfile(formData);
        onAdd(res.user);
        return res;
    };

    return (
        <section>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                    <button className="md:w-[255px] w-[200px] h-[59px] bg-[#002847] rounded-[12px] text-[#FFFFFF] text-2xl font-medium cursor-pointer">add account</button>
                </DialogTrigger>
                <DialogContent className=' w-full h-auto overflow-auto'>
                    <DialogHeader>
                        <DialogDescription>
                            <DataForm onSubmit={handleCreate} onFinish={() => setOpen(false)} />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </section>
    )
}

export default ProfileHeader
