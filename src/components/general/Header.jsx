import logo from '/images/Header/logo.svg'
import profile from '/images/Header/profile.png'
const Header = () => {
    return (
        <header className="container pt-4 flex items-center justify-between">
            <img src={logo} alt="logo" />
            <div className='flex items-center gap-6'>
                <div>
                    <h1 className='text-[#000000] text-xl font-semibold'>Walid Sayed</h1>
                    <p className="text-[#979797] text-lg font-semibold">Team Leader</p>
                </div>
                <img src={profile} alt="Profile" />
            </div>
        </header>
    )
}

export default Header
