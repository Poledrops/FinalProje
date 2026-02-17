export const theme = {
  colors: {
    // Rich gradients
    primary: {
      start: '#8B5CF6', // Purple
      end: '#3B82F6',   // Blue
      solid: '#6366F1',
    },
    accent: {
      start: '#FF6B6B', // Coral
      end: '#FF8E53',   // Orange
      solid: '#FF7A5C',
    },
    success: {
      start: '#10B981',
      end: '#14B8A6',
      solid: '#12B991',
    },
    background: {
      primary: '#0F172A',   // Dark navy
      secondary: '#1E293B', // Lighter navy
      tertiary: '#334155',  // Card background
      light: '#FFFFFF',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#CBD5E1',
      tertiary: '#94A3B8',
      dark: '#0F172A',
    },
    border: {
      light: '#334155',
      lighter: '#475569',
    },
    error: '#EF4444',
    warning: '#F59E0B',
  },

  typography: {
    fontFamily: {
      primary: 'Inter_400Regular',
      semibold: 'Inter_600SemiBold',
      bold: 'Inter_700Bold',
      heading: 'Poppins_600SemiBold',
      headingBold: 'Poppins_700Bold',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 32,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },

  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },

  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};

export type Theme = typeof theme;
