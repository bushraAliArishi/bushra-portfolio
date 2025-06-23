// src/components/ui/toaster.tsx
"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  Toaster as SonnerToaster,
  ToasterProps as SonnerToasterProps,
} from "sonner";

/** תוריד את הגדרת ה‐props של Sonner כדי שנוכל להשתמש בהן ממש */
export type ToasterProps = SonnerToasterProps;

export const Toaster: React.FC<ToasterProps> = (props) => {
  // useTheme מחזיר theme כ־string | undefined
  const { theme: nextTheme = "system" } = useTheme();

  // המרה למחרוזת מצומצמת שמתאימה ל‐Sonner
  const theme = nextTheme as "system" | "light" | "dark";

  return (
    <SonnerToaster
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

Toaster.displayName = "Toaster";
