import { z } from "zod";
import { profileSchema } from "../schemas";

export type IProfile = z.infer<typeof profileSchema>;

export interface IAsyncData<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export interface IProfileState extends IAsyncData<IProfile | null> {}

export interface IDashboardState {
  cards: IAsyncData<ICard[]>;
  recentTransactions: IAsyncData<IRecentTransactions[]>;
  weeklyActivites: IAsyncData<IDailyActivity[]>;
}

export interface INotification {
  message: string;
  isError?: boolean;
}

export interface ITab {
  title: string;
  route: string;
  content: React.ReactNode;
}

export interface ITabSelector {
  tabs: ITab[];
  initialRoute: string;
}

export interface ISearchInput {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export interface IInput {
  placeholder?: string;
  type?: string;
  label?: string;
  value?: string;
  required?: boolean;
  error?: string | null | undefined;
  autoComplete?: "yes" | "no";
  onChange: (value: string) => void;
}

export interface ILayout {
  children: React.ReactNode;
}

export interface ILoader {
  count?: number;
}

export interface IMenuItem {
  label: string;
  route: string;
  closeMenu: (isMenuOpen: boolean) => void;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface IMenu {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  route: string;
}

export interface IRecentTransactions {
  narration: string;
  amount: number;
  date: string;
  type: string;
}

export interface IRecentTransactionCard {
  transactions: IRecentTransactions[] | null;
}

export type ICardType = "standard" | "premium"; 

export interface ICard {
  balance: number;
  name: string;
  expiryDate: string;
  number: string;
  type: ICardType;
}

export interface ICardListItem {
  narration: string;
  date: string;
  amount: number;
  icon: React.ElementType | null;
  bgColor: string;
}

export interface IDailyActivity {
  day: string;
  deposit: number;
  withdrawal: number;
}

export interface IDataset {
  label: string;
  data: Array<number>;
  backgroundColor: string;
}

export interface IBarChart {
  labels: Array<string>;
  datasets: IDataset[];
}
  
// export interface IWeeklyActivities {
//   days: DailyActivity[];
// }
  
// export interface IWeeklyActivities {
//   days: WeekData;
// }

// export interface IRecentTransactions {
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
//   narration: string;
//   amount: number;
//   date: string;
//   bgColor: string;
// }