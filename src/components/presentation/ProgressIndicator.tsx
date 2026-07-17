import { usePresentationStore } from "../../store/presentationStore";
import { presentationData } from "../../data/presentation";

export function ProgressIndicator() {
  const { currentSceneIndex } = usePresentationStore();
  const totalScenes = presentationData.scenes.length;
  
  // Format as 01 / 01
  const formatNumber = (num: number) => num.toString().padStart(2, '0');
  
  const progressPercent = ((currentSceneIndex + 1) / totalScenes) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      <div className="absolute bottom-[var(--control-safe-area)] right-[var(--control-safe-area)] text-sm font-mono text-text-muted">
        {formatNumber(currentSceneIndex + 1)} / {formatNumber(totalScenes)}
      </div>
      <div className="h-[2px] bg-border w-full">
        <div 
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
