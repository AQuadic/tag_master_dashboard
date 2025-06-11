import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import DataForm from "../general/DataForm"

const ProfileHeader = () => {
    return (
        <section>
            <Dialog>
                <DialogTrigger>
                    <button className="w-[255px] h-[59px] bg-[#002847] rounded-[12px] text-[#FFFFFF] text-2xl font-medium cursor-pointer">add account</button>
                </DialogTrigger>
                <DialogContent className=' w-full h-auto overflow-auto'>
                    <DialogHeader>
                        <DialogDescription>
                            <DataForm />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </section>
    )
}

export default ProfileHeader
