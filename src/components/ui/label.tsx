// src/components/ui/label.tsx
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

// 1) نعرّف Props تورّث جميع خاصيات <label> القياسية
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** CSS classes إضافية */
  className?: string;
}

// 2) نستخدم forwardRef لتمرير ref إلى العنصر الفعلي
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <LabelPrimitive.Root
        ref={ref}
        data-slot="label"
        className={cn(
          "flex items-center gap-2 text-sm leading-none font-medium select-none " +
            "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 " +
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

// 3) يساعد هذا في ظهور الاسم الصحيح في DevTools
Label.displayName = "Label";
