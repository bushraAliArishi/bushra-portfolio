// src/components/ui/resizable-panels.tsx
"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

// 1) Derive exact prop types from the primitives and augment where needed

export type ResizablePanelGroupProps = React.ComponentPropsWithoutRef<
  typeof ResizablePrimitive.PanelGroup
> & {
  className?: string;
};

export type ResizablePanelProps = React.ComponentPropsWithoutRef<
  typeof ResizablePrimitive.Panel
>;

export interface ResizableHandleProps
  extends React.ComponentPropsWithoutRef<
    typeof ResizablePrimitive.PanelResizeHandle
  > {
  /** Whether to show the little grip icon at center */
  withHandle?: boolean;
  className?: string;
}

// 2) Wrap each in forwardRef so refs work and className isn’t `any`

export const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelGroup>,
  ResizablePanelGroupProps
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    data-slot="resizable-panel-group"
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = "ResizablePanelGroup";

export const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Panel>,
  ResizablePanelProps
>((props, ref) => (
  <ResizablePrimitive.Panel
    ref={ref}
    data-slot="resizable-panel"
    {...props}
  />
));
ResizablePanel.displayName = "ResizablePanel";

export const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelResizeHandle>,
  ResizableHandleProps
>(({ withHandle = false, className, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    {...props}
    data-slot="resizable-handle"
    className={cn(
      "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center " +
        "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 " +
        "focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden " +
        "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full " +
        "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 " +
        "data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 " +
        "data-[panel-group-direction=vertical]:after:translate-x-0 " +
        "[&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
  
  >
    {withHandle && (
      <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
        <GripVerticalIcon className="size-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
));
ResizableHandle.displayName = "ResizableHandle";
