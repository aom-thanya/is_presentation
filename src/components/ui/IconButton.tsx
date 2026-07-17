import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../design-system/cn";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string; // Make aria-label required for icon buttons
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none",
          "hover:bg-primary-soft text-text-subtle hover:text-primary",
          "h-[44px] w-[44px] sm:h-10 sm:w-10", // Minimum 44px on touch, 40px on desktop
          className
        )}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";
