const fs = require('fs');
const path = require('path');

const scenesDir = path.join(__dirname, 'src', 'scenes');
const sceneFiles = [];

function findFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      sceneFiles.push(fullPath);
    }
  }
}
findFiles(scenesDir);

for (const file of sceneFiles) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Change component signature to accept stepIndex
  content = content.replace(/export function (Scene\w+)\(\) \{/, 'export function $1({ stepIndex }: { stepIndex: number }) {');
  
  // 2. Remove currentSceneIndex, currentStepIndex, and isActive
  // We'll replace the usePresentationStore destructuring.
  content = content.replace(/const\s*{\s*([^}]*)\s*}\s*=\s*usePresentationStore\(\);/g, (match, vars) => {
    let newVars = vars.split(',').map(v => v.trim()).filter(v => v !== 'currentSceneIndex' && v !== 'currentStepIndex');
    if (newVars.length === 0) {
      return '';
    }
    return `const { ${newVars.join(', ')} } = usePresentationStore();`;
  });
  
  content = content.replace(/const isActive = currentSceneIndex === \d+;\n?/g, '');
  
  // 3. Remove isActive={isActive} or isActive={true} from <Scene ...>
  content = content.replace(/isActive=\{.*?\}/g, '');
  
  // 4. Replace currentStepIndex with stepIndex in the rest of the file
  content = content.replace(/currentStepIndex/g, 'stepIndex');
  
  fs.writeFileSync(file, content);
}
console.log("Refactored scenes!");
