import { useQuery } from "react-query"
import Download from "../icons/paymentHistory/Download"
import { getSubscriptions } from "@/api/subscriptions"

const Table = () => {
    const { data: subscriptions } = useQuery({
        queryKey: ["subscriptions"],
        queryFn: getSubscriptions,
    });

    return (
        <section className="mt-[42px]">
            <div className="w-[175px] md:w-[550px] lg:w-full overflow-x-auto">
                <table className="min-w-[700px] w-full">
                    <thead className="text-[#000000] text-base font-medium bg-[#F4F4F4]">
                        <tr>
                            <th scope="col" className="py-3">Order id</th>
                            <th scope="col" className="py-3">Start date</th>
                            <th scope="col" className="py-3">End date</th>
                            <th scope="col" className="py-3">Status</th>
                            <th scope="col" className="py-3">Plan</th>
                            <th scope="col" className="py-3">Amount</th>
                            <th scope="col" className="py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions?.data.map((subscription) => (
                            <tr key={subscription.id}>
                                <td className="text-center px-6 py-4 font-medium text-[#5A5A5A] text-sm">#{subscription.id}</td>
                                <td className="text-center px-6 py-4 font-medium text-[#5A5A5A] text-sm">{new Date(subscription.start_date).toLocaleDateString()}</td>
                                <td className="text-center px-6 py-4 font-medium text-[#5A5A5A] text-sm">{new Date(subscription.end_date).toLocaleDateString()}</td>
                                <td className="text-center px-6 py-4 font-medium text-[#5A5A5A] text-sm">{subscription.status}</td>
                                <td className="text-center px-6 py-4 font-medium text-[#5A5A5A] text-sm">{subscription.plan.name.en}</td>
                                <td className="text-center px-6 py-4 font-medium text-[#5A5A5A] text-sm">${subscription.plan.price}</td>
                                <td className="px-6 py-4 font-medium text-[#002847] text-center text-sm flex items-center justify-center gap-10">
                                    <p>View</p>
                                    <Download />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Table
