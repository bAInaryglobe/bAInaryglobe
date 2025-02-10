export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: MenuItem[];
  icon?: string | React.ReactNode;
  badge?: {
    text: string;
    variant: 'new' | 'hot' | 'beta' | 'updated'
  };
  permissions?: string[];
  order?: number;
  status: 'active' | 'disabled' | 'comingSoon';
  analytics?: {
    clickCount: number;
    lastClicked?: string;
  };
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
  layout?: 'vertical' | 'horizontal' | 'grid';
  className?: string;
}

export interface NavigationState {
  currentPath: string;
  breadcrumbs: MenuItem[];
  previousRoute?: string;
}
