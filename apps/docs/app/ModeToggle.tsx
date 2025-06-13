"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@repo/ui";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button onClick={() => setTheme("light")} variant="default">
        Light
      </Button>
      <Button onClick={() => setTheme("dark")} variant="default">
        Dark
      </Button>
    </>
  );
}
