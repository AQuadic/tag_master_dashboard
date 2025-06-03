import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import CardName from "../icons/paymentplan/CardName";
import CardNumber from "../icons/paymentplan/CardNumber";
const PaymentMethods = () => {
    return (
        <section>
            <Dialog>
                <form className="flex justify-end mb-8">
                    <DialogTrigger asChild className=''>
                        <button
                            className="w-[136px] h-[47px] border border-[#002847] text-[#002847] text-lg font-medium rounded-[12px]"
                        >
                            Add Payment
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] m-8">
                        <DialogHeader>
                            <DialogTitle className="text-[#000000] text-2xl font-medium mx-auto">Payment method details</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 px-2">
                            <div className="relative">
                                <label htmlFor="name" className="text-[#777777] text-lg">Card Name*</label>
                                <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    placeholder="ABCD  ABCD  ABCD"
                                    className="w-[450px] h-[58px] border rounded-[8px] mt-2 px-10"
                                />
                                <div className="absolute top-[55%] left-2">
                                    <CardName />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="name" className="text-[#777777] text-lg">Card Number*</label>
                                <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    placeholder="1234  5678  1122  4554"
                                    className="w-[450px] h-[58px] border rounded-[8px] mt-2 px-12"
                                />
                                <div className="absolute top-[55%] left-2">
                                    <CardNumber />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-[#777777] text-lg">Card Number*</label>
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        placeholder="00 / 00"
                                        className="w-[119px] h-[58px] border rounded-[8px] mt-2 px-2"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-[#777777] text-lg">Cvv*</label>
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        placeholder="123"
                                        className="w-[119px] h-[58px] border rounded-[8px] mt-2 px-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
            <div className="flex gap-18">
                <p className="text-[#000000] text-lg font-medium">Card Name</p>
                <p className="text-[#5A5A5A] text-lg font-medium">ABDELRAHMAN ESMAT ALI</p>
                <button className="text-[#002847] text-xl font-medium">Edit</button>
            </div>
            <div className="flex gap-12 mt-6">
                <p className="text-[#000000] text-lg font-medium">Card Number</p>
                <p className="text-[#5A5A5A] text-lg font-medium">**** **** **** 2234</p>
                <div>
                    <div className="flex gap-8">
                        <p className="text-[#000000] text-lg font-medium">Expire</p>
                        <p className="text-[#5A5A5A] text-lg font-medium">05/29</p>
                    </div>
                    <div className="flex items-center gap-14 mt-4">
                        <p className="text-[#000000] text-lg font-medium">Cvv</p>
                        <p className="text-[#5A5A5A] text-lg font-medium border px-4 rounded-[8px]">***</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentMethods
