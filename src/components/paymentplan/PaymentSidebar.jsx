import { useState } from 'react';
import { motion } from 'framer-motion';
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

            <motion.div className="flex-1" key={selectedItem} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}

            >
                {selectedItem === 'currentPlan' && <CurrentPlan />}
                {selectedItem === 'paymentHistory' && <PaymentHistory />}
                {selectedItem === 'paymentAddress' && <PaymentAddress />}
                {selectedItem === 'paymentMethods' && <PaymentMethods />}
            </motion.div>
        </section>
    );
};

export default PaymentSidebar;
