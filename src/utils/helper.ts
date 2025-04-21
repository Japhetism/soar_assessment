import BUSINESS_SVG from "../assets/icons/business";
import MONEY_SVG from "../assets/icons/money";
import PAYPAL_SVG from "../assets/icons/paypal";

export const formatDate = (date: string | Date): string => {
  const dateObject = new Date(date);
  
  return dateObject.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export const getCurrentDayIndex = () => {
  const today = new Date();
  return today.getDay();
};

export const getRecentTransactionIcon = (type: string): React.ComponentType<React.SVGProps<SVGSVGElement>> | null => {
  switch(type) {
    case 'card':
      return BUSINESS_SVG
    case 'paypal':
      return PAYPAL_SVG
    case 'self':
      return MONEY_SVG
    default:
      return null
  }
}

export const getRecentTransactionBgColor = (type: string): string => {
  switch(type) {
    case 'card':
      return "bg-[#FFF5D9]"
    case 'paypal':
      return "bg-[#E7EDFF]"
    case 'self':
      return "bg-[#DCFAF8]"
    default:
      return ""
  }
}