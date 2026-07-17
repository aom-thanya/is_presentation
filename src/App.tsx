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
import "./styles/globals.css";

function App() {
  return (
    <PresentationShell>
      <Scene0Cover />
      <Scene1BusinessProblem />
      <Scene2Personas />
      <Scene3ValueMapping />
      <Scene4SolutionDesign />
      <Scene5LiveWalkthrough />
      <Scene6ValidationDesign />
      <Scene7TestCases />
      <Scene8Roadmap />
      <Scene9Closing />
    </PresentationShell>
  );
}

export default App;
