import clsx from "clsx";

import type { CheckboxProps } from "@/types/type";
import ErrorMessage from "../error";

const Checkbox = ({ label, error, className, id, ...props }: CheckboxProps) => {
  return (
    <div>
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          id={id}
          className={clsx("w-4 h-4 border-gray-300", className)}
          {...props}
        />

        <span className="text-sm text-gray-700">
          {label}
        </span>
      </label>

      <ErrorMessage error={error} />

    </div>
  );
};

export default Checkbox;