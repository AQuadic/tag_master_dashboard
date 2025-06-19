import { useAuthStore } from '@/stores/userStore';
import logo from '/images/Header/logo.svg'
import profile from '/images/Header/profile.png'
const Header = () => {
    const { user, setUser } = useAuthStore();

    return (
        <header className="container pt-4 flex items-center justify-between">
            <img src={logo} alt="logo" />
            <div className='flex items-center md:gap-6 gap-1'>
                <div>
                    <h1 className='text-[#000000] md:text-xl md:font-semibold'>{user?.name}</h1>
                    <p className="text-[#979797] md:text-lg md:font-semibold">Team Leader</p>
                </div>
                <img src={profile} alt="Profile" />
            </div>
        </header>
    )
}

export default Header
