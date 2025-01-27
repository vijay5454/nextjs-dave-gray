"use client";

import {
  type selectCustomerSchemaType,
  type insertCustomerSchemaType,
  insertCustomerSchema,
} from "@/zod-schemas/customers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

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
      <div>
        <h2>{customer?.id ? "Edit " : "New "} Customer Form</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)}>
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
};

export default CustomerForm;
