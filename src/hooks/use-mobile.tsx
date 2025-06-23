// src/hooks/use-mobile.ts
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Hook that returns true if the viewport width is below the mobile breakpoint.
 */
export function useIsMobile(): boolean {
  // نخزّن الحالة دائماً كـ boolean
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // ننشئ MediaQueryList
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // دالة تُنفّذ عند تغيّر الـ breakpoint
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // نضيف المستمع للتغييرات
    mql.addEventListener("change", handleChange);
    // ونحدّد القيمة الابتدائية بناءً على matches
    setIsMobile(mql.matches);

    // ننظّف المستمع عند التفكيك
    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}
