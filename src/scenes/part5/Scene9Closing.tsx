import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { Database, FileText, Search, Users, FileSpreadsheet, FileArchive, Zap, LineChart, RefreshCcw, ExternalLink } from "lucide-react";

export function Scene9Closing() {
  const { currentSceneIndex, currentStepIndex, goToScene, resetPresentation } = usePresentationStore();
  const isActive = currentSceneIndex === 9;

  const isFinalState = currentStepIndex >= 7;

  // Orbiting Modules
  const modules = [
    { id: "brief", icon: FileText, label: "Campaign Brief", delay: 0 },
    { id: "discovery", icon: Search, label: "Discovery", delay: 0.2 },
    { id: "selection", icon: Users, label: "Selection", delay: 0.4 },
    { id: "deal", icon: FileSpreadsheet, label: "Deal Sheet", delay: 0.6 },
    { id: "proposal", icon: FileArchive, label: "Proposal", delay: 0.8 },
    { id: "ai", icon: Zap, label: "AI Operations", delay: 1.0 },
    { id: "analytics", icon: LineChart, label: "Analytics", delay: 1.2 },
  ];

  return (
    <Scene id="slide9-closing" isActive={isActive} theme="light">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-full mx-auto relative px-8 overflow-hidden">
        
        {/* Animated Central Data Hub System */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          
          <AnimatePresence>
            {!isFinalState && (
              <motion.div 
                key="orbit-system"
                className="relative w-[800px] h-[800px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                
                {/* Connecting Lines / Data Flow */}
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-primary/10 animate-[spin_45s_linear_infinite_reverse]" />
                <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-primary/5 animate-[spin_30s_linear_infinite]" />

                {/* Orbiting Modules */}
                {modules.map((mod, i) => {
                  const angle = (i / modules.length) * 360;
                  const radius = 300; // Distance from center
                  const x = Math.cos(angle * (Math.PI / 180)) * radius;
                  const y = Math.sin(angle * (Math.PI / 180)) * radius;
                  
                  return (
                    <motion.div
                      key={mod.id}
                      className="absolute flex flex-col items-center justify-center"
                      initial={{ opacity: 0, x: x * 1.5, y: y * 1.5 }}
                      animate={{ opacity: 1, x, y }}
                      transition={{ delay: mod.delay, duration: 1, type: "spring" }}
                    >
                      <div className="w-16 h-16 bg-gray-900 border border-gray-800 text-white shadow-md rounded-2xl flex items-center justify-center mb-2 z-10 relative">
                        <mod.icon className="text-white" size={28} />
                        {/* Data pulse flowing towards center */}
                        <div className="absolute inset-0 border-2 border-primary rounded-2xl animate-ping opacity-20" />
                      </div>
                      <span className="font-semibold text-xs text-text-secondary uppercase tracking-wider">{mod.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Central Hub - Remains in Final State */}
          <motion.div 
            className="absolute z-20 flex flex-col items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: isFinalState ? 1.5 : 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div 
              className={cn(
                "w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_rgba(109,93,246,0.3)] transition-all duration-1000",
                isFinalState ? "shadow-[0_0_120px_rgba(109,93,246,0.6)]" : ""
              )}
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
            >
              <Database size={48} className="mb-2" />
              <span className="font-bold text-center leading-tight">Central<br/>Campaign Record</span>
            </div>
          </motion.div>
          
        </div>


        {/* Messaging Overlay */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center max-w-4xl min-h-[400px]">
          
          <AnimatePresence mode="wait">
            {!isFinalState && currentStepIndex > 0 && (
              <motion.div 
                key="progressive-text" 
                className="flex flex-col gap-6 items-center justify-center bg-surface/60 backdrop-blur-md p-12 rounded-[2rem] border border-border/50 shadow-xl"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20, scale: 0.95 }}
              >
                {currentStepIndex >= 1 && (
                  <motion.p variants={fadeUpVariants} initial="initial" animate="animate" className="text-2xl text-text-secondary font-medium">
                    Today, we transformed Campaign Information into Structured Campaign Data.
                  </motion.p>
                )}
                
                {currentStepIndex >= 2 && (
                  <motion.p variants={fadeUpVariants} initial="initial" animate="animate" className="text-2xl text-text-secondary font-medium">
                    The same Campaign Data can be reused across every business step.
                  </motion.p>
                )}
                
                {currentStepIndex >= 3 && (
                  <motion.p variants={fadeUpVariants} initial="initial" animate="animate" className="text-3xl text-text-primary font-bold mt-4">
                    Instead of documents driving the workflow,<br/>
                    <span className="text-primary">Data drives the workflow.</span>
                  </motion.p>
                )}

                <div className="flex gap-4 mt-8">
                  {currentStepIndex >= 4 && <motion.span variants={fadeUpVariants} initial="initial" animate="animate" className="text-3xl font-black uppercase tracking-tight text-text-primary">One Campaign.</motion.span>}
                  {currentStepIndex >= 5 && <motion.span variants={fadeUpVariants} initial="initial" animate="animate" className="text-3xl font-black uppercase tracking-tight text-text-primary">One Data.</motion.span>}
                  {currentStepIndex >= 6 && <motion.span variants={fadeUpVariants} initial="initial" animate="animate" className="text-3xl font-black uppercase tracking-tight text-primary">One Source of Truth.</motion.span>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grand Finale Text */}
          <AnimatePresence>
            {isFinalState && (
              <motion.div 
                key="finale-text"
                className="flex flex-col items-center justify-center pt-[300px]" // Offset to sit below the scaled-up Central Hub
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  <span className="text-4xl sm:text-6xl font-black text-text-primary uppercase tracking-tight">One Campaign.</span>
                  <span className="text-4xl sm:text-6xl font-black text-text-primary uppercase tracking-tight">One Data.</span>
                  <span className="text-4xl sm:text-6xl font-black text-primary uppercase tracking-tight">One Source of Truth.</span>
                </div>

                {/* Final Actions */}
                <motion.div 
                  className="flex gap-6 mt-16"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
                >
                  {currentStepIndex >= 8 && (
                    <button 
                      onClick={resetPresentation}
                      className="flex items-center gap-2 px-8 py-4 bg-surface-muted hover:bg-border text-text-secondary hover:text-text-primary rounded-full transition-colors font-bold pointer-events-auto"
                    >
                      <RefreshCcw size={18} /> Restart Presentation
                    </button>
                  )}
                  {currentStepIndex >= 9 && (
                    <button 
                      onClick={() => goToScene(5)} // Jump to Live Walkthrough (Scene index 5)
                      className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-colors font-bold shadow-lg shadow-primary/30 pointer-events-auto"
                    >
                      <ExternalLink size={18} /> Jump to Live Demo
                    </button>
                  )}
                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </Scene>
  );
}
