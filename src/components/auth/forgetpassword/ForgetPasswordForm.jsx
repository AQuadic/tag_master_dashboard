import { Link } from 'react-router'
import logo from '/images/Header/logo.svg'
const ForgetPasswordForm = () => {
    return (
        <section className="md:w-[637px] w-full md:h-[636px] bg-[#FBFBFB] rounded-2xl md:py-16 py-4 px-4">
            <div className='flex flex-col items-center'>
                <img src={logo} alt="Logo" />
                <h1 className='text-[#000000] text-[25px] font-bold mt-8'>نسيت كلمة السر</h1>
                <p className='text-[#4A4A4A] text-lg mt-2.5 text-center md:w-[370px]'>اكتب الإيميل المرتبط بالحساب لاستلام الرمز وإعادة تعيين كلمة المرور</p>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className='md:w-[400px] w-full h-14 rounded-[12px] border-[0.5px] border-black focus:outline-none mt-[33px] bg-white px-4'
                    placeholder='الإيميل'
                    dir='rtl'
                />
                <button className='md:w-[400px] w-full h-14 bg-[#003758] rounded-[12px] mt-6 text-[#FFFFFF] text-lg'>إرسال الرمز</button>
                <div className="md:w-[400px] text-right mt-8">
                    <Link to='/signin' className="text-[#007EC1] text-sm">تسجيل الدخول باستخدام حساب آخر</Link>
                </div>
                <div className="md:w-[400px] text-right mt-3">
                    <Link to="" className="text-[#007EC1] text-sm">شروط الخصوصية</Link>
                </div>
            </div>
        </section>
    )
}

export default ForgetPasswordForm
