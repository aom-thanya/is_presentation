import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../design-system/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "pill";
  active?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", active, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none",
          "min-h-[40px] px-4 py-2",
          {
            "rounded-button": variant !== "pill",
            "rounded-pill": variant === "pill",

            "bg-primary text-primary-foreground border border-primary hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-[1px] hover:shadow-sm": variant === "primary",
            "bg-surface border border-border text-text-primary hover:bg-surface-muted hover:text-text-primary": variant === "secondary",
            "bg-transparent text-text-subtle hover:bg-primary-soft hover:text-primary": variant === "ghost",
            "bg-transparent border border-border-strong text-text-primary hover:bg-surface-muted": variant === "outline",
            
            // Pill variants can be active or inactive
            "bg-primary text-primary-foreground border border-primary": variant === "pill" && active,
            "bg-surface text-primary border border-primary": variant === "pill" && !active,
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
