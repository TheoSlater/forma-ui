"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SwitchProps {
  initialState?: boolean;
  disabled?: boolean;
}

export function Switch({
  initialState = false,
  disabled = false,
}: SwitchProps) {
  const [isOn, setIsOn] = useState(initialState);

  const toggleSwitch = () => {
    if (!disabled) {
      setIsOn(!isOn);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.button
        className={cn(
          "w-14 h-[1.875rem] flex items-center rounded-full p-1 transition-colors duration-200",
          isOn ? "justify-end bg-input-bg-darker" : "justify-start bg-input-bg",
          disabled &&
            "bg-disabled-bg disabled:cursor-not-allowed disabled:pointer-events-none"
        )}
        onClick={toggleSwitch}
        disabled={disabled}
        role="switch"
        aria-checked={isOn}
      >
        <motion.span
          className={cn(
            "w-6 h-6 rounded-full shadow-md",
            disabled ? "bg-switch-thumb-disabled" : "bg-switch-thumb"
          )}
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />
        <span className="sr-only">
          {isOn ? "Toggle is on" : "Toggle is off"}
        </span>
      </motion.button>
    </div>
  );
}
