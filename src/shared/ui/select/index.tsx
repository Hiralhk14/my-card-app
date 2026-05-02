import React, { forwardRef } from "react";
import clsx from "clsx";

import type { SelectProps } from "@/types/type";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block mb-1 text-sm text-gray-700">
            {label}
          </label>
        )}
        <select id={id} ref={ref}
          className={clsx(
            "w-full border px-3 py-2 text-sm bg-white",
            error ? "border-danger" : "border-gray-300",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}

          {options?.map((i) => (
            <option key={i?.value} value={i?.value}>
              {i?.label}
            </option>
          ))}
        </select>

        {error && (
          <p className="mt-1 text-xs text-danger">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;