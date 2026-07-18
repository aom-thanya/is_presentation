import { useCallback, useEffect } from "react";
import { usePresentationStore } from "../store/presentationStore";
import { presentationData } from "../data/presentation";

export function usePresentationNavigation() {
  const {
    currentSceneIndex,
    isTransitioning,
    goToScene,
  } = usePresentationStore();

  const totalScenes = presentationData.scenes.length;

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    if (currentSceneIndex < totalScenes - 1) {
      goToScene(currentSceneIndex + 1);
    }
  }, [isTransitioning, currentSceneIndex, totalScenes, goToScene]);

  const goPrevious = useCallback(() => {
    if (isTransitioning) return;
    if (currentSceneIndex > 0) {
      goToScene(currentSceneIndex - 1);
    }
  }, [isTransitioning, currentSceneIndex, goToScene]);

  // Sync URL hash
  useEffect(() => {
    const sceneId = presentationData.scenes[currentSceneIndex]?.id;
    if (sceneId) {
      window.history.replaceState(null, "", `#${sceneId}`);
    }
  }, [currentSceneIndex]);

  return { goNext, goPrevious };
}
