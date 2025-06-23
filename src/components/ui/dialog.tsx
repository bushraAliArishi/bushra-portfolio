// src/components/ui/dialog.tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// 1) נגזור טיפוסי props לכל רכיב
type DialogRootProps = React.ComponentProps<typeof DialogPrimitive.Root>;
type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;
type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;
type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;
type DialogDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;
type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

// 2) מיישמים את הרכיבים עם הטיפוסים הנכונים

/** Root wrapper */
export function Dialog(props: DialogRootProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

/** הכפתור / האלמנט שפותח את הדיאלוג */
export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

/** ה-Portal שתופס את ה־DOM מחוץ לזרם הראשי */
export function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

/** כפתור סגירה */
export function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

/** ה-Overlay השחור הרקע */
export function DialogOverlay({
  className,
  ...props
}: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out " +
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 " +
          "fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

/** התוכן (החלון) עצמו של הדיאלוג */
export function DialogContent({
  className,
  children,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in " +
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 " +
            "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 " +
            "data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 " +
            "grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] " +
            "translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg " +
            "duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className={cn(
            "ring-offset-background focus:ring-ring data-[state=open]:bg-accent " +
              "data-[state=open]:text-muted-foreground absolute top-4 right-4 " +
              "rounded-xs opacity-70 transition-opacity hover:opacity-100 " +
              "focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none " +
              "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          )}
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

/** כותרת עליונה של התוכן */
export function DialogHeader({
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

/** פוטר / כפתורי הפעולה בתחתית */
export function DialogFooter({
  className,
  ...props
}: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

/** Title component */
export function DialogTitle({
  className,
  ...props
}: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

/** Description component */
export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
