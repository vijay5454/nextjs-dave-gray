import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/BackButton";
import CustomerForm from "./CustomerForm";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
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
      } else {
        //Going to use form for existing customer
        return <CustomerForm customer={customerFound} />;
      }
    } else {
      //Going to use form for new customer
      return <CustomerForm />;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
}
