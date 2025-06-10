import { Link } from 'react-router'
import logo from '/images/Header/logo.svg'
import { useRef } from 'react';

const EnterCodeForm = () => {
    const inputs = useRef([]);

    const handleKeyPress = (event, index) => {
        const input = event.target;
        const prevInput = index > 0 ? inputs.current[index - 1] : null;
        const nextInput = index < inputs.current.length - 1 ? inputs.current[index + 1] : null;

        if (input.value.length === 0 && prevInput) {
            prevInput.focus();
        } else if (input.value.length > 0 && nextInput) {
            nextInput.focus();
        }
    };

    const handlePaste = (event) => {
        event.preventDefault();
        const pasteData = event.clipboardData.getData('text');
        const digits = pasteData.replace(/\D/g, '');

        inputs.current.forEach((input, index) => {
            if (digits[index]) {
                input.value = digits[index];

                const nextInput = index < inputs.current.length - 1 ? inputs.current[index + 1] : null;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });
    };

    return (
        <section className="md:w-[637px] w-full md:h-[636px] bg-[#FBFBFB] rounded-2xl md:py-32 py-4 px-4">
            <div className='flex flex-col items-center'>
                <img src={logo} alt="Logo" />
                <h1 className='text-[#000000] text-[25px] font-bold mt-8'>أدخل الرمز</h1>
                <p className='text-[#4A4A4A] text-lg mt-2.5 text-center'>أدخل الرمز المرسل الي a******32@gmail.com</p>
                <form className="max-w-sm mx-auto">
                    <div className="flex mb-2 space-x-8 rtl:space-x-reverse mt-8">
                        {[...Array(5)].map((_, index) => (
                            <div key={index}>
                                <label htmlFor={`code-${index + 1}`} className="sr-only">
                                    {`Digit ${index + 1}`}
                                </label>
                                <input
                                    ref={(el) => (inputs.current[index] = el)}
                                    type="text"
                                    maxLength="1"
                                    id={`code-${index + 1}`}
                                    className="w-9 h-12 text-center text-lg font-bold text-gray-900 border-b-2 border-gray-400 focus:outline-none"
                                    required
                                    onKeyUp={(e) => handleKeyPress(e, index)}
                                    onPaste={handlePaste}
                                />
                            </div>
                        ))}
                    </div>
                </form>
                <button className='md:w-[400px] w-full h-14 bg-[#003758] rounded-[12px] mt-6 text-[#FFFFFF] text-lg'>تأكيد</button>
                <div className="md:w-[400px] text-right mt-3">
                    <Link to="" className="text-[#007EC1] text-sm">شروط الخصوصية</Link>
                </div>
            </div>
        </section>
    )
}

export default EnterCodeForm
