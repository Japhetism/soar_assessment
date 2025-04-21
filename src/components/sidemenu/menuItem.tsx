import { Link, useLocation } from "react-router-dom";
import { IMenuItem } from "../../interfaces";

export const MenuItem: React.FC<IMenuItem> = ({
  label,
  route,
  closeMenu,
  icon: Icon
}) => {
  const location = useLocation();

  const isDashboardRoute = route === "/" || route === "/dashboard";
  const isActive =
    isDashboardRoute && (location.pathname === "/" || location.pathname === "/dashboard")
      ? true
      : location.pathname === route;

  const textColor = isActive ? "text-[#232323] before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[6px] before:bg-[#232323] before:scale-x-[-1] before:rounded-tl-[10px] before:rounded-bl-[10px]" : "text-[#B1B1B1]";
  const iconColor = isActive ? '#232323' : '#B1B1B1';

  return (
    <Link
      to={route}
      onClick={() => closeMenu(false)}
      className={`relative flex items-center py-3 px-8 hover:bg-gray-200 cursor-pointer ${textColor}`}
    >
      <span className={`mr-4 ${textColor}`}>
        <Icon color={iconColor} />
      </span>
      <span className={`text-lg font-medium font-inter ${textColor}`}>{label}</span>
    </Link>
  );
};
