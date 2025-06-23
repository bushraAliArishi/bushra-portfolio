"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// ===== أنواع الـ props =====
type SheetRootProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root>;
type SheetTriggerProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>;
type SheetOverlayProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>;
type SheetContentProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
  side?: "left" | "right" | "top" | "bottom";
};
type SheetHeaderProps = React.ComponentPropsWithoutRef<"div">;
type SheetFooterProps = React.ComponentPropsWithoutRef<"div">;
type SheetTitleProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>;
type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>;

// ===== Sheet =====
export const Sheet = (props: SheetRootProps) => (
  <SheetPrimitive.Root
    data-slot="sheet"
    {...props}
  />
);
Sheet.displayName = "Sheet";

// ===== SheetTrigger =====
export const SheetTrigger = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Trigger>,
  SheetTriggerProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Trigger
    ref={ref}
    data-slot="sheet-trigger"
    className={cn(className)}
    {...props}
  />
));
SheetTrigger.displayName = "SheetTrigger";

// ===== SheetClose =====
export const SheetClose = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Close
    ref={ref}
    data-slot="sheet-close"
    className={cn(className)}
    {...props}
  />
));
SheetClose.displayName = "SheetClose";

// ===== SheetOverlay =====
export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  SheetOverlayProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    data-slot="sheet-overlay"
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = "SheetOverlay";

// ===== SheetContent =====
export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, children, side = "right", ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      data-slot="sheet-content"
      className={cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out",
        side === "right" &&
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
        side === "left" &&
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        side === "top" &&
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
        side === "bottom" &&
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close
        className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
      >
        <XIcon className="size-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = "SheetContent";

// ===== SheetHeader =====
export const SheetHeader: React.FC<SheetHeaderProps> = ({
  className,
  ...props
}) => (
  <div
    data-slot="sheet-header"
    className={cn("flex flex-col gap-1.5 p-4", className)}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

// ===== SheetFooter =====
export const SheetFooter: React.FC<SheetFooterProps> = ({
  className,
  ...props
}) => (
  <div
    data-slot="sheet-footer"
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

// ===== SheetTitle =====
export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  SheetTitleProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    data-slot="sheet-title"
    className={cn("text-foreground font-semibold", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

// ===== SheetDescription =====
export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    data-slot="sheet-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";
