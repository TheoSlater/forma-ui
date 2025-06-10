"use client";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { forwardRef } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export type ButtonProps = MuiButtonProps & {
  buttonVariant?: "solid" | "ghost" | "outline";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { buttonVariant = "solid", sx, ...rest } = props;
    const theme = useTheme();

    // Base style emphasizing clear shape and modular rhythm
    const baseStyle: SxProps<Theme> = {
      borderRadius: theme.shape.borderRadius,
      fontWeight: 500, // Slightly lighter than 600 for approachability
      textTransform: theme.typography.button.textTransform,
      fontSize: theme.typography.button.fontSize,
      letterSpacing: theme.typography.button.letterSpacing,
      padding: "0.55rem 1.6rem", // a touch tighter for elegant compactness
      transition: "background-color 0.25s ease, box-shadow 0.25s ease",
      boxShadow: "none",
      minWidth: 110, // slightly smaller but still substantial
      lineHeight: 1.3,
      userSelect: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6, // subtle spacing for icon + text harmony
    };

    // Variants fine-tuned for refined states and subtle shape effects
    const variants: Record<string, SxProps<Theme>> = {
      solid: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          boxShadow: "0 5px 12px rgba(0,0,0,0.16)",
        },
        "&:active": {
          boxShadow: "inset 0 2px 5px rgba(0,0,0,0.2)",
          backgroundColor: theme.palette.primary.dark,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        boxShadow: "none",
        border: "none",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          boxShadow: "0 0 6px rgba(17,17,17,0.1)",
        },
        "&:active": {
          backgroundColor: theme.palette.action.selected,
          boxShadow: "none",
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        border: `1.5px solid ${theme.palette.primary.main}`,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          boxShadow: `0 0 8px ${theme.palette.primary.main}33`,
        },
        "&:active": {
          backgroundColor: theme.palette.action.selected,
          boxShadow: "none",
        },
      },
    };

    return (
      <MuiButton
        ref={ref}
        {...rest}
        sx={
          {
            ...baseStyle,
            ...(variants[buttonVariant] ?? {}),
            ...sx,
          } as SxProps<Theme>
        }
      />
    );
  }
);

Button.displayName = "Button";
