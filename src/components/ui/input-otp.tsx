// src/components/ui/input-otp.tsx
"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// 1) נגזור את טיפוסי הפרופס מתוך ה–OTPInput המקורי:
type OTPInputProps = React.ComponentPropsWithoutRef<typeof OTPInput>;

// 2) טיפוס לקונטיינר (הרבה זמן משתמשים ב־div רגיל):
type OTPInputGroupProps = React.HTMLAttributes<HTMLDivElement>;

// 3) טיפוס לחיתוך (slot) הבודד:
type OTPInputSlotProps = React.HTMLAttributes<HTMLDivElement> & {
  index: number;
};

// 4) טיפוס ל־separator:
type OTPInputSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

/** עטיפת ה־OTPInput עם יכולת להוסיף containerClassName ו־className */
export function InputOTP({
  containerClassName,
  className,
  ...props
}: OTPInputProps & {
  containerClassName?: string;
  className?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

/** קבוצה של שדות ה־OTP (כמו wrapper) */
export function InputOTPGroup({
  className,
  ...props
}: OTPInputGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

/** slot יחיד בתוך ה־OTP (כדי לשלוט על char, caret וכו') */
export function InputOTPSlot({
  index,
  className,
  ...props
}: OTPInputSlotProps) {
  const ctx = React.useContext(OTPInputContext);
  const slot = ctx?.slots[index] ?? { char: undefined, hasFakeCaret: false, isActive: false };
  const { char, hasFakeCaret, isActive } = slot;

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-input border-y border-r text-sm " +
          "first:rounded-l-md first:border-l last:rounded-r-md transition-all outline-none " +
          "data-[active=true]:z-10 data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 " +
          "aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

/** מפריד אופציונלי בין השדות (כמו קו או אייקון) */
export function InputOTPSeparator({
  className,
  ...props
}: OTPInputSeparatorProps) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className={cn("px-1 text-muted-foreground", className)}
      {...props}
    >
      <MinusIcon />
    </div>
  );
}
