import BUSINESS_SVG from "../assets/icons/business";
import MONEY_SVG from "../assets/icons/money";
import PAYPAL_SVG from "../assets/icons/paypal";
import { IBalanceHistory, IDailyActivity } from "../interfaces";

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

export const extractActivityData = (activities: IDailyActivity[]) => {
  return {
    days: activities.map(a => a.day),
    deposits: activities.map(a => a.deposit),
    withdrawals: activities.map(a => a.withdrawal),
  };
}

export const sortActivitiesByToday = (activities: IDailyActivity[]): IDailyActivity[] => {
  const dayOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayIndex = new Date().getDay();

  const activityMap = new Map(activities.map(activity => [activity.day, activity]));

  return Array.from({ length: 7 }, (_, i) => {
    const day = dayOrder[(todayIndex + i) % 7];
    return activityMap.get(day)!;
  });
}

export const getBalanceUpToCurrentMonth = (balanceHistory: IBalanceHistory): { [key in keyof IBalanceHistory]?: number } => {
  const currentMonth = new Date().getMonth();
  const months: (keyof IBalanceHistory)[] = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  const result: { [key in keyof IBalanceHistory]?: number } = {};

  for (let i = 0; i <= currentMonth; i++) {
    result[months[i]] = balanceHistory[months[i]];
  }

  return result;
}

