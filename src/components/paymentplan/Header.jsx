import ActiveStatus from "../icons/dashboard/ActiveStatus"
import Pro from "../icons/paymentplan/Pro"

const Header = () => {
    return (
        <section className="w-full h-full rounded-[12px] md:px-[60px] px-4 py-[18px]" style={{ boxShadow: '0px 1px 2px 0px #00000040' }}>
            <div className="flex lg:flex-row flex-col justify-between">
                <div className="lg:mt-0 mt-4">
                    <h2 className="text-[#000000] text-xl font-medium">Package name</h2>
                    <p className="flex items-center gap-4 lg:mt-[23px] mt-4">
                        <Pro />
                        <span className="text-[#000000] text-xl font-normal">Companies</span>
                    </p>
                </div>

                <div className="lg:mt-0 mt-4">
                    <h2 className="text-[#000000] text-xl font-medium">Package name</h2>
                    <p className="flex items-center gap-4 lg:mt-[23px] mt-4">
                        <span className="text-[#000000] text-xl font-normal">Active</span>
                        <ActiveStatus />
                    </p>
                </div>

                <div className="lg:mt-0 mt-4">
                    <h2 className="text-[#000000] text-xl font-medium">Start date</h2>
                    <p className="text-[#000000] text-xl font-normal lg:mt-[23px] mt-4">20\10\2025</p>
                </div>

                <div className="lg:mt-0 mt-4">
                    <h2 className="text-[#000000] text-xl font-medium">Expiration date</h2>
                    <p className="text-[#000000] text-xl font-normal lg:mt-[23px] mt-4">20\10\2027</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="md:w-[255px] w-full h-[59px] bg-[#9C9C9C] rounded-[12px] text-[#FFFFFF] text-2xl font-medium mt-11">Upgrade</button>
            </div>
        </section>
    )
}

export default Header
