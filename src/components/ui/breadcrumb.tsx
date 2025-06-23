"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

// === Breadcrumb ===
export type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav"> & {
  separator?: React.ReactNode
}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <nav
      data-slot="breadcrumb"
      aria-label="breadcrumb"
      {...props}
    />
  )
}

// === BreadcrumbList ===
export type BreadcrumbListProps = React.ComponentPropsWithoutRef<"ol"> & {
  className?: string
}

export function BreadcrumbList({
  className,
  ...props
}: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

// === BreadcrumbItem ===
export type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li"> & {
  className?: string
}

export function BreadcrumbItem({
  className,
  ...props
}: BreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

// === BreadcrumbLink ===
export type BreadcrumbLinkProps =
  React.ComponentPropsWithoutRef<typeof Slot> & {
    className?: string
    asChild?: boolean
  }

export function BreadcrumbLink({
  className,
  asChild,
  ...props
}: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a"
  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}

// === BreadcrumbSeparator ===
export type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"li"> & {
  className?: string
}

export function BreadcrumbSeparator({
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      <ChevronRightIcon />
    </li>
  )
}

// === BreadcrumbPage ===
export type BreadcrumbPageProps = React.ComponentPropsWithoutRef<"span"> & {
  className?: string
}

export function BreadcrumbPage({
  className,
  ...props
}: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}

// === BreadcrumbEllipsis ===
export type BreadcrumbEllipsisProps = React.ComponentPropsWithoutRef<"span"> & {
  className?: string
}

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <DotsHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}
