// src/components/ui/hover-card.tsx
"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

// === גזירת טיפוסי ה-props מתוך הרכיבים של Radix ===
type HoverCardRootProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Root
>;
type HoverCardTriggerProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Trigger
>;
type HoverCardContentProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
>;

/** השורש של ההובר-כרטיס */
export function HoverCard(props: HoverCardRootProps) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

/** הכפתור/טריגר שמפעיל את ההובר */
export function HoverCardTrigger(props: HoverCardTriggerProps) {
  return (
    <HoverCardPrimitive.Trigger
      data-slot="hover-card-trigger"
      {...props}
    />
  );
}

/**
 * תוכן שנפתח כשהעכבר מעל הטריגר.
 * יש כאן ברירות מחדל ל-align ול-sideOffset.
 */
export function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground " +
            "data-[state=open]:animate-in data-[state=closed]:animate-out " +
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " +
            "data-[side=bottom]:slide-in-from-top-2 " +
            "data-[side=left]:slide-in-from-right-2 " +
            "data-[side=right]:slide-in-from-left-2 " +
            "data-[side=top]:slide-in-from-bottom-2 " +
            "z-50 w-64 origin-[var(--radix-hover-card-content-transform-origin)] " +
            "rounded-md border p-4 shadow-md outline-none",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}
