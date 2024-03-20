import type { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material';

interface AppBarType {
  MuiAppBar: {
    defaultProps?: ComponentsProps['MuiAppBar'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiAppBar'];
    variants?: ComponentsVariants['MuiAppBar'];
  };
}

export const getAppBar = (theme: Theme): AppBarType => {
  const { palette } = theme;
  return {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'default'
      },
      styleOverrides: {
        colorDefault: {
          background: palette.surfaceContainer.main,
          color: palette.onSurface.main
        },
        colorPrimary: {
          background: palette.surface.main,
          color: palette.onSurface.main
        }
      }
    }
  };
};
