"use client";
import { useId, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { SxProps, Theme } from "@mui/system";

type SegmentedControlProps = {
  options: string[];
  value?: string;
  onChange?: (val: string) => void;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "ghost"; // | "solid" // 'solid' disabled because of issues with overlapping colors
  sx?: SxProps<Theme>;
};

const sizeTokens = {
  sm: {
    fontSize: "0.75rem",
    padding: "0.3rem 0.75rem",
    height: "28px",
  },
  md: {
    fontSize: "0.85rem",
    padding: "0.4rem 1rem",
    height: "34px",
  },
  lg: {
    fontSize: "1rem",
    padding: "0.5rem 1.2rem",
    height: "40px",
  },
};

export const SegmentedControl = ({
  options,
  value: controlledValue,
  onChange,
  size = "md",
  variant = "outline",
  sx,
}: SegmentedControlProps) => {
  const theme = useTheme();
  const idPrefix = useId();

  // Internal state for uncontrolled mode
  const [uncontrolledValue, setUncontrolledValue] = useState(options[0]);
  const value = controlledValue ?? uncontrolledValue;

  const handleChange = (val: string) => {
    // Update internal state only if uncontrolled
    if (controlledValue === undefined) setUncontrolledValue(val);
    onChange?.(val);
  };

  const style = sizeTokens[size];

  const bgColors = {
    // ENABLE AT YOUR OWN RISK
    // solid: theme.palette.primary.main, // disabled for now. kept for reference
    outline: "transparent",
    ghost: "transparent",
  };

  const selectedStyle = {
    color:
      // variant === "solid"
      //   ? theme.palette.primary.contrastText // disabled for now. kept for reference
      //   :
      theme.palette.primary.main,
    backgroundColor:
      // variant === "solid"
      //   ? theme.palette.primary.main // disabled for now. kept for reference
      //   :
      theme.palette.action.selected,
  };

  return (
    <Box
      sx={{
        display: "inline-flex",
        borderRadius: "9999px",
        border:
          variant === "outline"
            ? `1.5px solid ${theme.palette.primary.main}`
            : "none",
        backgroundColor: bgColors[variant],
        position: "relative",
        overflow: "hidden",
        padding: "2px",
        ...sx,
      }}
    >
      {options.map((option) => {
        const isSelected = option === value;
        return (
          <Box
            key={option}
            component="button"
            onClick={() => handleChange(option)}
            sx={{
              ...style,
              position: "relative",
              background: "transparent",
              color: isSelected
                ? selectedStyle.color
                : theme.palette.text.secondary,
              border: "none",
              cursor: "pointer",
              borderRadius: "9999px",
              fontWeight: 500,
              transition: "color 0.2s ease",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isSelected && (
              <motion.div
                layoutId={`segmented-${idPrefix}`}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: selectedStyle.backgroundColor,
                  borderRadius: "9999px",
                  zIndex: 0,
                }}
              />
            )}
            <Box component="span" sx={{ position: "relative", zIndex: 2 }}>
              {option}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
