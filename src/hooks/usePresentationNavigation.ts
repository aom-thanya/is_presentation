import { useCallback, useEffect } from "react";
import { usePresentationStore } from "../store/presentationStore";
import { presentationData } from "../data/presentation";

export function usePresentationNavigation() {
  const {
    currentSceneIndex,
    currentStepIndex,
    isTransitioning,
    goToScene,
    goToStep,
  } = usePresentationStore();

  const totalScenes = presentationData.scenes.length;

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    const currentScene = presentationData.scenes[currentSceneIndex];
    if (!currentScene) return;

    if (currentStepIndex < currentScene.totalSteps - 1) {
      goToStep(currentStepIndex + 1);
    } else if (currentSceneIndex < totalScenes - 1) {
      goToScene(currentSceneIndex + 1);
    }
  }, [isTransitioning, currentSceneIndex, currentStepIndex, totalScenes, goToScene, goToStep]);

  const goPrevious = useCallback(() => {
    if (isTransitioning) return;
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    } else if (currentSceneIndex > 0) {
      goToScene(currentSceneIndex - 1);
      // Wait, goToScene sets step to 0, which is correct when going back to a previous scene, usually we want to start from the beginning of it.
    }
  }, [isTransitioning, currentSceneIndex, currentStepIndex, goToScene, goToStep]);

  // Sync URL hash
  useEffect(() => {
    const sceneId = presentationData.scenes[currentSceneIndex]?.id;
    if (sceneId) {
      window.history.replaceState(null, "", `#${sceneId}`);
    }
  }, [currentSceneIndex]);

  return { goNext, goPrevious };
}
