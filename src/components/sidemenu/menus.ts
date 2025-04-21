import HOME_SVG from "../../assets/icons/home";
import TRANSFER_SVG from "../../assets/icons/transfer";
import USER_SVG from "../../assets/icons/user";
import INVESTMENT_SVG from "../../assets/icons/investment";
import CARD_SVG from "../../assets/icons/card";
import LOAN_SVG from "../../assets/icons/loan";
import SERVICE_SVG from "../../assets/icons/service";
import PRIVILEGE_SVG from "../../assets/icons/privilege";
import SETTINGS_SVG from "../../assets/icons/settings";

export interface MenuProps {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  route: string;
}

export const menus: MenuProps[] = [
  {
    label: "Dashboard",
    icon: HOME_SVG,
    route: "/dashboard",
  },
  {
    label: "Transactions",
    icon: TRANSFER_SVG,
    route: "/transactions",
  },
  {
    label: "Accounts",
    icon: USER_SVG,
    route: "/accounts",
  },
  {
    label: "Investments",
    icon: INVESTMENT_SVG,
    route: "/investments",
  },
  {
    label: "Credit Cards",
    icon: CARD_SVG,
    route: "/credit-cards",
  },
  {
    label: "Loans",
    icon: LOAN_SVG,
    route: "/loans",
  },
  {
    label: "Services",
    icon: SERVICE_SVG,
    route: "/services",
  },
  {
    label: "My Privileges",
    icon: PRIVILEGE_SVG,
    route: "/privileges",
  },
  {
    label: "Setting",
    icon: SETTINGS_SVG,
    route: "/setting",
  },
];
