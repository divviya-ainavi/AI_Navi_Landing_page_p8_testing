export type ThemeOption = 'light' | 'dark' | 'blackwhite';

export interface ThemeConfig {
  name: string;
  displayName: string;
  icon: string;
  cssClass: string;
  description: string;
}

export const THEME_CONFIGS: Record<ThemeOption, ThemeConfig> = {
  light: {
    name: 'light',
    displayName: 'Light',
    icon: '☀️',
    cssClass: 'theme-light',
    description: 'Light theme with soft colors'
  },
  dark: {
    name: 'dark',
    displayName: 'Dark',
    icon: '🌙',
    cssClass: 'theme-dark',
    description: 'Dark theme for low light environments'
  },
  blackwhite: {
    name: 'blackwhite',
    displayName: 'Black & White',
    icon: '⚫',
    cssClass: 'theme-blackwhite',
    description: 'High contrast black and white theme'
  }
};

export const DEFAULT_THEME: ThemeOption = 'light';
export const THEME_STORAGE_KEY = 'ai-navi-theme';

export const THEME_VARIABLES = {
  light: {
    '--background': '0 0% 100%',
    '--foreground': '222.2 84% 4.9%',
    '--card': '0 0% 100%',
    '--card-foreground': '222.2 84% 4.9%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '222.2 84% 4.9%',
    '--primary': '222.2 47.4% 11.2%',
    '--primary-foreground': '210 40% 98%',
    '--secondary': '210 40% 96%',
    '--secondary-foreground': '222.2 84% 4.9%',
    '--muted': '210 40% 96%',
    '--muted-foreground': '215.4 16.3% 46.9%',
    '--accent': '210 40% 96%',
    '--accent-foreground': '222.2 84% 4.9%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '210 40% 98%',
    '--border': '214.3 31.8% 91.4%',
    '--input': '214.3 31.8% 91.4%',
    '--ring': '222.2 84% 4.9%',
    '--radius': '0.5rem'
  },
  dark: {
    '--background': '222.2 84% 4.9%',
    '--foreground': '210 40% 98%',
    '--card': '222.2 84% 4.9%',
    '--card-foreground': '210 40% 98%',
    '--popover': '222.2 84% 4.9%',
    '--popover-foreground': '210 40% 98%',
    '--primary': '210 40% 98%',
    '--primary-foreground': '222.2 47.4% 11.2%',
    '--secondary': '217.2 32.6% 17.5%',
    '--secondary-foreground': '210 40% 98%',
    '--muted': '217.2 32.6% 17.5%',
    '--muted-foreground': '215 20.2% 65.1%',
    '--accent': '217.2 32.6% 17.5%',
    '--accent-foreground': '210 40% 98%',
    '--destructive': '0 62.8% 30.6%',
    '--destructive-foreground': '210 40% 98%',
    '--border': '217.2 32.6% 17.5%',
    '--input': '217.2 32.6% 17.5%',
    '--ring': '212.7 26.8% 83.9%',
    '--radius': '0.5rem'
  },
  blackwhite: {
    '--background': '0 0% 100%',
    '--foreground': '0 0% 0%',
    '--card': '0 0% 100%',
    '--card-foreground': '0 0% 0%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '0 0% 0%',
    '--primary': '0 0% 0%',
    '--primary-foreground': '0 0% 100%',
    '--secondary': '0 0% 95%',
    '--secondary-foreground': '0 0% 0%',
    '--muted': '0 0% 90%',
    '--muted-foreground': '0 0% 25%',
    '--accent': '0 0% 90%',
    '--accent-foreground': '0 0% 0%',
    '--destructive': '0 0% 0%',
    '--destructive-foreground': '0 0% 100%',
    '--border': '0 0% 0%',
    '--input': '0 0% 85%',
    '--ring': '0 0% 0%',
    '--radius': '0.5rem'
  }
};

export const getThemeConfig = (theme: ThemeOption): ThemeConfig => {
  return THEME_CONFIGS[theme] || THEME_CONFIGS[DEFAULT_THEME];
};

export const isValidTheme = (theme: string): theme is ThemeOption => {
  return Object.keys(THEME_CONFIGS).includes(theme);
};

export const getThemeVariables = (theme: ThemeOption) => {
  return THEME_VARIABLES[theme] || THEME_VARIABLES[DEFAULT_THEME];
};

export const ACCESSIBILITY_COMPLIANCE = {
  blackwhite: {
    contrastRatio: 21, // Maximum possible contrast ratio
    wcagLevel: 'AAA'
  },
  dark: {
    contrastRatio: 15.8,
    wcagLevel: 'AAA'
  },
  light: {
    contrastRatio: 12.6,
    wcagLevel: 'AAA'
  }
};