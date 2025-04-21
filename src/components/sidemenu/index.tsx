import React, { useState } from "react";
import { menus } from "./menus";
import { MenuItem } from "./menuItem";
import { IMenu } from "../../interfaces";
import CLOSE_SVG from "../../assets/icons/close";
import TASK_SVG from "../../assets/icons/task";
import HAMBURGER_SVG from "../../assets/icons/hamburger";

const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        role="navigation"
        aria-label="Main Navigation"
        className="lg:w-[250px] border-[1px] border-[#E6EFF5] w-0 h-screen bg-[#FFF] shadow-lg flex flex-col justify-start items-center transition-all duration-300 ease-in-out sm:hidden lg:flex"
      >
        <div className="flex items-center justify-between w-full p-6 text-2xl font-bold text-black mb-2">
          <div className="flex items-center space-x-2">
            <TASK_SVG />
            <span className="text-[#343C6A] text-[25px] font-extrabold font-inter">Soar Task</span>
          </div>
        </div>

        <div className="items-center space-y-4 flex-grow w-full overflow-y-auto">
          {menus.map((menu: IMenu) => (
            <MenuItem key={menu.route} label={menu.label} route={menu.route} icon={menu.icon} closeMenu={setIsMenuOpen} />
          ))}
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-8 left-4 z-50 p-2"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMenuOpen ? <CLOSE_SVG /> : <HAMBURGER_SVG />}
      </button>
      <div
        id="mobile-navigation"
        role="navigation"
        aria-label="Mobile Navigation"
        className={`lg:hidden lg:w-[250px] lg:h-screen lg:bg-white lg:shadow-lg lg:flex lg:flex-col lg:justify-start lg:items-center lg:transition-all lg:duration-300 lg:ease-in-out
        ${isMenuOpen ? 'w-full h-auto bg-white shadow-lg fixed top-24 left-4 z-40 opacity-100 visible' : 'lg:w-[250px] w-0 opacity-0 invisible'}`}
      >
        <div className="space-y-2 flex-grow w-full overflow-y-auto">
          {menus.map((menu: IMenu) => (
            <MenuItem key={menu.route} label={menu.label} route={menu.route} icon={menu.icon} closeMenu={setIsMenuOpen} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
