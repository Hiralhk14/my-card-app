import { forwardRef } from "react";
import clsx from "clsx";

import { InputProps } from "@/types/type";
import ErrorMessage from "../error";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, rightIcon, className, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block mb-1 text-sm text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <input id={id}
            ref={ref}
            className={clsx(
              "w-full border px-3 py-2 text-sm bg-white",
              error ? "border-danger" : "border-gray-300",
              rightIcon && "pr-10",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-2.5 text-gray-400">
              {rightIcon}
            </span>
          )}
        </div>
        <ErrorMessage error={error} />

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;