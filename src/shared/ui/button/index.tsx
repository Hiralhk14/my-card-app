import React from "react";
import clsx from "clsx";

import type { ButtonProps } from "@/types/type";

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const buttonStyle =
    variant === "secondary"
      ? "bg-secondary-light text-foreground"
      : "bg-primary text-white";

  return (
    <button
      type="button"
      className={clsx("px-4 py-2", buttonStyle)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;