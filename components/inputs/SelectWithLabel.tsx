"use client";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

type DataObj = {
  id: string;
  description: string;
};

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  data: DataObj[];
  className?: string;
};

function SelectWithLabel<S>({
  fieldTitle,
  nameInSchema,
  className,
  data,
  ...props
}: Props<S>) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel htmlFor={nameInSchema} className="text-base">
              {fieldTitle}
            </FormLabel>
            <Select onValueChange={field.onChange} {...field}>
              <FormControl>
                <SelectTrigger id={nameInSchema} className={`${className}`}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {data.map((eachData) => {
                  return (
                    <SelectItem
                      value={eachData.id}
                      key={`${nameInSchema}_${eachData.id}`}
                    >
                      {eachData.description}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default SelectWithLabel;
