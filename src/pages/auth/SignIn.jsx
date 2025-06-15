import SignInForm from '@/components/auth/signin/SignInForm'
import AuthBg from '/images/Auth/AuthBG.png'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const SignIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("Tag_master_admin");
        if (token) {
            navigate("/dashboard", { replace: true });
        }
    }, [navigate]);

    return (
        <section className="container mt-44 flex items-center justify-center relative">
            <img src={AuthBg} alt="BG" className='absolute xl:left-56 left-5 top-[-20%] -z-10' />
            <SignInForm />
        </section>
    )
}

export default SignIn
