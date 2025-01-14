import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavbuttonProps = {
  label: string;
  href?: string;
  Icon: LucideIcon;
};

const Navbutton = ({ label, href, Icon }: NavbuttonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      asChild
      className="rounded-full"
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
};

export default Navbutton;
