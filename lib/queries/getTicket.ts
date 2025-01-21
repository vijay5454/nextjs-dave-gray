import { db } from "@/db";
import { tickets } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getTicket(id: number) {
  const ticketFound = await db.select().from(tickets).where(eq(tickets.id, id));
  return ticketFound[0];
}
