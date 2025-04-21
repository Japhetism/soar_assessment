import { useLocation } from 'react-router-dom';
import UserImage from '../../assets/images/user.webp';
import BELL_SVG from '../../assets/icons/bell';
import COG_SVG from '../../assets/icons/cog';
import SearchInput from '../searchInput';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getPathname = () => {
    if (pathname === "/" || pathname === "/dashboard") {
      return "Overview"
    }
    const trimPathname = pathname.replace(/^\/+/, '');
    return trimPathname.charAt(0).toUpperCase() + trimPathname.slice(1); 
  }

  return (
    <header className="bg-[#FFF] text-white border-b-[1px]" role="banner">
      <div className="flex justify-between items-center p-4 px-10">
        <div className="w-full md:w-auto flex justify-center md:justify-start lg:ml-[0px] ml-[20px]" aria-label="Page Title">
          <span className="text-[#343C6A] lg:text-[28px] text-[20px] font-semibold font-inter">{getPathname()}</span>
        </div>
        
        <div className="flex items-center space-x-10">
          <div className="hidden md:flex">
            <SearchInput
              placeholder="Search for something"
              onSearch={() => {}}
              aria-label="Search for something"
            />
          </div>
          
          <div className="hidden md:flex space-x-4 items-center">
            <div
              tabIndex={0}
              role="button"
              aria-label="Settings"
              className="bg-[#F5F7FA] w-[50px] h-[50px] rounded-full flex items-center justify-center"
            >
              <COG_SVG />
            </div>
            <div
              tabIndex={0}
              role="button"
              aria-label="Notifications"
              className="bg-[#F5F7FA] w-[50px] h-[50px] rounded-full flex items-center justify-center"
            >
              <BELL_SVG />
            </div>
          </div>
          
          <img
            loading="lazy"
            src={UserImage}
            alt="User Profile"
            className="w-[60px] h-[60px] rounded-full"
          />
        </div>
      </div>
      <div className="w-full px-4 pb-4 lg:hidden">
        <SearchInput
          placeholder="Search for something"
          onSearch={() => {}}
          aria-label="Search for something"
        />
      </div>
    </header>
  );
};

export default Header;
