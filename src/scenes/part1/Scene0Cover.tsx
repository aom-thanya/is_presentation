import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants } from "../../design-system/animations";
import { Database } from "lucide-react";

export function Scene0Cover() {
  const { currentSceneIndex, currentStepIndex } = usePresentationStore();
  const isActive = currentSceneIndex === 0;

  // step 0: Central Object (with subtle data lines connecting to it)
  // step 1: Project Title
  // step 2: Tagline
  // step 3: "Scroll / Click to begin"

  return (
    <Scene id="cover" isActive={isActive} theme="light">
      <div className="flex flex-col items-center justify-center h-full text-center relative w-full">
        
        {/* Subtle Data Lines Background */}
        <AnimatePresence>
          {currentStepIndex >= 0 && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              {/* Abstract subtle data flow lines */}
              <div className="w-[600px] h-[600px] rounded-full border border-dashed border-primary/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-primary/20 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/10 animate-[pulse_4s_ease-in-out_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center gap-12 z-10">
          
          {/* Step 0: Central Campaign Data Object */}
          <AnimatePresence>
            {currentStepIndex >= 0 && (
              <motion.div
                className="w-24 h-24 bg-surface rounded-card shadow-md border border-border flex flex-col items-center justify-center text-primary"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Database size={40} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-center gap-4 h-[120px]">
            {/* Step 1: Project Title */}
            <AnimatePresence>
              {currentStepIndex >= 1 && (
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary"
                  variants={fadeUpVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  Influencer Campaign Data Hub
                </motion.h1>
              )}
            </AnimatePresence>

            {/* Step 2: Tagline */}
            <AnimatePresence>
              {currentStepIndex >= 2 && (
                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl font-medium text-primary tracking-wide"
                  variants={fadeUpVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  One Campaign. One Data. One Source of Truth.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Step 3: Scroll Instruction */}
        <AnimatePresence>
          {currentStepIndex >= 3 && (
            <motion.div
              className="absolute bottom-16 text-sm text-text-muted font-medium tracking-widest uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Scroll / Click to begin
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Scene>
  );
}
