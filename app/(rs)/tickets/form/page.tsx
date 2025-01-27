import BackButton from "@/components/BackButton";
import { customer } from "@/db/schema";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import TicketForm from "./TicketForm";

const TicketFormPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { customerId, ticketId } = await searchParams;
  if (!customerId && !ticketId) {
    return (
      <>
        <h2 className="text-2xl mb-2">
          Customer Id or Ticket Id is mandatory to create/edit tickets.
        </h2>
        <BackButton title="Go back" />
      </>
    );
  }
  if (customerId) {
    const customerFound = await getCustomer(parseInt(customerId));
    if (!customerFound) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Customer for the given ID {customerId} not found.
          </h2>
          <BackButton title="Go back" />
        </>
      );
    }
    if (!customer.isActive) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Customer is not active for the given ID {customerId}.
          </h2>
          <BackButton title="Go back" />
        </>
      );
    }
    //Going to show form for creating new ticket.
    return <TicketForm customer={customerFound} />;
  }
  if (ticketId) {
    const ticketFound = await getTicket(parseInt(ticketId));
    if (!ticketFound) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Ticket for the given ID {ticketId} not found.
          </h2>
          <BackButton title="Go back" />
        </>
      );
    }
    const customerFound = await getCustomer(ticketFound.customerId);
    //Going to show form for found ticket
    return <TicketForm customer={customerFound} ticket={ticketFound} />;
  }
};

export default TicketFormPage;
