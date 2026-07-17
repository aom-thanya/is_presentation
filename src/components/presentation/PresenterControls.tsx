import { usePresentationNavigation } from "../../hooks/usePresentationNavigation";
import { usePresentationStore } from "../../store/presentationStore";
import { useFullscreen } from "../../hooks/useFullscreen";
import { IconButton } from "../ui/IconButton";
import { ChevronLeft, ChevronRight, Maximize, RotateCcw } from "lucide-react";
import { cn } from "../../design-system/cn";

// For development only, as requested
const SHOW_PRESENTER_CONTROLS_BY_DEFAULT = true;

export function PresenterControls() {
  const { goNext, goPrevious } = usePresentationNavigation();
  const { resetPresentation } = usePresentationStore();
  const { toggleFullscreen } = useFullscreen();

  return (
    <div 
      className={cn(
        "fixed bottom-[var(--control-safe-area)] left-1/2 -translate-x-1/2 flex items-center gap-2 p-2",
        "bg-surface/94 border border-border shadow-sm backdrop-blur-md rounded-control",
        "transition-opacity duration-300 opacity-0 hover:opacity-100",
        {
          "opacity-100": SHOW_PRESENTER_CONTROLS_BY_DEFAULT
        }
      )}
      onClick={(e) => e.stopPropagation()} // Prevent triggering slide navigation
    >
      <IconButton aria-label="Previous step" onClick={goPrevious}>
        <ChevronLeft size={20} />
      </IconButton>
      
      <IconButton aria-label="Next step" onClick={goNext}>
        <ChevronRight size={20} />
      </IconButton>

      <div className="w-[1px] h-6 bg-border mx-1" />

      <IconButton aria-label="Restart presentation" onClick={resetPresentation}>
        <RotateCcw size={16} />
      </IconButton>

      <IconButton aria-label="Toggle full screen" onClick={toggleFullscreen}>
        <Maximize size={16} />
      </IconButton>
    </div>
  );
}
