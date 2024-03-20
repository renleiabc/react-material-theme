import type { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material';

interface CssBaselineType {
  MuiCssBaseline: {
    defaultProps?: ComponentsProps['MuiCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCssBaseline'];
    variants?: ComponentsVariants['MuiCssBaseline'];
  };
}

export const getCssBaseline = (): CssBaselineType => {
  return {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true
      },
      styleOverrides: {
        '*::-webkit-scrollbar': {
          display: 'none'
        }
      }
    }
  };
};
