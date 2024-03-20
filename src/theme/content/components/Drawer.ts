import type { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material';

interface DrawerType {
  MuiDrawer: {
    defaultProps?: ComponentsProps['MuiDrawer'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiDrawer'];
    variants?: ComponentsVariants['MuiDrawer'];
  };
}

export const getDrawer = (theme: Theme): DrawerType => {
  const { palette } = theme;
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: '0px',
          background: palette.surfaceContainer.main,
          color: palette.onSurfaceVariant.main
        }
      }
    }
  };
};
