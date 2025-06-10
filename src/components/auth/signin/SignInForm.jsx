import { Link } from 'react-router'
import logo from '/images/Header/logo.svg'
const SignInForm = () => {
    return (
        <section className="md:w-[637px] w-full md:h-[636px] bg-[#FBFBFB] rounded-2xl md:py-16 py-4 px-4">
            <div className='flex flex-col items-center'>
                <img src={logo} alt="Logo" />
                <h1 className='text-[#000000] text-[25px] font-bold mt-8'>تسجيل الدخول</h1>
                <p className='text-[#9C9C9C] text-lg mt-2.5 text-center'>أدخل البريد الالكتروني وكلمة السر لتسجيل الدخول</p>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className='md:w-[400px] w-full h-14 rounded-[12px] border-[0.5px] border-black focus:outline-none mt-[33px] bg-white px-4'
                    placeholder='الإيميل'
                    dir='rtl'
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    className='md:w-[400px] w-full h-14 rounded-[12px] border-[0.5px] border-black focus:outline-none mt-6 bg-white px-4'
                    placeholder='كلمة المرور'
                    dir='rtl'
                />
                <div className='mt-3 flex md:gap-56 gap-32'>
                    <Link to='' className='text-[#003758] text-sm'>نسيت كلمة المرور</Link>
                    <div className="flex items-center mb-4">
                        <label htmlFor="default-checkbox" className="mx-2 text-sm font-normal text-[#4A4A4A]">تذكرني</label>
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2" />
                    </div>
                </div>
                <button className='md:w-[400px] w-full h-14 bg-[#003758] rounded-[12px] mt-6 text-[#FFFFFF] text-lg'>تسجيل الدخول</button>
                <div className="md:w-[400px] text-right mt-8">
                    <Link to="" className="text-[#003758] text-sm">شروط الخصوصية</Link>
                </div>
            </div>
        </section>
    )
}

export default SignInForm
