import { useEffect } from "react";
import { usePresentationNavigation } from "./usePresentationNavigation";
import { usePresentationStore } from "../store/presentationStore";
import { useFullscreen } from "./useFullscreen";

export function useKeyboardNavigation() {
  const { goNext, goPrevious } = usePresentationNavigation();
  const { toggleFullscreen } = useFullscreen();
  const { goToScene } = usePresentationStore();
  const totalScenes = 1; // Assuming 1 for setup, update dynamically later

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          goPrevious();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "Home":
          e.preventDefault();
          goToScene(0);
          break;
        case "End":
          e.preventDefault();
          goToScene(totalScenes - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious, toggleFullscreen, goToScene]);
}
