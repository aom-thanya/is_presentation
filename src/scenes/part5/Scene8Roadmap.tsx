import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { CheckCircle, BrainCircuit } from "lucide-react";

export function Scene8Roadmap() {
  const { currentSceneIndex, currentStepIndex, goToStep } = usePresentationStore();
  const isActive = currentSceneIndex === 8;

  // Phase logic
  const isOverview = currentStepIndex === 0;
  const isPhase1 = currentStepIndex === 1;
  const isPhase2 = currentStepIndex >= 2 && currentStepIndex <= 8;
  const isPhase3 = currentStepIndex >= 9 && currentStepIndex <= 11;

  return (
    <Scene id="slide8-roadmap" isActive={isActive} theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative px-8">
        
        {/* Header */}
        <AnimatePresence>
          <motion.h2 
            className="text-4xl text-text-primary font-bold mb-12 text-center"
            variants={fadeUpVariants} initial="initial" animate="animate" exit={{ opacity: 0, y: -20 }}
          >
            IS Roadmap
          </motion.h2>
        </AnimatePresence>

        <div className="relative w-full flex-1 flex flex-col items-center">
          
          {/* Main Container for Phases 1-3 */}
          <AnimatePresence mode="wait">
            <motion.div 
              key="phases-container" 
              className="w-full max-w-5xl flex gap-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
                
                {/* Phase 1 Column */}
                <div 
                  className={cn(
                    "flex-1 flex flex-col transition-all duration-500 overflow-hidden",
                    (isOverview || isPhase1) ? "opacity-100" : "opacity-30 blur-[2px] grayscale"
                  )}
                  onClick={() => goToStep(1)}
                >
                  <div className="p-6 bg-surface border-2 border-primary rounded-panel shadow-sm flex flex-col h-full cursor-pointer hover:shadow-md">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">1</div>
                      <h3 className="text-xl font-bold text-primary">Validate the Campaign Data Foundation</h3>
                    </div>
                    
                    <AnimatePresence>
                      {isPhase1 && (
                        <motion.div variants={staggerContainerVariants} initial="initial" animate="animate" className="flex flex-col gap-6">
                          <div className="inline-block bg-success/10 text-success text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">Current Scope</div>
                          <ul className="flex flex-col gap-2">
                            {["Structured Campaign Brief", "Central Campaign Record", "Influencer Discovery", "Auto Deal Sheet", "Auto Proposal", "User Validation"].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-text-secondary font-medium"><CheckCircle size={16} className="text-success" /> {item}</li>
                            ))}
                          </ul>
                          <div className="mt-4 p-4 bg-primary-soft rounded-xl border border-primary/20">
                            <span className="block text-xs font-bold text-primary uppercase mb-1">Objective</span>
                            <span className="text-sm font-bold text-primary">พิสูจน์ว่า Campaign Data สามารถถูกสร้างครั้งเดียวและนำไปใช้ต่อได้จริง</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phase 2 Column */}
                <div 
                  className={cn(
                    "flex-1 flex flex-col transition-all duration-500 overflow-hidden",
                    (isOverview || isPhase2) ? "opacity-100" : "opacity-30 blur-[2px] grayscale"
                  )}
                  onClick={() => goToStep(2)}
                >
                  <div className="p-6 bg-surface border-2 border-info rounded-panel shadow-sm flex flex-col h-full cursor-pointer hover:shadow-md">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-info/10 text-info rounded-full flex items-center justify-center font-bold">2</div>
                      <h3 className="text-xl font-bold text-info">AI-Assisted Content Operations</h3>
                    </div>

                    <AnimatePresence>
                      {isPhase2 && (
                        <motion.div className="flex flex-col gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <div className="inline-block bg-surface-muted text-text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">Future Work</div>
                          
                          <div className="flex flex-col gap-4">
                            
                            {/* Idea Review */}
                            {currentStepIndex >= 3 && (
                              <div className="p-4 bg-info/5 rounded-xl border border-info/20">
                                <h4 className="font-bold text-info flex items-center gap-2 mb-3"><BrainCircuit size={16}/> AI Content Idea Review</h4>
                                <div className="text-sm font-medium text-text-secondary mb-2">Input: <span className="font-normal">Working Brief, Content Idea</span></div>
                                {currentStepIndex >= 4 && (
                                  <div className="text-sm font-medium text-info">Output: <span className="font-normal">Idea Alignment, Key Message Coverage, Tone of Voice, Missing Requirements, Suggested Direction</span></div>
                                )}
                              </div>
                            )}

                            {/* Draft Review */}
                            {currentStepIndex >= 5 && (
                              <div className="p-4 bg-info/5 rounded-xl border border-info/20">
                                <h4 className="font-bold text-info flex items-center gap-2 mb-3"><BrainCircuit size={16}/> AI Content Draft Review</h4>
                                <div className="text-sm font-medium text-text-secondary mb-2">Input: <span className="font-normal">Working Brief, Caption, Image, Video</span></div>
                                {currentStepIndex >= 6 && (
                                  <div className="text-sm font-medium text-info">Output: <span className="font-normal">Key Message Coverage, Product Visibility, CTA Check, Missing Requirements, Revision Suggestions</span></div>
                                )}
                              </div>
                            )}

                            {/* Compliance Check */}
                            {currentStepIndex >= 7 && (
                              <div className="p-4 bg-info/5 rounded-xl border border-info/20">
                                <h4 className="font-bold text-info flex items-center gap-2 mb-3"><BrainCircuit size={16}/> AI Final Post Compliance Check</h4>
                                <div className="text-sm font-medium text-text-secondary mb-2">Input: <span className="font-normal">Post URL, Screenshot, Caption</span></div>
                                {currentStepIndex >= 8 && (
                                  <div className="text-sm font-medium text-info">Output: <span className="font-normal">Hashtag Check, Mention Check, Disclosure Check, Link Check, Deliverable Check</span></div>
                                )}
                              </div>
                            )}

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phase 3 Column */}
                <div 
                  className={cn(
                    "flex-1 flex flex-col transition-all duration-500 overflow-hidden",
                    (isOverview || isPhase3) ? "opacity-100" : "opacity-30 blur-[2px] grayscale"
                  )}
                  onClick={() => goToStep(9)}
                >
                  <div className="p-6 bg-surface border-2 border-warning rounded-panel shadow-sm flex flex-col h-full cursor-pointer hover:shadow-md">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-warning/10 text-warning rounded-full flex items-center justify-center font-bold">3</div>
                      <h3 className="text-xl font-bold text-warning">Campaign Analytics and Decision Support</h3>
                    </div>

                    <AnimatePresence>
                      {isPhase3 && (
                        <motion.div className="flex flex-col gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <div className="inline-block bg-surface-muted text-text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">Future Capability</div>
                          
                          {currentStepIndex >= 10 && (
                            <div className="p-4 bg-surface-muted rounded-xl border border-border">
                              <h4 className="font-bold text-text-primary mb-2">Inputs</h4>
                              <ul className="text-sm text-text-secondary flex flex-col gap-1 list-disc pl-4">
                                <li>Campaign Records</li>
                                <li>Influencer Selection</li>
                                <li>Approval History</li>
                                <li>Revision History</li>
                                <li>Campaign Timeline</li>
                              </ul>
                            </div>
                          )}

                          {currentStepIndex >= 11 && (
                            <div className="p-4 bg-warning/10 rounded-xl border border-warning/20">
                              <h4 className="font-bold text-warning mb-2">Outputs</h4>
                              <ul className="text-sm text-warning font-medium flex flex-col gap-1 list-disc pl-4">
                                <li>Approval Rate</li>
                                <li>Revision Count</li>
                                <li>Common Content Issues</li>
                                <li>Creator Performance</li>
                                <li>Campaign Lead Time</li>
                                <li>Influencer Recommendation</li>
                                <li>Campaign Planning Insights</li>
                              </ul>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </Scene>
  );
}
