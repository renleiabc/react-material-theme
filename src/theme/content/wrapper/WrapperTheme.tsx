import React, { useContext, useMemo } from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { getMUIPalette } from '../utils/getMUIPalette';
import { ThemeModeContext } from '../providers/ThemeModeProvider';
import { ThemeSchemeContext } from '../providers/ThemeSchemeProvider';
import { getMUIComponents } from '../utils/getMUIComponents';

interface ThemeProps {
  children?: React.ReactNode;
}

const WrapperTheme = ({ children }: ThemeProps) => {
  const { themeMode } = useContext(ThemeModeContext);
  const { themeScheme } = useContext(ThemeSchemeContext);
  const m3Theme = useMemo(() => {
    const muiPalette = getMUIPalette(themeMode, themeScheme);
    let theme = createTheme(muiPalette);
    theme = deepmerge(theme, getMUIComponents(theme));
    return theme;
  }, [themeMode, themeScheme]);

  return (
    <ThemeProvider theme={m3Theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default WrapperTheme;
