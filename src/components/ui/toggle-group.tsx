// src/components/ui/toggle-group.tsx
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

export type ToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  VariantProps<typeof toggleVariants> & {
    children?: React.ReactNode;
  };

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant, size, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (
          !React.isValidElement(child) ||
          typeof child.type === "string"
        )
          return child;
        return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
          className: cn(
            toggleVariants({ variant, size }),
            (child.props as { className?: string }).className
          ),
        });
      })}
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = "ToggleGroup";

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<
      typeof ToggleGroupPrimitive.Item
    >,
    VariantProps<typeof toggleVariants> {
  children?: React.ReactNode;
}

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant, size, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({ variant, size }),
        "flex-1",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";
