import { z } from "zod";
import { profileSchema } from "../schemas";

export type IProfile = z.infer<typeof profileSchema>;

export interface IProfileState {
  data: IProfile | null;
  loading: boolean;
  error: string | null;
}

export interface INotification {
  message: string
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
  count?: number
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