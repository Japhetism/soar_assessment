
export interface IProfile {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IError {
  error: string
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