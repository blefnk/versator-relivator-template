"use client";

import type { ButtonProps } from "~/components/ui/button";

import { Button } from "~/components/ui/button";
import { cn } from "~/utils/cn";

export function ClientButton({ className, ...props }: ButtonProps) {
  return <Button className={cn(className)} {...props}></Button>;
}
