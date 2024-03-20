import type { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material';

interface ListItemType {
  MuiListItem: {
    defaultProps?: ComponentsProps['MuiListItem'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiListItem'];
    variants?: ComponentsVariants['MuiListItem'];
  };
}

export const getListItem = (): ListItemType => {
  //const { palette } = theme;
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 1,
          paddingBottom: 1,
          '& .MuiListItemButton-root': {
            paddingTop: 8,
            paddingBottom: 8
          }
        }
      }
    }
  };
};
