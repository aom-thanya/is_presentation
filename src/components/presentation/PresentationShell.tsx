import type { ReactNode, MouseEvent } from "react";
import { usePresentationStore } from "../../store/presentationStore";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import { useWheelNavigation } from "../../hooks/useWheelNavigation";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { usePresentationNavigation } from "../../hooks/usePresentationNavigation";
import { PresenterControls } from "./PresenterControls";
import { ProgressIndicator } from "./ProgressIndicator";
import { presentationData } from "../../data/presentation";
import { VisuallyHidden } from "../ui/VisuallyHidden";

interface PresentationShellProps {
  children: ReactNode;
}

export function PresentationShell({ children }: PresentationShellProps) {
  useKeyboardNavigation();
  useWheelNavigation();
  const prefersReducedMotion = useReducedMotion();
  const { goNext } = usePresentationNavigation();
  const { currentSceneIndex, currentStepIndex } = usePresentationStore();
  
  const currentScene = presentationData.scenes[currentSceneIndex];

  const handleCanvasClick = (e: MouseEvent<HTMLDivElement>) => {
    // Basic implementation of click navigation (center safe area moves forward)
    // Avoid triggering if clicking on controls or interactive elements inside
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }
    goNext();
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden bg-[var(--color-background-primary)]"
      onClick={handleCanvasClick}
      data-reduced-motion={prefersReducedMotion}
    >
      {/* Live region for accessibility announcement */}
      <VisuallyHidden aria-live="polite" aria-atomic="true">
        {currentScene 
          ? `Scene ${currentSceneIndex + 1} of ${presentationData.scenes.length}: ${currentScene.title}, Step ${currentStepIndex + 1} of ${currentScene.totalSteps}` 
          : ""}
      </VisuallyHidden>

      {/* Main presentation content area */}
      <main className="w-full h-full relative">
        {children}
      </main>

      {/* Overlays */}
      <ProgressIndicator />
      <PresenterControls />
    </div>
  );
}
