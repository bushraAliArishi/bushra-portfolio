// src/components/ui/input.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * סוג השדה (text, password, email וכו'). ברירת המחדל: "text"
   */
  type?: string;
  /** CSS class עיקרי */
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, ...props }, ref) => {
    return (
      <input
        // אפשר לשלוח ref מהורה אל השדה
        ref={ref}
        // שדה עצמו
        type={type}
        data-slot="input"
        className={cn(
          // עיצוב בסיסי
          "file:text-foreground placeholder:text-muted-foreground " +
            "selection:bg-primary selection:text-primary-foreground " +
            "dark:bg-input/30 border-input flex h-9 w-full min-w-0 " +
            "rounded-md border bg-transparent px-3 py-1 text-base shadow-xs " +
            "transition-[color,box-shadow] outline-none " +
            "file:inline-flex file:h-7 file:border-0 file:bg-transparent " +
            "file:text-sm file:font-medium disabled:pointer-events-none " +
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          // סטייט פוקוס
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          // סטייט אריה-אינבליד
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          // קלאס מותאם
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
