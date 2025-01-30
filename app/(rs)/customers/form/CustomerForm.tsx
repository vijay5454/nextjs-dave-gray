"use client";

import {
  type selectCustomerSchemaType,
  type insertCustomerSchemaType,
  insertCustomerSchema,
} from "@/zod-schemas/customers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputWithLabel from "@/components/inputs/InputWithLabel";
import { Button } from "@/components/ui/button";
import TextAreaWithLabel from "@/components/inputs/TextAreaWithLabel";
import SelectWithLabel from "@/components/inputs/SelectWithLabel";
import indianStates from "@/constants/StatesArray";

const CustomerForm = ({
  customer,
}: {
  customer?: selectCustomerSchemaType;
}) => {
  const defaultValues: insertCustomerSchemaType = {
    id: customer?.id ?? 0,
    firstName: customer?.firstName ?? "",
    lastName: customer?.lastName ?? "",
    address1: customer?.address1 ?? "",
    address2: customer?.address2 ?? "",
    city: customer?.city ?? "",
    state: customer?.state ?? "",
    zip: customer?.zip ?? "",
    phone: customer?.phone ?? "",
    email: customer?.email ?? "",
    notes: customer?.notes ?? "",
  };
  const form = useForm<insertCustomerSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  });
  const submitForm = (data: insertCustomerSchemaType) => {
    console.log(data);
  };
  return (
    <div>
      <div className="max-w-[80%] mx-auto my-2">
        <h2 className="font-semibold text-xl">
          {customer?.id ? "Edit " : "New "} Customer Form
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex gap-10 max-w-[80%] mx-auto"
        >
          <div className="flex flex-col gap-3 flex-1">
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="First Name"
              nameInSchema="firstName"
            />
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Last Name"
              nameInSchema="lastName"
            />
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="1st Address"
              nameInSchema="address1"
            />
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="2nd Address"
              nameInSchema="address2"
            />
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="City"
              nameInSchema="city"
            />
            <SelectWithLabel<insertCustomerSchemaType>
              fieldTitle="State"
              nameInSchema="state"
              data={indianStates}
              className="w-[65%]"
            />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Postal Code"
              nameInSchema="zip"
            />
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Email"
              nameInSchema="email"
            />
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Phone"
              nameInSchema="phone"
            />
            <TextAreaWithLabel<insertCustomerSchemaType>
              fieldTitle="Notes"
              nameInSchema="notes"
              rows={10}
            />
            <div className="w-full flex gap-4">
              <Button type="submit" title="Save" className="w-3/4">
                Save
              </Button>
              <Button
                type="reset"
                title="Reset"
                variant="destructive"
                onClick={() => {
                  form.reset(defaultValues);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CustomerForm;
