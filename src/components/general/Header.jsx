import { useAuthStore } from "@/stores/userStore";
import logo from "/images/Header/logo.svg";
import profile from "/images/Header/profile.png";
const Header = () => {
  const { user } = useAuthStore();

  return (
    <header className="=  fixed bg-white w-full z-10 shadow-md px-6 left-0 right">
      <div className="container py-3 flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="flex items-center md:gap-6 gap-1">
          <div>
            <h1 className="text-[#000000] md:text-xl text-xs md:font-semibold">
              {user?.name}
            </h1>
            <p className="text-[#979797] md:text-lg text-xs md:font-semibold">
              {user?.email}
            </p>
          </div>
          <img
            src={user?.image?.url || profile}
            alt="Profile"
            className="md:w-[72px] w-10 md:h-[72px] h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
