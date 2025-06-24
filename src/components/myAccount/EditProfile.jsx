import { Link } from 'react-router'
import tagmaster from '../../../public/images/Account/tagmaster.png'
import EditIcon from '../icons/myaccount/EditIcon'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import DataForm from "../general/DataForm"
import { deleteAccount } from '@/api/auth'
import toast from 'react-hot-toast'
import { useAuthStore } from '@/stores/userStore'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { updateUser } from '@/api/user'

const EditProfile = () => {
    const { user, setUser } = useAuthStore();
    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [isEditOpen, setEditOpen] = useState(false);

    const handleDeleteAccount = async () => {
        try {
            await deleteAccount();
            toast.success("Account deleted successfully");
            setUser(null);
            Cookies.remove("Tag_master_admin");
            window.location.href = "/signin";
        } catch {
            toast.error("Failed to delete account");
        } finally {
            setDeleteOpen(false);
        }
    };

    return (
        <section>
            <div className="flex md:flex-row flex-col md:items-center justify-between w-full h-full bg-[#FFFFFF] rounded-[12px] mt-7 py-6 px-[38px]" style={{ boxShadow: '0px 1px 2px 0px #00000040' }}>
                <div className='flex md:flex-row flex-col md:items-center gap-4'>
                    <img className='w-[72px] h-[72px] rounded-full' src={tagmaster} alt="logo" />
                    <div>
                        <h1 className='text-black md:text-xl text-sm font-medium'>{user?.name || "Tag Master"}</h1>
                        <p className='text-[#4A4A4A] md:text-lg text-xs md:mt-3 mt-1'>{user?.bio || "Technology Solutions"}</p>
                    </div>
                </div>
                {/* <div className='flex items-center justify-center gap-2 w-[78px] h-10 border rounded-[25px] mt-4 md:mt-0'>
                    <p className='text-[#002847] text-base'>Edit</p>
                    <EditIcon />
                </div> */}
            </div>

            <div className="flex md:flex-row flex-col items-center justify-between w-full h-full bg-[#FFFFFF] rounded-[12px] mt-7 py-4 px-[38px]" style={{ boxShadow: '0px 1px 2px 0px #00000040' }}>
                <div>
                    <h1 className='text-[#000000] md:text-xl text-sm font-medium'>Company information</h1>
                    <div className=' flex lg:flex-row flex-col lg:gap-44'>
                        <div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Name</h1>
                                <p className='text-[#000000] md:text-base text-xs mt-1.5'>{user?.name}</p>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Email</h1>
                                <p className='text-[#000000] md:text-base text-xs mt-1.5'>{user?.email}</p>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Plan</h1>
                                <p className='text-[#000000] md:text-base text-xs mt-1.5'>PRO</p>
                            </div>
                        </div>
                        <div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Phone</h1>
                                <p className='text-[#000000] md:text-base text-xs mt-1.5'>
                                    {user?.phone
                                        ? user.phone_verified_at
                                            ? user.phone
                                            : "Pending verification"
                                        : "Not added yet"}
                                </p>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Bio</h1>
                                <p className='text-black md:text-base text-xs mt-1.5'>{user?.bio || "Technology Solutions"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Dialog open={isEditOpen} onOpenChange={setEditOpen}>
                    <DialogTrigger asChild>
                        <div className='flex items-center justify-center gap-2 w-[78px] h-10 border rounded-[25px] mt-4 md:mt-0 cursor-pointer'>
                            <p className='text-[#002847] text-base'>Edit</p>
                            <EditIcon />
                        </div>
                    </DialogTrigger>
                    <DialogContent className=' w-full lg:h-auto h-full overflow-auto'>
                        <DialogHeader>
                            <DialogDescription>
                                <DataForm
                                    onSubmit={updateUser}
                                    onFinish={() => setEditOpen(false)}
                                    user={user}
                                    setUser={setUser}
                                />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-between mt-7 w-full'>
                <Dialog open={isDeleteOpen} onOpenChange={setDeleteOpen}>
                    <DialogTrigger asChild>
                        <h1 className='text-[#DC362E] text-xl font-medium cursor-pointer'>Delete Account</h1>
                    </DialogTrigger>
                    <DialogContent className='w-full h-auto overflow-auto'>
                        <DialogHeader>
                            <DialogDescription>
                                <div className='w-full h-full bg-white rounded-2xl'>
                                    <h1 className='text-black text-xl font-medium'>Are you sure you want to delete account?</h1>
                                    <div className="flex gap-3 mt-4">
                                        <button
                                            onClick={handleDeleteAccount}
                                            className="flex-1 px-4 py-2 text-white bg-[#002847] hover:bg-[#003a5f] rounded-lg font-medium transition-colors"
                                        >
                                            Confirm
                                        </button>
                                        <button
                                            onClick={() => setDeleteOpen(false)}
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
                <Link to='' className='text-[#002847] text-xl font-medium'>Privacy Policy</Link>
            </div>
        </section>
    )
}

export default EditProfile
