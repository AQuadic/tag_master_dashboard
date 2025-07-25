import Download from "../icons/paymentHistory/Download"

const PaymentHistory = () => {
    return (
        <section>
            <div className="relative overflow-x-auto">
                <table className="w-full">
                    <thead className="text-[#000000] text-base font-medium">
                        <tr>
                            <th scope="col" className="px-2 py-3">Order id</th>
                            <th scope="col" className="px-2 py-3">Date</th>
                            <th scope="col" className="px-2 py-3">Plan</th>
                            <th scope="col" className="px-2 py-3">Amount</th>
                            <th scope="col" className="px-2 py-3">
                                <button className="w-[139px] h-[47px] border border-[#002847] rounded-[12px] text-[#002847] text-lg font-medium">Download All</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">#1324</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">12 feb 2024</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">Plus</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">12$</td>
                            <td className="px-6 py-4 font-medium text-[#002847] text-center text-sm flex items-center gap-10">
                                <p>View</p>
                                <Download />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">#1324</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">12 feb 2024</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">Pro</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">8$</td>
                            <td className="px-6 py-4 font-medium text-[#002847] text-center text-sm flex items-center gap-10">
                                <p>View</p>
                                <Download />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">#1324</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">12 feb 2024</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">Plus</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">12$</td>
                            <td className="px-6 py-4 font-medium text-[#002847] text-center text-sm flex items-center gap-10">
                                <p>View</p>
                                <Download />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">#1324</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">12 feb 2024</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">Pro</td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-sm">8$</td>
                            <td className="px-6 py-4 font-medium text-[#002847] text-center text-sm flex items-center gap-10">
                                <p>View</p>
                                <Download />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default PaymentHistory
