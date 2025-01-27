import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { tickets } from "@/db/schema";

export const inserTicketSchema = createInsertSchema(tickets, {
  id: z.union([z.number(), z.literal("(New)")]),
  title: (schema) => schema.min(1, "Title is required."),
  description: (schema) => schema.min(1, "Description is required."),
  tech: (schema) => schema.email("Invalid email address."),
});

export const selectTicketSchema = createSelectSchema(tickets);

export type insertTicketSchemaType = typeof inserTicketSchema._type;
export type selectTicketSchemaType = typeof selectTicketSchema._type;
