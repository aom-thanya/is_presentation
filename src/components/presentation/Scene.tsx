import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { sceneVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { VisuallyHidden } from "../ui/VisuallyHidden";

interface SceneProps {
  id: string;
  theme?: "light" | "soft" | "dark" | "primary";
  className?: string;
  fullWidth?: boolean;
  children: ReactNode;
}

export function Scene({ 
  id, 
  theme = "light", 
  className, 
  fullWidth = false,
  children
}: SceneProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        "absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden",
        fullWidth ? "p-0" : "px-[var(--scene-padding-x)] py-[var(--scene-padding-y)]",
        {
          "bg-page text-text-primary": theme === "light",
          "bg-primary-soft text-text-primary": theme === "soft",
          "bg-surface-dark text-text-inverse": theme === "dark",
          "bg-primary text-primary-foreground": theme === "primary",
        },
        className
      )}
      variants={sceneVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <VisuallyHidden>
        <h2>Scene: {id}</h2>
      </VisuallyHidden>
      
      <div className={cn("w-full h-full relative", fullWidth ? "max-w-none" : "max-w-[var(--content-max-width)]")}>
        {children}
      </div>
    </motion.section>
  );
}
