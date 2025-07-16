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
                    <p className="text-[#979797] md:text-lg md:font-semibold">{user?.email}</p>
                </div>
                <img src={user?.image?.url || profile} alt="Profile" className="w-[72px] h-[72px] rounded-full object-cover" />
            </div>
        </header>
    )
}

export default Header
