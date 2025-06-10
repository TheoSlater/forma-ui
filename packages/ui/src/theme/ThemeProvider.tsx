import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Theme,
} from "@mui/material";
import { defaultTheme } from "./theme";

export interface YourUIThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({
  theme,
  children,
}: YourUIThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme ?? defaultTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
