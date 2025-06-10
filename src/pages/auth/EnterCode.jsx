import EnterCodeForm from '@/components/auth/entercode/EnterCodeForm'
import AuthBg from '/images/Auth/AuthBG.png'
const EnterCode = () => {
    return (
        <section className="container mt-44 flex items-center justify-center relative">
            <img src={AuthBg} alt="BG" className='absolute xl:left-56 left-5 top-[-20%] -z-10' />
            <EnterCodeForm />
        </section>
    )
}

export default EnterCode
