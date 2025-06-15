import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import logo from '/images/Header/logo.svg'
import { postLogin } from '@/api/auth'
import { toast } from 'react-hot-toast'
import { useAuthStore } from '@/stores/userStore'
import Cookies from 'js-cookie'

const SignInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const setUser = useAuthStore((state) => state.setUser);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await postLogin({ email, password });
            setUser(response.user);

            if (rememberMe) {
                Cookies.set("Tag_master_admin", response.token, { expires: 7, path: "/" });
            } else {
                Cookies.set("Tag_master_admin", response.token, { path: "/" });
            }

            toast.success('تم تسجيل الدخول بنجاح');
            navigate("/dashboard");
        } catch (err) {
            const msg =
                err?.response?.data?.message ||
                err?.response?.data?.errors?.password?.[0] ||
                'حدث خطأ أثناء تسجيل الدخول';
            toast.error(msg);
        }
    };


    return (
        <section className="md:w-[637px] w-full md:h-[636px] bg-[#FBFBFB] rounded-2xl md:py-16 py-4 px-4">
            <div className='flex flex-col items-center'>
                <img src={logo} alt="Logo" />
                <h1 className='text-[#000000] text-[25px] font-bold mt-8'>تسجيل الدخول</h1>
                <p className='text-[#9C9C9C] text-lg mt-2.5 text-center'>
                    أدخل البريد الالكتروني وكلمة السر لتسجيل الدخول
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='md:w-[400px] w-full h-14 rounded-[12px] border-[0.5px] border-black focus:outline-none mt-[33px] bg-white px-4'
                        placeholder='الإيميل'
                        dir='rtl'
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='md:w-[400px] w-full h-14 rounded-[12px] border-[0.5px] border-black focus:outline-none mt-6 bg-white px-4'
                        placeholder='كلمة المرور'
                        dir='rtl'
                        required
                    />

                    <div className='mt-3 flex md:gap-56 gap-32'>
                        <Link to='' className='text-[#003758] text-sm'>نسيت كلمة المرور</Link>
                        <div className="flex items-center mb-4">
                            <label htmlFor="rememberMe" className="mx-2 text-sm font-normal text-[#4A4A4A]">تذكرني</label>
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                            />
                        </div>
                    </div>

                    <button type="submit" className='md:w-[400px] w-full h-14 bg-[#003758] rounded-[12px] mt-6 text-[#FFFFFF] text-lg cursor-pointer'>تسجيل الدخول</button>
                </form>
                <div className="md:w-[400px] text-right mt-8">
                    <Link to="" className="text-[#003758] text-sm">شروط الخصوصية</Link>
                </div>
            </div>
        </section>
    )
}

export default SignInForm
