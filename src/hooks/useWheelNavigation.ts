import { useEffect, useRef } from "react";
import { usePresentationNavigation } from "./usePresentationNavigation";

const WHEEL_THRESHOLD = 50;
const WHEEL_COOLDOWN = 400;

export function useWheelNavigation() {
  const { goNext, goPrevious } = usePresentationNavigation();
  const lastWheelTime = useRef(0);
  const accumulatedDelta = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      
      // If we are in cooldown, reset delta so we don't build up momentum 
      // that triggers immediately after cooldown ends.
      if (now - lastWheelTime.current < WHEEL_COOLDOWN) {
        accumulatedDelta.current = 0;
        return;
      }

      accumulatedDelta.current += e.deltaY;

      if (Math.abs(accumulatedDelta.current) >= WHEEL_THRESHOLD) {
        if (accumulatedDelta.current > 0) {
          goNext();
        } else {
          goPrevious();
        }
        
        lastWheelTime.current = now;
        accumulatedDelta.current = 0; // Reset delta after navigation
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrevious]);
}
