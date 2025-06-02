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

const PaymentAddress = () => {
    return (
        <section>
            <div className="relative overflow-x-auto">
                <table className="w-full">
                    <thead className="text-[#000000] text-base font-medium">
                        <tr>
                            <th scope="col" className="px-2 py-3">Country</th>
                            <th scope="col" className="px-2 py-3">City</th>
                            <th scope="col" className="px-2 py-3">Address</th>
                            <th scope="col" className="px-2 py-3">Zip code</th>
                            <th scope="col" className="px-2 py-3">
                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <button
                                                className="w-[136px] h-[47px] border border-[#002847] text-[#002847] text-lg font-medium rounded-[12px]"
                                            >
                                                Add Address
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
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">Egypt</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">Giza</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">12 elomez st..</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">11612</td>
                            <td className="px-6 py-4 font-medium text-[#002847] text-center text-sm">Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PaymentAddress;
