import { getLinks } from '@/api/links'
import EditIcon from '../icons/myaccount/EditIcon'
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
import { useQuery } from 'react-query'
import Spinner from '../icons/general/Spinner'

const ManageLinks = () => {

    const { data: links = [], isLoading } = useQuery({
        queryKey: ["links"],
        queryFn: getLinks,
    });

    if (isLoading) {
        return <Spinner />
    }
    return (
        <section>
            <Dialog>
                <DialogTrigger className='ml-auto flex'>
                    <div className="mt-7 flex justify-end">
                        <button className="w-[140px] h-14 border-2 border-[#002847] rounded-[50px]">Add link</button>
                    </div>
                </DialogTrigger>
                <DialogContent className='lg:!max-w-[900px] w-full lg:h-auto h-[500px] overflow-auto'>
                    <DialogHeader>
                        <DialogDescription>
                            <AddLink />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {links.length === 0 ? (
                <div className='flex justify-center'>
                    <img src={emptyLinks} className='md:w-[600px] w-full md:h-[600px] h-full' alt="Empty state" />
                </div>
            ) : (
                <div className='mt-[28px]'>
                    {links.map((data) => (
                        <div
                            key={data.id}
                            className='w-full h-full bg-[#FFFFFF] rounded-[12px] py-[29px] md:px-[38px] px-4 mt-4 flex md:flex-row flex-col md:items-center justify-between'
                            style={{ boxShadow: '0px 1px 2px 0px #00000040' }}
                        >
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-[14px]'>
                                    <img
                                        src={data.image?.url}
                                        alt={data.name.en}
                                        className="w-[40px] h-[40px] object-contain"
                                    />
                                    <div className='text-[#000000] text-lg'>
                                        {data.name.en} <br />
                                        <span className='text-sm text-gray-500'>
                                            {data.category?.name.en}
                                        </span>
                                    </div>
                                </div>

                                <p className='text-[#002847] text-base font-medium mt-4 md:mt-0 break-all'>

                                </p>
                            </div>

                            <Dialog>
                                <DialogTrigger className='ml-auto flex'>
                                    <div className='flex items-center justify-center gap-2 w-[78px] h-10 border rounded-[25px] mt-4 md:mt-0 cursor-pointer'>
                                        <p className='text-[#002847] text-base'>Edit</p>
                                        <EditIcon />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className='lg:!max-w-[900px] w-full lg:h-auto h-[500px] overflow-auto'>
                                    <DialogHeader>
                                        <DialogDescription>
                                            <EditLink />
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}
export default ManageLinks
