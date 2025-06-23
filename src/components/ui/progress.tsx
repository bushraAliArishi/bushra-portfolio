// src/components/ui/progress.tsx
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

// 1) Derive the exact Root props from Radix
export type ProgressProps = Omit<
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  "value"
> & {
  /** Progress value between 0 and 100 */
  value: number;
  className?: string;
};

// 2) ForwardRef component
export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    data-slot="progress"
    className={cn(
      "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
      className
    )}
    value={value}
    {...props}
  >
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className="bg-primary h-full w-full flex-1 transition-all"
      style={{
        transform: `translateX(-${100 - value}%)`,
      }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = "Progress";
