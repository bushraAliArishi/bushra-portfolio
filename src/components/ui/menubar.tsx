// src/components/ui/menubar.tsx
"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// ─── 1) الأنواع العامة ──────────────────────────────────────────────────────────

// كل Props نشتقها من الـ Primitive الموازي
export type MenubarProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Root
> & {
  className?: string;
};

export type MenubarMenuProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Menu
>;

export type MenubarGroupProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Group
>;

export type MenubarPortalProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Portal
>;

export type MenubarRadioGroupProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioGroup
>;

export type MenubarTriggerProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
> & {
  className?: string;
};

export type MenubarContentProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
> & {
  className?: string;
  align?: React.ComponentProps<typeof MenubarPrimitive.Content>["align"];
  alignOffset?: React.ComponentProps<
    typeof MenubarPrimitive.Content
  >["alignOffset"];
  sideOffset?: React.ComponentProps<
    typeof MenubarPrimitive.Content
  >["sideOffset"];
};

export type MenubarItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Item
> & {
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
};

export type MenubarCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
> & {
  className?: string;
  checked?: boolean;
};

export type MenubarRadioItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioItem
> & {
  className?: string;
};

export type MenubarLabelProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> & {
  className?: string;
  inset?: boolean;
};

export type MenubarSeparatorProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
> & {
  className?: string;
};

export type MenubarShortcutProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
};

export type MenubarSubProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Sub
>;

export type MenubarSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> & {
  className?: string;
  inset?: boolean;
};

export type MenubarSubContentProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
> & {
  className?: string;
};

// ─── 2) المكوّنات مع forwardRef ───────────────────────────────────────────────

export const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  MenubarProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    data-slot="menubar"
    className={cn(
      "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
      className
    )}
    {...props}
  />
));
Menubar.displayName = "Menubar";

export const MenubarMenu: React.FC<MenubarMenuProps> = (props) => (
  <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
);

export const MenubarGroup: React.FC<MenubarGroupProps> = (props) => (
  <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
);

export const MenubarPortal: React.FC<MenubarPortalProps> = (props) => (
  <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
);

export const MenubarRadioGroup: React.FC<MenubarRadioGroupProps> = (props) => (
  <MenubarPrimitive.RadioGroup
    data-slot="menubar-radio-group"
    {...props}
  />
);

export const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    data-slot="menubar-trigger"
    className={cn(
      "focus:bg-accent focus:text-accent-foreground " +
        "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground " +
        "flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = "MenubarTrigger";

export const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContentProps
>(
  (
    {
      className,
      align = "start",
      alignOffset = -4,
      sideOffset = 8,
      ...props
    },
    ref
  ) => (
    <MenubarPortal>
      <MenubarPrimitive.Content
        ref={ref}
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground " +
            "data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " +
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 " +
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 " +
            "z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) " +
            "overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
);
MenubarContent.displayName = "MenubarContent";

export const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItemProps
>(({ className, inset, variant = "default", ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    data-slot="menubar-item"
    data-inset={inset}
    data-variant={variant}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground " +
        "data-[variant=destructive]:text-destructive " +
        "data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 " +
        "data-[variant=destructive]:focus:text-destructive " +
        "[&_svg:not([class*='text-'])]:text-muted-foreground " +
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none " +
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 " +
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = "MenubarItem";

export const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    data-slot="menubar-checkbox-item"
    className={cn(
      "focus:bg-accent focus:text-accent-foreground " +
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none " +
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " +
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

export const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemProps
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    data-slot="menubar-radio-item"
    className={cn(
      "focus:bg-accent focus:text-accent-foreground " +
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none " +
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 " +
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CircleIcon className="size-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = "MenubarRadioItem";

export const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  MenubarLabelProps
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    data-slot="menubar-label"
    data-inset={inset}
    className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = "MenubarLabel";

export const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparatorProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    data-slot="menubar-separator"
    className={cn("bg-border -mx-1 my-1 h-px", className)}
    {...props}
  />
));
MenubarSeparator.displayName = "MenubarSeparator";

export const MenubarShortcut: React.FC<MenubarShortcutProps> = ({
  className,
  ...props
}) => (
  <span
    data-slot="menubar-shortcut"
    className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
    {...props}
  />
);

export const MenubarSub: React.FC<MenubarSubProps> = (props) => (
  <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
);

export const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    data-slot="menubar-sub-trigger"
    data-inset={inset}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground " +
        "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground " +
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = "MenubarSubTrigger";

export const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    data-slot="menubar-sub-content"
    className={cn(
      "bg-popover text-popover-foreground " +
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 " +
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 " +
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 " +
        "z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = "MenubarSubContent";
