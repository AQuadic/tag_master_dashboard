import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import logo from '/images/Header/logo.svg'
import CardName from "../icons/paymentplan/CardName"
import Email from "../icons/analytics/Email"
import Flag from "../icons/profile/Flag"
import Phone from "../icons/profile/Phone"
import Lock from "../icons/profile/Lock"

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
                            <div className="flex flex-col items-center justify-between mt-6">
                                <img src={logo} alt="Logo" className="mx-auto" />
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        placeholder="Ali Elsayed"
                                        className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-2 px-10"
                                    />
                                    <div className="absolute top-[35%] left-2">
                                        <CardName />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="info@ali.com"
                                        className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-2 px-10"
                                    />
                                    <div className="absolute top-[45%] left-2">
                                        <Email />
                                    </div>
                                </div>

                                <div className="mt-6 flex md:flex-row flex-col items-center gap-[22px]">
                                    <div className="md:w-[101px] w-full h-[58px] border rounded-[8px] flex items-center justify-center gap-4">
                                        <Flag />
                                        <p>20</p>
                                    </div>
                                    <div className="relative">
                                        <input type="phone" name="phone" id="phone" className="md:w-[327px] w-full h-[58px] border rounded-[8px] px-9" placeholder="971-123456789" />
                                        <div className="absolute top-[35%] left-2">
                                            <Phone />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input type="password" name="password" id="password" className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-6 px-9" placeholder="**********" />
                                    <div className="absolute top-[50%] left-2">
                                        <Lock />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input type="password" name="password" id="password" className="md:w-[450px] w-full h-[58px] border rounded-[8px] mt-6 px-9" placeholder="**********" />
                                    <div className="absolute top-[50%] left-2">
                                        <Lock />
                                    </div>
                                </div>

                                <button className="w-[255px] h-[59px] bg-[#002847] rounded-[12px] text-[#FFFFFF] text-2xl font-medium mt-8">Confirm</button>
                                <p className="text-[#FD0000] text-2xl mt-5">Cancel</p>

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </section>
    )
}

export default ProfileHeader
