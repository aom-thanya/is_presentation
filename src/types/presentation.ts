export type RevealStepDefinition = {
  id: string;
  label?: string;
};

export type SceneDefinition = {
  id: string;
  title: string;
  totalSteps: number;
  presenterNote?: string;
};

export type PresentationDefinition = {
  id: string;
  title: string;
  scenes: SceneDefinition[];
};
