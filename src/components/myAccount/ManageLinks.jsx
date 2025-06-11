import EditIcon from '../icons/myaccount/EditIcon'
import Instagram from '../icons/myaccount/Instagram'
import LinkedIn from '../icons/myaccount/LinkedIn'
import Tiktok from '../icons/myaccount/Tiktok'
import Whatsapp from '../icons/myaccount/Whatsapp'
import AddLink from './AddLink'
import EditLink from './EditLink'
import emptyLinks from '/images/Account/emptyLinks.png'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

const ManageLinks = () => {
    const LinksData = [
        {
            icon: <LinkedIn />,
            title: 'Linked in',
            link: 'https://www.linkedin.com',
        },
        {
            icon: <Whatsapp />,
            title: 'Whatsapp',
            link: 'https://www.linkedin.com',
        },
        {
            icon: <Instagram />,
            title: 'Instagram',
            link: 'https://www.linkedin.com',
        },
        {
            icon: <Tiktok />,
            title: 'Tiktok',
            link: 'https://www.linkedin.com',
        },
    ]
    return (
        <section>
            <Dialog>
                <DialogTrigger className='ml-auto flex'>
                    <div className="mt-7 flex justify-end">
                        <button className="w-[140px] h-14 border-2 border-[#002847] rounded-[50px]">Add link</button>
                    </div>
                </DialogTrigger>
                <DialogContent className='lg:!max-w-[900px] w-full h-full overflow-auto'>
                    <DialogHeader>
                        <DialogDescription>
                            <AddLink />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <div className='flex justify-center hidden'>
                <img src={emptyLinks} className='md:w-[600px] w-full md:h-[600px] h-full' alt="Empty state" />
            </div>

            <div className='mt-[28px]'>
                {LinksData.map((data, index) => {
                    return (
                        <div key={index} className='w-full h-full bg-[#FFFFFF] rounded-[12px] py-[29px] md:px-[38px] px-4 mt-4 flex  md:flex-row flex-col md:items-center justify-between' style={{ boxShadow: '0px 1px 2px 0px #00000040' }}>
                            <div className='flex items-center gap-[14px]'>
                                {data.icon}
                                <p className='text-[#000000] text-lg'>{data.title}</p>
                            </div>
                            <p className='text-[#002847] text-base font-medium mt-4 md:mt-0'>{data.link}</p>

                            <Dialog>
                                <DialogTrigger className='ml-auto flex'>
                                    <div className='flex items-center justify-center gap-2 w-[78px] h-10 border rounded-[25px] mt-4 md:mt-0 cursor-pointer'>
                                        <p className='text-[#002847] text-base'>Edit</p>
                                        <EditIcon />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className='lg:!max-w-[900px] w-full h-full overflow-auto'>
                                    <DialogHeader>
                                        <DialogDescription>
                                            <EditLink />
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ManageLinks
