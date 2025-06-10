import { useState } from 'react'
import GreenCheck from '@/components/icons/newpassword/GreenCheck'
import logo from '/images/Header/logo.svg'
import GrayCheck from '@/components/icons/newpassword/GrayCheck'

const NewPasswordForm = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const hasUpperAndLowerCase = (password) => {
        return /[a-z]/.test(password) && /[A-Z]/.test(password)
    }

    const hasSpecialCharacters = (password) => {
        return /[@%*!#$^&]/.test(password)
    }

    const hasMinimumLength = (password) => {
        return password.length >= 6
    }

    const passwordsMatch = () => {
        return password === confirmPassword && password !== '' && confirmPassword !== ''
    }

    const validations = {
        upperLower: hasUpperAndLowerCase(password),
        specialChars: hasSpecialCharacters(password),
        minLength: hasMinimumLength(password),
        match: passwordsMatch()
    }

    return (
        <section className="md:w-[637px] w-full md:h-[636px] bg-[#FBFBFB] rounded-2xl md:py-8 py-4 px-4">
            <div className='flex flex-col items-center'>
                <img src={logo} alt="Logo" />
                <h1 className='text-[#000000] text-[25px] font-bold mt-8'>إعادة تعيين كلمة المرور</h1>
                <p className='text-[#9C9C9C] text-lg mt-2.5 text-center'>أدخل كلمة مرور قوية تتألف من أرقام وحروف ورمز</p>

                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='md:w-[400px] w-full h-14 rounded-[12px] border-[0.5px] border-black focus:outline-none mt-[33px] bg-white px-4'
                    placeholder='كلمة المرور الجديدة'
                    dir='rtl'
                />

                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='md:w-[400px] w-full h-14 rounded-[12px] border-[0.5px] border-black focus:outline-none mt-6 bg-white px-4'
                    placeholder='إعادة إدخال كلمة المرور'
                    dir='rtl'
                />

                <button className='md:w-[400px] w-full h-14 bg-[#003758] rounded-[12px] mt-6 text-[#FFFFFF] text-lg'>
                    تسجيل الدخول
                </button>

                <div className='flex flex-col items-end gap-3 md:w-[400px] w-full mt-8'>
                    <div className='flex items-center gap-3'>
                        <p className={`text-base ${validations.upperLower ? 'text-[#190A0A]' : 'text-[#7C7C7C]'}`}>
                            تتضمن أحرف كبيره وأحرف صغيرة
                        </p>
                        {validations.upperLower ? <GreenCheck /> : <GrayCheck />}
                    </div>

                    <div className='flex items-center gap-3'>
                        <p className={`text-base ${validations.specialChars ? 'text-[#190A0A]' : 'text-[#7C7C7C]'}`}>
                            تتضمن رموزا مثل @ % *
                        </p>
                        {validations.specialChars ? <GreenCheck /> : <GrayCheck />}
                    </div>

                    <div className='flex items-center gap-3'>
                        <p className={`text-base ${validations.minLength ? 'text-[#190A0A]' : 'text-[#7C7C7C]'}`}>
                            لا يقل عدد الأرقام عن 6 أرقام
                        </p>
                        {validations.minLength ? <GreenCheck /> : <GrayCheck />}
                    </div>

                    <div className='flex items-center gap-3'>
                        <p className={`text-base ${validations.match ? 'text-[#190A0A]' : 'text-[#7C7C7C]'}`}>
                            تطابق كلمة المرور
                        </p>
                        {validations.match ? <GreenCheck /> : <GrayCheck />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewPasswordForm