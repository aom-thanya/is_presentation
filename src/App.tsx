import { PresentationShell } from "./components/presentation/PresentationShell";
import { Scene0Cover } from "./scenes/part1/Scene0Cover";
import { Scene1BusinessProblem } from "./scenes/part1/Scene1BusinessProblem";
import { Scene2Personas } from "./scenes/part2/Scene2Personas";
import { Scene3ValueMapping } from "./scenes/part2/Scene3ValueMapping";
import { Scene4SolutionAndWalkthrough } from "./scenes/part2/Scene4SolutionAndWalkthrough";
import { Scene5ValidationAndTestCases } from "./scenes/part3/Scene5ValidationAndTestCases";
import { Scene6RoadmapAndClosing } from "./scenes/part5/Scene6RoadmapAndClosing";
import { usePresentationStore } from "./store/presentationStore";
import { AnimatePresence } from "framer-motion";
import "./styles/globals.css";

function App() {
  const { currentSceneIndex } = usePresentationStore();
  
  const scenes = [
    <Scene0Cover key="0" />,
    <Scene1BusinessProblem key="1" />,
    <Scene2Personas key="2" />,
    <Scene3ValueMapping key="3" />,
    <Scene4SolutionAndWalkthrough key="4" />,
    <Scene5ValidationAndTestCases key="5" />,
    <Scene6RoadmapAndClosing key="6" />
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
