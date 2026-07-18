import { create } from "zustand";

interface PresentationState {
  currentSceneIndex: number;
  currentStepIndex: number;
  isTransitioning: boolean;
  isFullscreen: boolean;
  isPresenterControlsVisible: boolean;
  isDetailOpen: boolean;
  direction: 1 | -1 | 0;

  next: () => void;
  previous: () => void;
  goToScene: (index: number, stepIndex?: number) => void;
  goToStep: (index: number) => void;
  resetPresentation: () => void;
  setTransitioning: (value: boolean) => void;
  setFullscreen: (value: boolean) => void;
  setPresenterControlsVisible: (value: boolean) => void;
}

export const usePresentationStore = create<PresentationState>((set, get) => ({
  currentSceneIndex: 0,
  currentStepIndex: 0,
  isTransitioning: false,
  isFullscreen: false,
  isPresenterControlsVisible: false,
  isDetailOpen: false,
  direction: 0,

  next: () => {
    // Navigation logic is handled by a separate hook to compute valid next states based on data,
    // but the store holds the simple dispatcher.
  },
  previous: () => {},
  
  goToScene: (index, stepIndex) => set({ 
    currentSceneIndex: index,
    currentStepIndex: stepIndex !== undefined ? stepIndex : 0,
    direction: index > get().currentSceneIndex ? 1 : -1
  }),

  goToStep: (index) => set({
    currentStepIndex: index,
    direction: index > get().currentStepIndex ? 1 : -1
  }),

  resetPresentation: () => set({
    currentSceneIndex: 0,
    currentStepIndex: 0,
    direction: -1
  }),

  setTransitioning: (value) => set({ isTransitioning: value }),
  setFullscreen: (value) => set({ isFullscreen: value }),
  setPresenterControlsVisible: (value) => set({ isPresenterControlsVisible: value }),
}));
