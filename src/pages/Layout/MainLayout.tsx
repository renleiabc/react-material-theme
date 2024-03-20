import { Box, useMediaQuery, useTheme } from '@mui/material';
import type { SxProps } from '@mui/material';
import { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainDrawer from '@/components/Drawer/MainDrawer';
import MainAppBar from '@/components/AppBar/MainAppBar';
import '@/assets/sass/index.scss';

const drawerWidth = 260;
const MainLayout: FC = () => {
  const location = useLocation();
  console.log('🚀 ~ file: MainLayout.tsx:11 ~ location:', location);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootStyles: SxProps = {
    display: 'flex',
    minHeight: '100vh'
  };
  const navStyles: SxProps = {
    width: { md: drawerWidth },
    flexShrink: { md: 0 }
  };

  const mainStyles: SxProps = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
    //bgcolor: '#f3f3f3'
  };
  const containerStyles: SxProps = {
    p: 0,
    flex: 1
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={rootStyles}>
      <Box component="nav" sx={navStyles}>
        {isSmUp ? null : (
          <MainDrawer
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        )}
        <MainDrawer
          variant="permanent"
          PaperProps={{ style: { width: drawerWidth } }}
          sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
        />
      </Box>
      <Box sx={mainStyles}>
        <MainAppBar onDrawerToggle={handleDrawerToggle} />
        <Box sx={containerStyles}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
