"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  title: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton = ({ title, variant, className }: ButtonProps) => {
  const router = useRouter();
  return (
    <Button
      title={title}
      variant={variant}
      className={className}
      onClick={() => router.back()}
    >
      {title}
    </Button>
  );
};

export default BackButton;
