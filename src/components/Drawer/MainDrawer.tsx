import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import type { DrawerProps } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/Info';
import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernetOutlined';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import PaletteTwoToneIcon from '@mui/icons-material/Palette';
import { useTranslation } from 'react-i18next';

const MainDrawer: FC<DrawerProps> = (props) => {
  const { t } = useTranslation();
  const { onClose, ...others } = props;
  type linkType = {
    key: number;
    text: string;
    href: string;
    active?: string;
    isOpen?: boolean;
    icon: React.ReactNode;
    iconOutlined: React.ReactNode;
  };
  const LINKS: linkType[] = [
    { key: 1, text: 'nav.home', href: '/', active: '', icon: <HomeIcon />, iconOutlined: <HomeIconOutlined /> },
    {
      key: 2,
      text: 'nav.color',
      href: '/colorSystem',
      active: 'colorSystem',
      icon: <PaletteTwoToneIcon />,
      iconOutlined: <PaletteOutlinedIcon />
    },
    {
      key: 3,
      text: 'nav.about',
      href: '/about',
      active: 'about',
      icon: <InfoIcon />,
      iconOutlined: <InfoIconOutlined />
    }
  ];
  const categories = [
    {
      id: 'Build',
      children: [
        {
          id: 'Authentication',
          icon: <PeopleIcon />
        },
        { id: 'Database', icon: <PeopleIcon /> },
        { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
        { id: 'Hosting', icon: <PublicIcon /> },
        { id: 'Functions', icon: <SettingsEthernetIcon /> },
        {
          id: 'Machine learning',
          icon: <SettingsInputComponentIcon />
        }
      ]
    }
  ];

  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(location.pathname.replace('/', ''));

  useEffect(() => {
    setSelectedIndex(location.pathname.replace('/', ''));
  }, [location.pathname]);

  const handleListItemClick = (index: string) => {
    console.log('🚀 ~ file: MainDrawer.tsx:59 ~ handleListItemClick ~ index:', index);
    setSelectedIndex(index);
    onClose?.({}, 'backdropClick');
  };
  return (
    <Drawer {...others} onClose={onClose}>
      <Toolbar>
        <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
          {t('home.multi')}
        </Typography>
      </Toolbar>
      <List>
        <Box>
          {LINKS.map((item: linkType) => {
            return (
              <ListItem key={item.key}>
                <ListItemButton
                  component={Link}
                  to={item.href}
                  selected={selectedIndex === item.active}
                  onClick={() => handleListItemClick(item.href)}>
                  <ListItemIcon>{selectedIndex == item.href ? item.icon : item.iconOutlined}</ListItemIcon>
                  <ListItemText>{t(item.text)}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
        {categories.map(({ id, children }) => (
          <Box key={id}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ fontWeight: 'bold' }}>
                <Typography color="inherit" sx={{ ml: 1, fontSize: 15, fontWeight: 500 }}>
                  {id}
                </Typography>
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon }) => (
              <ListItem key={childId}>
                <ListItemButton selected={selectedIndex == childId} onClick={() => handleListItemClick(childId)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default MainDrawer;
