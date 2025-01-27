"use client";
import { Form } from "@/components/ui/form";
import { selectCustomerSchemaType } from "@/zod-schemas/customers";
import {
  inserTicketSchema,
  type insertTicketSchemaType,
  type selectTicketSchemaType,
} from "@/zod-schemas/tickets";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  ticket?: selectTicketSchemaType;
  customer: selectCustomerSchemaType;
};

const TicketForm = ({ ticket, customer }: Props) => {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id ?? "(New)",
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? "",
    description: ticket?.description ?? "",
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? "new-ticket@example.com",
  };
  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(inserTicketSchema),
    defaultValues,
  });
  const submitForm = (data: insertTicketSchemaType) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <h2>
          {ticket?.id ? "Edit " : "New "}Ticket{" "}
          {ticket?.id ? `#${ticket.id}` : "Form"}
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)}>
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
};

export default TicketForm;
