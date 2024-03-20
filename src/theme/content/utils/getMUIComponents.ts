import type { Theme } from '@mui/material';
import {
  getAccordion,
  getAlert,
  getAppBar,
  getBadge,
  getButton,
  getCard,
  getCssBaseline,
  getDrawer,
  getFab,
  getListItem,
  getListItemButton,
  getListItemIcon,
  getMenu,
  getSwitch,
  getToggleButton,
  getToggleButtonGroup,
  getTooltip,
  getTextField
} from '../components';

type ComponentsType = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme) => {
  // const { palette } = theme;
  return {
    components: {
      ...getCssBaseline(),
      ...getAccordion(theme),
      ...getAlert(theme),
      ...getAppBar(theme),
      ...getBadge(theme),
      ...getButton(theme),
      ...getCard(theme),
      ...getDrawer(theme),
      ...getFab(theme),
      ...getListItem(),
      ...getListItemButton(theme),
      ...getListItemIcon(),
      ...getMenu(theme),
      ...getSwitch(theme),
      ...getToggleButton(theme),
      ...getToggleButtonGroup(theme),
      ...getTooltip(theme),
      ...getTextField(theme)
    }
  } as ComponentsType;
};
