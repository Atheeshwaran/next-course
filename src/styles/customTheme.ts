// theme/index.ts
import { ThemeOptions } from "@mui/material/styles";
import { lightColors, darkColors } from "./colors";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export const themesOptions: Record<THEME, ThemeOptions> = {
  [THEME.LIGHT]: {
    palette: {
      mode: "light",
      primary: { main: lightColors.primary },
      background: { default: lightColors.neutral },
      text: { primary: lightColors.text },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: lightColors.primary,
            color: lightColors.text,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: lightColors.neutral,
            color: lightColors.text,
          },
        },
      },
    },
  },

  [THEME.DARK]: {
    palette: {
      mode: "dark",
      primary: { main: darkColors.primary },
      background: { default: darkColors.neutral },
      text: { primary: darkColors.text },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: darkColors.primary,
            color: darkColors.text,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: darkColors.neutral,
            color: darkColors.text,
          },
        },
      },
    },
  },
};
