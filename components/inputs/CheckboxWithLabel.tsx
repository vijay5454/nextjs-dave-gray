"use client";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  message: string;
};

function CheckboxWithLable<S>({ fieldTitle, nameInSchema, message }: Props<S>) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => {
        return (
          <FormItem className="flex items-center gap-5">
            <FormLabel htmlFor={nameInSchema} className="text-base mt-2">
              {fieldTitle}
            </FormLabel>
            <div className="flex justify-center items-center gap-3">
              <FormControl>
                <Checkbox
                  onCheckedChange={field.onChange}
                  id={nameInSchema}
                  {...field}
                  checked={field.value}
                />
              </FormControl>
              {message}
            </div>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default CheckboxWithLable;
