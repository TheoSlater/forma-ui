// src/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    primary: {
      main: "#111111",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#eeeeee",
      contrastText: "#111111",
    },
    text: {
      primary: "#111111",
      secondary: "#444444",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.95rem",
      letterSpacing: "0.01em",
    },
    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});
