"use client";
import { Form } from "@/components/ui/form";
import { selectCustomerSchemaType } from "@/zod-schemas/customers";
import {
  inserTicketSchema,
  type insertTicketSchemaType,
  type selectTicketSchemaType,
} from "@/zod-schemas/tickets";
import TextAreaWithLabel from "@/components/inputs/TextAreaWithLabel";
import InputWithLabel from "@/components/inputs/InputWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CheckboxWithLabel from "@/components/inputs/CheckboxWithLabel";

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
      <div className="max-w-[80%] mx-auto my-2">
        <h2 className="font-semibold text-xl">
          {ticket?.id ? "Edit " : "New "}Ticket{" "}
          {ticket?.id ? `#${ticket.id}` : "Form"}
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex gap-10 max-w-[80%] mx-auto"
        >
          <div className="flex flex-col gap-3 flex-1">
            <InputWithLabel<insertTicketSchemaType>
              fieldTitle="Title"
              nameInSchema="title"
            />
            <InputWithLabel<insertTicketSchemaType>
              fieldTitle="Tech"
              nameInSchema="tech"
              disabled={true}
            />
            <CheckboxWithLabel<insertTicketSchemaType>
              fieldTitle="Completed"
              nameInSchema="completed"
              message="Yes"
            />
            <div className="space-y-3">
              <h3>Customer Info</h3>
              <hr className="w-4/5" />
              <p>
                {customer.firstName} {customer.lastName}
              </p>
              <p>{customer.address1}</p>
              {customer.address2 && <p>{customer.address2}</p>}
              <p>
                {customer.city}, {customer.state}, {customer.zip}
              </p>
              <hr className="w-4/5" />
              <p>Email: {customer.email}</p>
              <p>Phone: {customer.phone}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <TextAreaWithLabel<insertTicketSchemaType>
              fieldTitle="Description"
              nameInSchema="description"
              rows={15}
            />
            <div className="w-full flex justify-between">
              <Button type="submit" title="Save" className="w-[80%]">
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

export default TicketForm;
