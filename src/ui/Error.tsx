import clsx from "clsx";
import React from "react";

export type ErrorProps = React.ComponentProps<"div">;

export const Error: React.FC<ErrorProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx("field-error", className)} {...props}>
      {children}
    </div>
  );
};
