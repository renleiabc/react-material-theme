import type { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material';
import { StateLayer, getStateLayerColor } from '../utils/getStayeLayerColor';
interface AccordionType {
  MuiTextField: {
    defaultProps?: ComponentsProps['MuiAccordion'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiAccordion'];
    variants?: ComponentsVariants['MuiAccordion'];
  };
}

export const getTextField = (theme: Theme): AccordionType => {
  const { palette } = theme;
  // palette自定义的属性，源于 utils/getMUIPalette.ts
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: palette.onBackground.main,
          // palette.surfaceBright.main
          '& .MuiInputBase-root': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surfaceBright.main,
              palette.surfaceBright.main
            ),
            color: getStateLayerColor(StateLayer.Hover, palette.onSurfaceVariant.main, palette.onSurface.main)
            /*  '&:hover': {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerLow.main,
                palette.onSurface.main
              ),
              color: getStateLayerColor(StateLayer.Hover, palette.onSurfaceVariant.main, palette.onSurface.main)
            } */
            /*  '&:focus': {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainerLow.main,
                palette.onSurface.main
              ),
              color: getStateLayerColor(StateLayer.Focus, palette.onSurfaceVariant.main, palette.onSurface.main)
            },
            '&:active': {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerLow.main,
                palette.onSecondaryContainer.main
              ),
              color: getStateLayerColor(StateLayer.Press, palette.onSurfaceVariant.main, palette.onSurface.main)
            } */
          }
        }
      }
    }
  };
};
