import clsx from "clsx";

import { ErrorMessageProps } from "@/types/type";

const ErrorMessage = ({ error, className }: ErrorMessageProps) => {
  if (!error) {
    return null;
  }

  return (
    <p className={clsx("mt-1 text-xs text-danger", className)}>
      {error}
    </p>
  );
};

export default ErrorMessage;