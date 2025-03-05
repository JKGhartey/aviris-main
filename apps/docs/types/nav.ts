export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  badge?: string;
  description?: string;
  items?: Omit<NavItem, "items">[];
}
