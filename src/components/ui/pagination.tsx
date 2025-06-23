// src/components/ui/pagination.tsx
"use client";

import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// 1) Props for each slot:

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export interface PaginationContentProps
  extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
}

export interface PaginationItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  // no className here, it's the <li> wrapper
}

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  /** true if this link represents the current page */
  isActive?: boolean;
  /** button size variant (if you ever need to override) */
  size?: "icon" | "default";
}

export interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

// 2) The components:

export const Pagination: React.FC<PaginationProps> = ({
  className,
  ...props
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    data-slot="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

export const PaginationContent: React.FC<PaginationContentProps> = ({
  className,
  ...props
}) => (
  <ul
    data-slot="pagination-content"
    className={cn("flex items-center gap-1", className)}
    {...props}
  />
);

export const PaginationItem: React.FC<PaginationItemProps> = ({
  ...props
}) => <li data-slot="pagination-item" {...props} />;

export const PaginationLink: React.FC<PaginationLinkProps> = ({
  className,
  isActive = false,
  size = "icon",
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    data-slot="pagination-link"
    data-active={isActive}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);

export const PaginationPrevious: React.FC<PaginationLinkProps> = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
    {...props}
  >
    <ChevronLeftIcon />
    <span className="hidden sm:block">Previous</span>
  </PaginationLink>
);

export const PaginationNext: React.FC<PaginationLinkProps> = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
    {...props}
  >
    <span className="hidden sm:block">Next</span>
    <ChevronRightIcon />
  </PaginationLink>
);

export const PaginationEllipsis: React.FC<PaginationEllipsisProps> = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    data-slot="pagination-ellipsis"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
