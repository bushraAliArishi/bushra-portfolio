// src/components/ui/slider.tsx
"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /** CSS class for the root element */
  className?: string;
  /** Controlled value */
  value?: number[];
  /** Uncontrolled default value */
  defaultValue?: number[];
  /** Minimum slider value */
  min?: number;
  /** Maximum slider value */
  max?: number;
}

export function Slider({
  className,
  value,
  defaultValue,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  // Determine how many thumbs to render
  const _values = React.useMemo<number[]>(() => {
    if (Array.isArray(value)) return value;
    if (Array.isArray(defaultValue)) return defaultValue;
    return [min, max];
  }, [value, defaultValue, min, max]);

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none items-center select-none " +
          "data-[disabled]:opacity-50 " +
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 " +
          "data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full " +
            "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full " +
            "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute " +
              "data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>

      {/** Render one thumb per value */}
      {_values.map((_, idx) => (
        <SliderPrimitive.Thumb
          key={idx}
          data-slot="slider-thumb"
          className={cn(
            "border-primary bg-background ring-ring/50 block size-4 shrink-0 " +
              "rounded-full border shadow-sm transition-[color,box-shadow] " +
              "hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden " +
              "disabled:pointer-events-none disabled:opacity-50"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}
