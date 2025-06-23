// src/components/ui/chart.tsx
"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  TooltipProps as RechartsTooltipProps,
  Legend as RechartsLegend,
  LegendProps as RechartsLegendProps,
} from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
  light: "",
  dark: ".dark",
} as const;

type Theme = keyof typeof THEMES; // "light" | "dark"

// === أنواع الإعداد (config) للسلسلة الواحدة ===
export type ChartSeriesConfigItem = {
  label?: string;
  icon?: React.ComponentType<any>;
  color?: string;
  theme?: { light?: string; dark?: string };
};

// خريطة المفاتيح إلى إعداداتها
export type ChartConfig = Record<string, ChartSeriesConfigItem>;

// === Context & Hook ===
interface ChartContextValue {
  config: ChartConfig;
}

const ChartContext = React.createContext<ChartContextValue | null>(null);

export function useChart(): ChartContextValue {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within <ChartContainer>");
  return ctx;
}

// === ChartContainer ===
export interface ChartContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  config: ChartConfig;
  children: React.ReactElement; // عنصر واحد فقط
}

export function ChartContainer({
  id,
  config,
  children,
  className,
  ...props
}: ChartContainerProps) {
  const uniquePart = React.useId().replace(/:/g, "");
  const chartId = `chart-${id ?? uniquePart}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground " +
          // ... بقية الـ classNames كما هي
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

// === ChartStyle ===
interface ChartStyleProps {
  id: string;
  config: ChartConfig;
}

const ChartStyle: React.FC<ChartStyleProps> = ({ id, config }) => {
  // نفلتر الإعدادات التي لديها لون أو ثيم
  const entries = Object.entries(config).filter(
    ([, cfg]) => cfg.color || cfg.theme
  );
  if (!entries.length) return null;

  // نخبر TS بأنّ هذه المصفوفة تفصيلية لمفاتيح الـ THEMES
  const themesEntries = Object.entries(THEMES) as [Theme, string][];

  const css = themesEntries
    .map(([theme, prefix]) => {
      const bodyLines = entries
        .map(([key, cfg]) => {
          // هنا TS يعرف أنّ theme هو "light"|"dark"
          const color = cfg.theme?.[theme] ?? cfg.color;
          return color ? `  --color-${key}: ${color};` : null;
        })
        .filter(Boolean)
        .join("\n");
      return `\n${prefix} [data-chart="${id}"] {\n${bodyLines}\n}`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

// === ChartTooltip & Content ===
export const ChartTooltip: React.FC<RechartsTooltipProps<any, any>> = (props) => (
  <RechartsTooltip {...props} />
);

// ... بقية التعريفات بدون تغيير على الـ className
