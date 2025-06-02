import { useState } from 'react';
import CurrentPlan from './CurrentPlan';
import PaymentHistory from './PaymentHistory';
import PaymentAddress from './PaymentAddress';
import PaymentMethods from './PaymentMethods';

const PaymentSidebar = () => {
    const [selectedItem, setSelectedItem] = useState('currentPlan');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <section className="flex gap-8 mt-36">
            <div className="text-[22px] font-medium">
                <p
                    className={`mt-4 cursor-pointer ${selectedItem === 'currentPlan' ? 'text-black' : 'text-gray-400'
                        }`}
                    onClick={() => handleItemClick('currentPlan')}
                >
                    Current Plan
                </p>
                <p
                    className={`mt-4 cursor-pointer ${selectedItem === 'paymentHistory' ? 'text-black' : 'text-gray-400'
                        }`}
                    onClick={() => handleItemClick('paymentHistory')}
                >
                    Payment History
                </p>
                <p
                    className={`mt-4 cursor-pointer ${selectedItem === 'paymentAddress' ? 'text-black' : 'text-gray-400'
                        }`}
                    onClick={() => handleItemClick('paymentAddress')}
                >
                    Payment Address
                </p>
                <p
                    className={`mt-4 cursor-pointer ${selectedItem === 'paymentMethods' ? 'text-black' : 'text-gray-400'
                        }`}
                    onClick={() => handleItemClick('paymentMethods')}
                >
                    Payment Methods
                </p>
            </div>

            <div className="w-px h-auto bg-black" />

            <div className="flex-1">
                {selectedItem === 'currentPlan' && <CurrentPlan />}
                {selectedItem === 'paymentHistory' && <PaymentHistory />}
                {selectedItem === 'paymentAddress' && <PaymentAddress />}
                {selectedItem === 'paymentMethods' && <PaymentMethods />}
            </div>
        </section>
    );
};

export default PaymentSidebar;
