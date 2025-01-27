import { customer } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertCustomerSchema = createInsertSchema(customer, {
  firstName: (schema) => schema.min(1, "First name is required."),
  lastName: (schema) => schema.min(1, "First name is required."),
  address1: (schema) => schema.min(1, "First name is required."),
  city: (schema) => schema.min(1, "First name is required."),
  state: (schema) => schema.length(2, "Required exactly 2 characters."),
  zip: (schema) => schema.length(6, "Required exactly 6 characters."),
  phone: (schema) =>
    schema.regex(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid phone number format. Use XXX-XXX-XXXX"
    ),
  email: (schema) => schema.email("Invalid email address."),
});

export const selectCustomerSchema = createSelectSchema(customer);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
