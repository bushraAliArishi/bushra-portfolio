// src/components/ui/popover.tsx
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

// 1) Derive each Props type from Radix
export type PopoverProps = React.ComponentProps<
  typeof PopoverPrimitive.Root
>;

export type PopoverTriggerProps = React.ComponentProps<
  typeof PopoverPrimitive.Trigger
>;

export interface PopoverContentProps
  extends React.ComponentProps<
    typeof PopoverPrimitive.Content
  > {
  className?: string;
  align?: React.ComponentProps<
    typeof PopoverPrimitive.Content
  >["align"];
  sideOffset?: React.ComponentProps<
    typeof PopoverPrimitive.Content
  >["sideOffset"];
}

export type PopoverAnchorProps = React.ComponentProps<
  typeof PopoverPrimitive.Anchor
>;

// 2) The fully-typed components
export const Popover: React.FC<PopoverProps> = ({
  children,
  ...props
}) => {
  return (
    <PopoverPrimitive.Root
      data-slot="popover"
      {...props}
    >
      {children}
    </PopoverPrimitive.Root>
  );
};

export const PopoverTrigger: React.FC<
  PopoverTriggerProps
> = (props) => {
  return (
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      {...props}
    />
  );
};

export const PopoverContent: React.FC<
  PopoverContentProps
> = ({
  className,
  align = "center",
  sideOffset = 4,
  children,
  ...props
}) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground " +
            "data-[state=open]:animate-in " +
            "data-[state=closed]:animate-out " +
            "data-[state=closed]:fade-out-0 " +
            "data-[state=open]:fade-in-0 " +
            "data-[state=closed]:zoom-out-95 " +
            "data-[state=open]:zoom-in-95 " +
            "data-[side=bottom]:slide-in-from-top-2 " +
            "data-[side=left]:slide-in-from-right-2 " +
            "data-[side=right]:slide-in-from-left-2 " +
            "data-[side=top]:slide-in-from-bottom-2 " +
            "z-50 w-72 origin-[--radix-popover-content-transform-origin] " +
            "rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
};

export const PopoverAnchor: React.FC<
  PopoverAnchorProps
> = (props) => {
  return (
    <PopoverPrimitive.Anchor
      data-slot="popover-anchor"
      {...props}
    />
  );
};
