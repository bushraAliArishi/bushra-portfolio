"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type TableProps = React.ComponentPropsWithoutRef<"table"> & {
  className?: string
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        ref={ref}
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
)
Table.displayName = "Table"

export type TableHeaderProps = React.ComponentPropsWithoutRef<"thead"> & {
  className?: string
}

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
)
TableHeader.displayName = "TableHeader"

export type TableBodyProps = React.ComponentPropsWithoutRef<"tbody"> & {
  className?: string
}

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
)
TableBody.displayName = "TableBody"

export type TableFooterProps = React.ComponentPropsWithoutRef<"tfoot"> & {
  className?: string
}

export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  )
)
TableFooter.displayName = "TableFooter"

export type TableRowProps = React.ComponentPropsWithoutRef<"tr"> & {
  className?: string
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
)
TableRow.displayName = "TableRow"

export type TableHeadProps = React.ComponentPropsWithoutRef<"th"> & {
  className?: string
}

export const TableHead = React.forwardRef<HTMLTableHeaderCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
)
TableHead.displayName = "TableHead"

export type TableCellProps = React.ComponentPropsWithoutRef<"td"> & {
  className?: string
}

export const TableCell = React.forwardRef<HTMLTableDataCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
)
TableCell.displayName = "TableCell"

export type TableCaptionProps = React.ComponentPropsWithoutRef<"caption"> & {
  className?: string
}

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
)
TableCaption.displayName = "TableCaption"
