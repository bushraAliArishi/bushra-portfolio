"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Controller, FormProvider, useFormContext, useFormState } from "react-hook-form";
import { type FieldPath, type FieldValues } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

interface FormProps<TFieldValues extends FieldValues = FieldValues> extends React.ComponentPropsWithoutRef<typeof FormProvider<TFieldValues>> {}

const Form = FormProvider as React.FC<FormProps>

interface FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  name: TName;
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

interface FormFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends React.ComponentPropsWithoutRef<typeof Controller<TFieldValues, TName>> {}

const FormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
  {
    ...props
  }: FormFieldProps<TFieldValues, TName>
) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

interface FormItemContextValue {
  id: string;
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

function useFormField() {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

function FormItem({
  className,
  ...props
}: FormItemProps) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

interface FormLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {}

function FormLabel({
  className,
  ...props
}: FormLabelProps) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props} />
  );
}

interface FormControlProps extends React.ComponentPropsWithoutRef<typeof Slot> {}

function FormControl({
  ...props
}: FormControlProps) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props} />
  );
}

interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function FormDescription({
  className,
  ...props
}: FormDescriptionProps) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

function FormMessage({
  className,
  ...props
}: FormMessageProps) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}>
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
