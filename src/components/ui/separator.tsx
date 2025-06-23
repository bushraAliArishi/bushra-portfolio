// src/components/ui/separator.tsx
"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

// 1) Extract the exact prop types from Radix
export type SeparatorProps = React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
> & {
  className?: string;
  orientation?: React.ComponentProps<
    typeof SeparatorPrimitive.Root
  >["orientation"];
  decorative?: boolean;
};

// 2) Forward ref so users can attach one if needed
export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      data-slot="separator-root"
      orientation={orientation}
      decorative={decorative}
      className={cn(
        "bg-border shrink-0 " +
          "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full " +
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = "Separator";
