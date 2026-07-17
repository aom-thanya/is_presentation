import { PresentationShell } from "./components/presentation/PresentationShell";
import { Scene0Cover } from "./scenes/part1/Scene0Cover";
import { Scene1BusinessProblem } from "./scenes/part1/Scene1BusinessProblem";
import { Scene2Personas } from "./scenes/part2/Scene2Personas";
import { Scene3ValueMapping } from "./scenes/part2/Scene3ValueMapping";
import { Scene4SolutionDesign } from "./scenes/part2/Scene4SolutionDesign";
import { Scene5LiveWalkthrough } from "./scenes/part3/Scene5LiveWalkthrough";
import { Scene6ValidationDesign } from "./scenes/part3/Scene6ValidationDesign";
import { Scene7TestCases } from "./scenes/part4/Scene7TestCases";
import { Scene8Roadmap } from "./scenes/part5/Scene8Roadmap";
import { Scene9Closing } from "./scenes/part5/Scene9Closing";
import { usePresentationStore } from "./store/presentationStore";
import { AnimatePresence } from "framer-motion";
import "./styles/globals.css";

function App() {
  const { currentSceneIndex, currentStepIndex } = usePresentationStore();
  
  const scenes = [
    <Scene0Cover key="0" stepIndex={currentStepIndex} />,
    <Scene1BusinessProblem key="1" stepIndex={currentStepIndex} />,
    <Scene2Personas key="2" stepIndex={currentStepIndex} />,
    <Scene3ValueMapping key="3" stepIndex={currentStepIndex} />,
    <Scene4SolutionDesign key="4" stepIndex={currentStepIndex} />,
    <Scene5LiveWalkthrough key="5" stepIndex={currentStepIndex} />,
    <Scene6ValidationDesign key="6" stepIndex={currentStepIndex} />,
    <Scene7TestCases key="7" stepIndex={currentStepIndex} />,
    <Scene8Roadmap key="8" stepIndex={currentStepIndex} />,
    <Scene9Closing key="9" stepIndex={currentStepIndex} />
  ];

  return (
    <PresentationShell>
      <AnimatePresence mode="wait">
        {scenes[currentSceneIndex]}
      </AnimatePresence>
    </PresentationShell>
  );
}

export default App;
