import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../../design-system/cn";

export const VisuallyHidden = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("sr-only", className)}
        {...props}
      />
    );
  }
);
VisuallyHidden.displayName = "VisuallyHidden";
