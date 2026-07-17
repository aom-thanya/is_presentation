import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sceneVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { VisuallyHidden } from "../ui/VisuallyHidden";

interface SceneProps {
  id: string;
  isActive: boolean;
  theme?: "light" | "soft" | "dark" | "primary";
  className?: string;
  children: ReactNode;
}

export function Scene({ 
  id, 
  isActive, 
  theme = "light", 
  className, 
  children
}: SceneProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          id={id}
          aria-hidden={!isActive}
          className={cn(
            "absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden",
            "px-[var(--scene-padding-x)] py-[var(--scene-padding-y)]",
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
          
          <div className="w-full max-w-[var(--content-max-width)] h-full relative">
            {children}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
