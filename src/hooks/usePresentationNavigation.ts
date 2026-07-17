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
  const currentScene = presentationData.scenes[currentSceneIndex];

  const goNext = useCallback(() => {
    if (isTransitioning) return;

    if (currentStepIndex < currentScene.totalSteps - 1) {
      goToStep(currentStepIndex + 1);
    } else if (currentSceneIndex < totalScenes - 1) {
      goToScene(currentSceneIndex + 1);
    }
  }, [isTransitioning, currentStepIndex, currentScene.totalSteps, currentSceneIndex, totalScenes, goToStep, goToScene]);

  const goPrevious = useCallback(() => {
    if (isTransitioning) return;

    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    } else if (currentSceneIndex > 0) {
      const prevScene = presentationData.scenes[currentSceneIndex - 1];
      goToScene(currentSceneIndex - 1);
      // Automatically go to the last step of the previous scene
      usePresentationStore.setState({ currentStepIndex: prevScene.totalSteps - 1 });
    }
  }, [isTransitioning, currentStepIndex, currentSceneIndex, goToStep, goToScene]);

  // Sync URL hash
  useEffect(() => {
    const sceneId = presentationData.scenes[currentSceneIndex]?.id;
    if (sceneId) {
      window.history.replaceState(null, "", `#${sceneId}`);
    }
  }, [currentSceneIndex]);

  return { goNext, goPrevious };
}
