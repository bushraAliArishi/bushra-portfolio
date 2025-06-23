// src/components/ui/scroll-area.tsx
"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

// 1) Derive each component’s props from the Radix primitives:

export type ScrollAreaProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> & {
  className?: string;
  children: React.ReactNode;
};

export type ScrollBarProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
> & {
  className?: string;
  orientation?: "vertical" | "horizontal";
};

// 2) forwardRef components to keep refs and proper typing:

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    data-slot="scroll-area"
    className={cn("relative", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation="vertical" />
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = "ScrollArea";

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    data-slot="scroll-area-scrollbar"
    orientation={orientation}
    className={cn(
      "flex touch-none p-px transition-colors select-none",
      orientation === "vertical"
        ? "h-full w-2.5 border-l border-l-transparent"
        : "h-2.5 flex-col border-t border-t-transparent",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      data-slot="scroll-area-thumb"
      className="bg-border relative flex-1 rounded-full"
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = "ScrollBar";
