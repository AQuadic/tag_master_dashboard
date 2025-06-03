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
                                <button
                                    className="w-[136px] h-[47px] border border-[#002847] text-[#002847] text-lg font-medium rounded-[12px]"
                                >
                                    Add Address
                                </button>
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
