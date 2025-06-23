// src/components/ui/navigation-menu.tsx
"use client";

import * as React from "react";
import * as NavPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// ─── 1) Props Types ────────────────────────────────────────────────────────────

export type NavigationMenuProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.Root
> & {
  className?: string;
  /** whether to render the animated viewport container */
  viewport?: boolean;
};

export type NavigationMenuListProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.List
> & { className?: string };

export type NavigationMenuItemProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.Item
> & { className?: string; };

export type NavigationMenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.Trigger
> & { className?: string; children: React.ReactNode; };

export type NavigationMenuContentProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.Content
> & { className?: string; };

export type NavigationMenuViewportProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.Viewport
> & { className?: string; };

export type NavigationMenuLinkProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.Link
> & { className?: string; };

export type NavigationMenuIndicatorProps = React.ComponentPropsWithoutRef<
  typeof NavPrimitive.Indicator
> & { className?: string; };

// ─── 2) CVA for the Trigger ───────────────────────────────────────────────────

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium " +
    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 " +
    "data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 " +
    "focus-visible:ring-ring/50 focus-visible:outline-none focus-visible:ring-[3px] transition-[color,box-shadow]"
);

// ─── 3) Components ─────────────────────────────────────────────────────────────

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.Root>,
  NavigationMenuProps
>(({ className, children, viewport = true, ...props }, ref) => (
  <NavPrimitive.Root
    ref={ref}
    data-slot="navigation-menu"
    data-viewport={viewport}
    className={cn(
      "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    {viewport && <NavigationMenuViewport />}
  </NavPrimitive.Root>
));
NavigationMenu.displayName = "NavigationMenu";

export const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.List>,
  NavigationMenuListProps
>(({ className, ...props }, ref) => (
  <NavPrimitive.List
    ref={ref}
    data-slot="navigation-menu-list"
    className={cn(
      "flex flex-1 list-none items-center justify-center gap-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.Item>,
  NavigationMenuItemProps
>(({ className, ...props }, ref) => (
  <NavPrimitive.Item
    ref={ref}
    data-slot="navigation-menu-item"
    className={cn("relative", className)}
    {...props}
  />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
  <NavPrimitive.Trigger
    ref={ref}
    data-slot="navigation-menu-trigger"
    className={cn(navigationMenuTriggerStyle(), className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.Content>,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => (
  <NavPrimitive.Content
    ref={ref}
    data-slot="navigation-menu-content"
    className={cn(
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out " +
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out " +
        "data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 " +
        "data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 " +
        "top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
      "group-data-[viewport=false]/navigation-menu:bg-popover " +
        "group-data-[viewport=false]/navigation-menu:text-popover-foreground " +
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in " +
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out " +
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 " +
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 " +
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 " +
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 " +
        "group-data-[viewport=false]/navigation-menu:top-full " +
        "group-data-[viewport=false]/navigation-menu:mt-1.5 " +
        "group-data-[viewport=false]/navigation-menu:overflow-hidden " +
        "group-data-[viewport=false]/navigation-menu:rounded-md " +
        "group-data-[viewport=false]/navigation-menu:border " +
        "group-data-[viewport=false]/navigation-menu:shadow " +
        "group-data-[viewport=false]/navigation-menu:duration-200 " +
        "**:data-[slot=navigation-menu-link]:focus:ring-0 " +
        "**:data-[slot=navigation-menu-link]:focus:outline-none",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.Viewport>,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
  <div className={cn("absolute top-full left-0 isolate z-50 flex justify-center")}>
    <NavPrimitive.Viewport
      ref={ref}
      data-slot="navigation-menu-viewport"
      className={cn(
        "origin-top-center bg-popover text-popover-foreground " +
          "data-[state=open]:animate-in data-[state=closed]:animate-out " +
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 " +
          "relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] " +
          "w-full overflow-hidden rounded-md border shadow " +
          "md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = "NavigationMenuViewport";

export const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.Link>,
  NavigationMenuLinkProps
>(({ className, ...props }, ref) => (
  <NavPrimitive.Link
    ref={ref}
    data-slot="navigation-menu-link"
    className={cn(
      "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-ring/50 focus-visible:outline-none " +
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground " +
        "data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent " +
        "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

export const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavPrimitive.Indicator>,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
  <NavPrimitive.Indicator
    ref={ref}
    data-slot="navigation-menu-indicator"
    className={cn(
      "flex h-1.5 items-end justify-center overflow-hidden top-full z-1 " +
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out " +
        "data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
  </NavPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";
