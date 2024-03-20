import { Box, Stack, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import type { SxProps } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useContext } from 'react';
import { ThemeSchemeContext } from '@/theme';
import { ThemeModeContext } from '@/theme/content/providers/ThemeModeProvider';

const PaletteSwatch = ({ title, onTitle, titleColor, onTitleColor }: any) => {
  return (
    <Stack sx={{ height: '80px', borderRadius: '12px' }}>
      <Box
        sx={{
          flex: 1,
          p: 1,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          bgcolor: titleColor,
          color: onTitleColor
        }}>
        <Typography fontSize={12} fontWeight={'bold'}>
          {title} - {titleColor.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          p: 1,
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          bgcolor: onTitleColor,
          color: titleColor
        }}>
        <Typography fontSize={12} fontWeight={'bold'}>
          {onTitle} - {onTitleColor.toUpperCase()}
        </Typography>
      </Box>
    </Stack>
  );
};

const PaletteSwatchSurface = ({ title, titleColor, onTitleColor }: any) => {
  return (
    <Stack sx={{ height: 'auto' }}>
      <Box
        sx={{
          p: 1.5,
          bgcolor: titleColor,
          color: onTitleColor,
          borderRadius: '10px'
        }}>
        <Typography fontSize={12} fontWeight={'bold'}>
          {title} - {titleColor.toUpperCase()}
        </Typography>
      </Box>
    </Stack>
  );
};

export const Component = () => {
  const { themeScheme } = useContext(ThemeSchemeContext);
  const { themeMode } = useContext(ThemeModeContext);
  const light = themeScheme[themeMode];

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSxUp = useMediaQuery(theme.breakpoints.up('sm'));

  const radius = isSxUp ? 4 : 0;

  const paperStyle: SxProps = {
    py: 2,
    px: 2,
    borderRadius: radius,
    //height: isSxUp ? 'auto' : 1,
    mt: 0,
    mb: isSxUp ? 2 : 0,
    mr: isSxUp ? 2 : 0,
    ml: isSxUp ? (isSmUp ? 0 : 2) : 0
  };

  return (
    <Grid container columns={1} spacing={isSxUp ? (isSmUp ? 2 : 1) : 0} columnSpacing={1}>
      <Grid xs={1}>
        <Paper elevation={0} sx={{ ...paperStyle, height: 'auto' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ m: 1 }}>
            {themeMode == 'light' ? 'Light Theme' : 'Dark Theme'}
          </Typography>
          <Grid container columns={4} spacing={2}>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch
                title="Primary"
                titleColor={light.primary}
                onTitle="OnPrimary"
                onTitleColor={light.onPrimary}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch
                title="Secondary"
                titleColor={light.secondary}
                onTitle="OnSecondary"
                onTitleColor={light.onSecondary}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch
                title="Tertiary"
                titleColor={light.tertiary}
                onTitle="OnTertiary"
                onTitleColor={light.onTertiary}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch title="Error" titleColor={light.error} onTitle="OnError" onTitleColor={light.onError} />
            </Grid>

            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch
                title="PrimaryContainer"
                titleColor={light.primaryContainer}
                onTitle="OnPrimaryContainer"
                onTitleColor={light.onPrimaryContainer}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch
                title="SecondaryContainer"
                titleColor={light.secondaryContainer}
                onTitle="OnSecondaryContainer"
                onTitleColor={light.onSecondaryContainer}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch
                title="TertiaryContainer"
                titleColor={light.tertiaryContainer}
                onTitle="OnTertiaryContainer"
                onTitleColor={light.onTertiaryContainer}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatch
                title="ErrorContainer"
                titleColor={light.errorContainer}
                onTitle="OnErrorContainer"
                onTitleColor={light.onErrorContainer}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={0} sx={{ ...paperStyle, height: 'auto' }}>
          <Grid container columns={4} spacing={2}>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="PrimaryFixed"
                titleColor={light.primaryFixed}
                onTitleColor={light.onPrimaryFixed}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="PrimaryFixedDim"
                titleColor={light.primaryFixedDim}
                onTitleColor={light.onPrimaryFixedVariant}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="OnPrimaryFixed"
                titleColor={light.onPrimaryFixed}
                onTitleColor={light.primaryFixed}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="OnPrimaryFixedVariant"
                titleColor={light.onPrimaryFixedVariant}
                onTitleColor={light.primaryFixedDim}
              />
            </Grid>

            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="SecondaryFixed"
                titleColor={light.secondaryFixed}
                onTitleColor={light.onSecondaryFixed}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="SecondaryFixedDim"
                titleColor={light.secondaryFixedDim}
                onTitleColor={light.onSecondaryFixedVariant}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="OnSecondaryFixed"
                titleColor={light.onSecondaryFixed}
                onTitleColor={light.secondaryFixed}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="OnSecondaryFixedVariant"
                titleColor={light.onSecondaryFixedVariant}
                onTitleColor={light.secondaryFixedDim}
              />
            </Grid>

            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="TertiaryFixed"
                titleColor={light.tertiaryFixed}
                onTitleColor={light.onTertiaryFixed}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="TertiaryFixedDim"
                titleColor={light.tertiaryFixedDim}
                onTitleColor={light.onTertiaryFixedVariant}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="OnTertiaryFixed"
                titleColor={light.onTertiaryFixed}
                onTitleColor={light.tertiaryFixed}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={1} xl={1}>
              <PaletteSwatchSurface
                title="OnTertiaryFixedVariant"
                titleColor={light.onTertiaryFixedVariant}
                onTitleColor={light.tertiaryFixedDim}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={0} sx={{ ...paperStyle, height: 'auto' }}>
          <Grid container columns={5} spacing={1} rowSpacing={2}>
            <Grid xs={1.7}>
              <PaletteSwatchSurface title="SurfaceDim" titleColor={light.surfaceDim} onTitleColor={light.onSurface} />
            </Grid>
            <Grid xs={1.6}>
              <PaletteSwatchSurface title="Surface" titleColor={light.surface} onTitleColor={light.onSurface} />
            </Grid>
            <Grid xs={1.7}>
              <PaletteSwatchSurface
                title="SurfaceBright"
                titleColor={light.surfaceBright}
                onTitleColor={light.onSurface}
              />
            </Grid>

            <Grid xs={1}>
              <PaletteSwatchSurface
                title="Surf. ContainerLowest"
                titleColor={light.surfaceContainerLowest}
                onTitleColor={light.onSurface}
              />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatchSurface
                title="Surf. ContainerLow"
                titleColor={light.surfaceContainerLow}
                onTitleColor={light.onSurface}
              />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatchSurface
                title="Surf. Container"
                titleColor={light.surfaceContainer}
                onTitleColor={light.onSurface}
              />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatchSurface
                title="Surf. ContainerHigh"
                titleColor={light.surfaceContainerHigh}
                onTitleColor={light.onSurface}
              />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatchSurface
                title="Surf. ContainerHighest"
                titleColor={light.surfaceContainerHighest}
                onTitleColor={light.onSurface}
              />
            </Grid>

            <Grid xs={1.25}>
              <PaletteSwatchSurface title="OnSurface" titleColor={light.onSurface} onTitleColor={light.surface} />
            </Grid>
            <Grid xs={1.25}>
              <PaletteSwatchSurface
                title="OnSurfaceVariant"
                titleColor={light.onSurfaceVariant}
                onTitleColor={light.surface}
              />
            </Grid>
            <Grid xs={1.25}>
              <PaletteSwatchSurface title="Outline" titleColor={light.outline} onTitleColor={light.surface} />
            </Grid>
            <Grid xs={1.25}>
              <PaletteSwatchSurface
                title="OutlineVariant"
                titleColor={light.outlineVariant}
                onTitleColor={light.inverseSurface}
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={0} sx={{ ...paperStyle, height: 'auto' }}>
          <Grid container columns={5} spacing={1}>
            <Grid xs={1.25}>
              <PaletteSwatch
                title="InverseSurface"
                titleColor={light.inverseSurface}
                onTitle="InverseOnSurface"
                onTitleColor={light.inverseOnSurface}
              />
            </Grid>
            <Grid xs={1.25}>
              <PaletteSwatchSurface
                title="InversePrimary"
                titleColor={light.inversePrimary}
                onTitleColor={light.onPrimaryContainer}
              />
            </Grid>
            <Grid xs={1.25}>
              <PaletteSwatchSurface title="Scrim" titleColor={light.scrim} onTitleColor={'#FFF'} />
            </Grid>
            <Grid xs={1.25}>
              <PaletteSwatchSurface title="Shadow" titleColor={light.shadow} onTitleColor={'#FFF'} />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={0} sx={{ ...paperStyle }}>
          <Typography variant="h6" fontWeight="bold" sx={{ m: 1, mt: 2 }}>
            Custom Colors
          </Typography>
          <Grid container columns={3} spacing={2}>
            <Grid xs={1}>
              <PaletteSwatch title="Info" titleColor={light.info} onTitle="OnInfo" onTitleColor={light.onInfo} />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatch
                title="Warning"
                titleColor={light.warning}
                onTitle="OnWarning"
                onTitleColor={light.onWarning}
              />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatch
                title="Success"
                titleColor={light.success}
                onTitle="OnSuccess"
                onTitleColor={light.onSuccess}
              />
            </Grid>

            <Grid xs={1}>
              <PaletteSwatch
                title="InfoContainer"
                titleColor={light.infoContainer}
                onTitle="OnInfoContainer"
                onTitleColor={light.onInfoContainer}
              />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatch
                title="WarningContainer"
                titleColor={light.warningContainer}
                onTitle="OnWarningContainer"
                onTitleColor={light.onWarningContainer}
              />
            </Grid>
            <Grid xs={1}>
              <PaletteSwatch
                title="SuccessContainer"
                titleColor={light.successContainer}
                onTitle="OnSuccesContainer"
                onTitleColor={light.onSuccessContainer}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
Component.displayName = 'ColorSystemPage';
