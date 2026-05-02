import React from "react";
import clsx from "clsx";

import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx("bg-primary text-white px-4 py-2", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;