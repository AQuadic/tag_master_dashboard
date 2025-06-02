const CurrentPlan = () => {
    return (
        <section>
            <div className="relative overflow-x-auto">
                <table className="w-full text-left rtl:text-right">
                    <thead className="text-[#000000] text-base font-medium">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Name Plan
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Start Date
                            </th>
                            <th scope="col" className="px-2 py-3">
                                End Date
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Renewal Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <th scope="row" className="px-6 py-4 font-medium text-[#5A5A5A] text-xs">
                                Plus
                            </th>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-xs">
                                Active
                            </td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-xs">
                                12 feb 2025
                            </td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-xs">
                                12 feb 2025
                            </td>
                            <td className="px-6 py-4 font-medium text-[#5A5A5A] text-xs">
                                12 feb 2025
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-20">
                <button className="w-[255px] h-[59px] bg-[#002847] rounded-[12px] text-[#FFFFFF] text-2xl font-medium cursor-pointer">Upgrade plan</button>
            </div>
        </section>
    )
}

export default CurrentPlan
