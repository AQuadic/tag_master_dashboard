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

const EditProfile = () => {
    return (
        <section>
            <div className="flex md:flex-row flex-col md:items-center justify-between lg:w-full w-full h-full bg-[#FFFFFF] rounded-[12px] mt-7 py-6 px-[38px]" style={{ boxShadow: '0px 1px 2px 0px #00000040' }}>
                <div className='flex md:flex-row flex-col md:items-center gap-4'>
                    <img className='w-[72px] h-[72px] rounded-full' src={tagmaster} alt="logo" />
                    <div>
                        <h1 className='text-[#000000] text-xl font-medium'>Tag Master</h1>
                        <p className='text-[#4A4A4A] text-lg mt-3'>Technology Solutions</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 w-[78px] h-10 border rounded-[25px] mt-4 md:mt-0'>
                    <p className='text-[#002847] text-base'>Edit</p>
                    <EditIcon />
                </div>
            </div>

            <div className="flex md:flex-row flex-col items-center justify-between lg:w-full w-full h-full bg-[#FFFFFF] rounded-[12px] mt-7 py-4 px-[38px]" style={{ boxShadow: '0px 1px 2px 0px #00000040' }}>
                <div>
                    <h1 className='text-[#000000] text-xl font-medium'>Company information</h1>
                    <div className=' flex lg:flex-row flex-col lg:gap-44'>
                        <div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Name</h1>
                                <p className='text-[#000000] text-base mt-1.5-'>Tag Master</p>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Email</h1>
                                <p className='text-[#000000] text-base mt-1.5-'>info@tagmaster.com</p>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Plan</h1>
                                <p className='text-[#000000] text-base mt-1.5-'>PRO</p>
                            </div>
                        </div>
                        <div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Phone</h1>
                                <p className='text-[#000000] text-base mt-1.5-'>971 23134567</p>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-[#4A4A4A] text-sm'>Bio</h1>
                                <p className='text-[#000000] text-base mt-1.5-'>Technology Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Dialog>
                    <DialogTrigger>
                        <div className='flex items-center justify-center gap-2 w-[78px] h-10 border rounded-[25px] mt-4 md:mt-0 cursor-pointer'>
                            <p className='text-[#002847] text-base'>Edit</p>
                            <EditIcon />
                        </div>
                    </DialogTrigger>
                    <DialogContent className=' w-full h-auto overflow-auto'>
                        <DialogHeader>
                            <DialogDescription>
                                <DataForm />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-between mt-7 w-full'>
                <h1 className='text-[#DC362E] text-xl font-medium'>Delete Account</h1>
                <Link to='' className='text-[#002847] text-xl font-medium'>Privacy Policy</Link>
            </div>
        </section>
    )
}

export default EditProfile
