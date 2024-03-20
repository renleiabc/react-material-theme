import { FC, useContext, useState } from 'react';
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  useTheme
} from '@mui/material';
import { ThemeModeContext, ThemeSchemeContext } from '@/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import ColorIcon from '@mui/icons-material/Shuffle';
import DarkIcon from '@mui/icons-material/DarkModeOutlined';
import LightIcon from '@mui/icons-material/LightModeOutlined';
import RestartIcon from '@mui/icons-material/RefreshOutlined';
import DownloadIcon from '@mui/icons-material/FileDownload';
import LanguageIcon from '@mui/icons-material/Language';
import { arrLang } from '@/lang/config';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onDrawerToggle?: () => void;
  window?: () => Window;
}
const MainAppBar: FC<HeaderProps> = ({ onDrawerToggle, window }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { toggleTheme, themeMode, setThemeMode } = useContext(ThemeModeContext);
  const { generateScheme, themeScheme } = useContext(ThemeSchemeContext);
  const muiTheme = useTheme();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [avatarEl, setAvatarEl] = useState<null | HTMLElement>(null);
  const [langEl, setLangEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openAvatar = Boolean(avatarEl);
  const openLang = Boolean(langEl);
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
    setAvatarEl(null);
    setLangEl(null);
  };
  const handleAvatarMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAvatarEl(event.currentTarget);
  };
  const handleLangMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLangEl(event.currentTarget);
  };
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  const DIGITS: string = '0123456789ABCDEF';

  const randomColor = (): string => {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const index = Math.floor(16 * Math.random());
      result += DIGITS[index];
    }
    return '#' + result;
  };

  const onGenerate = () => generateScheme(randomColor());

  const onReset = () => {
    generateScheme('#6750a4'); //#6750a4 #005fb0
    setThemeMode('light');
  };

  const downloadTheme = () => {
    closeMenu();

    const themeString = JSON.stringify(themeScheme, null, 2);
    // make it downloadable
    const element = document.createElement('a');
    const file = new Blob([themeString], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'ThemeScheme.json';
    document.body.appendChild(element);
    element.click();
  };

  const downloadMUITheme = () => {
    closeMenu();
    const themeString = JSON.stringify(muiTheme, null, 2);
    // make it downloadable
    const element = document.createElement('a');
    const file = new Blob([themeString], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'ThemeMUI.json';
    document.body.appendChild(element);
    element.click();
  };

  const handleExit = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };
  const handleLangChange = (item: { label: string; value: string }) => {
    console.log(item);
    localStorage.setItem('lang', item.value);
    i18n.changeLanguage(item.value);
    setLangEl(null);
  };
  return (
    <>
      <AppBar position="sticky" elevation={trigger ? 2 : 0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item sx={{ display: { md: 'none', sm: 'block' } }}>
              <IconButton color="inherit" edge="start" onClick={onDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
                {location.pathname.replace('/', '')}
              </Typography>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <Tooltip title="Switch Theme">
                <IconButton size="large" color="inherit" onClick={toggleTheme}>
                  {themeMode == 'light' ? <DarkIcon /> : <LightIcon />}
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Shuffle Color">
                <IconButton size="large" color="inherit" onClick={onGenerate}>
                  <ColorIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Download">
                <IconButton
                  size="large"
                  color="inherit"
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={openMenu}>
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id="download-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}>
                <MenuItem onClick={downloadTheme}>Theme Scheme</MenuItem>
                <MenuItem onClick={downloadMUITheme}>MUI Theme</MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <Tooltip title="Reset">
                <IconButton size="large" color="inherit" onClick={onReset}>
                  <RestartIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              {/*  <Tooltip title="@ZakAlbert94"> */}
              <IconButton color="inherit" sx={{ p: 0.5 }} onClick={handleLangMenu}>
                <LanguageIcon />
              </IconButton>
              {/* </Tooltip> */}
              <Menu
                id="lang-menu"
                anchorEl={langEl}
                open={openLang}
                onClose={closeMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}>
                {arrLang.map((item: { label: string; value: string }) => {
                  return (
                    <MenuItem
                      onClick={() => {
                        handleLangChange(item);
                      }}
                      key={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Grid>
            <Grid item>
              {/*  <Tooltip title="@ZakAlbert94"> */}
              <IconButton color="inherit" sx={{ p: 0.5 }} onClick={handleAvatarMenu}>
                <Avatar
                  alt="My Avatar"
                  sx={{
                    width: 28,
                    height: 28,
                    fontSize: 14,
                    bgcolor: 'primary.main',
                    color: 'onPrimary.main'
                  }}>
                  Zk
                </Avatar>
              </IconButton>
              {/* </Tooltip> */}
              <Menu
                id="avatar-menu"
                anchorEl={avatarEl}
                open={openAvatar}
                onClose={closeMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}>
                <MenuItem onClick={handleExit}>退出</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainAppBar;
