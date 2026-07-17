import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { CheckCircle } from "lucide-react";

export function Scene5LiveWalkthrough() {
  const { currentSceneIndex, currentStepIndex } = usePresentationStore();
  const isActive = currentSceneIndex === 5;

  const walkthroughSteps = [
    { step: 1, title: "Create Campaign Brief", msg: "Campaign information is entered only once.", obs: "The Campaign Record will be reused in every following step." },
    { step: 2, title: "Generate Campaign Record", msg: "The system processes and standardizes the brief.", obs: "A central record is created as the source of truth." },
    { step: 3, title: "Search Influencer by Name", msg: "Find known influencers instantly.", obs: "Unified search interface retrieves accurate profiles." },
    { step: 4, title: "Search Influencer by Reference Image", msg: "Find influencers visually without knowing their names.", obs: "System matches reference image to database profiles." },
    { step: 5, title: "Select Influencers", msg: "Add candidates to the campaign directly.", obs: "The selection is saved against the Central Campaign Record." },
    { step: 6, title: "Generate Deal Sheet", msg: "Commercial data is automatically mapped.", obs: "No manual copying needed to prepare the Deal Sheet." },
    { step: 7, title: "Generate Proposal", msg: "Client presentation is generated instantly.", obs: "The exact same data flows into the final Proposal." }
  ];

  const takeaways = [
    "Campaign Data is created once.",
    "Campaign Data is reused across multiple business steps.",
    "No repeated Campaign Information entry.",
    "One Campaign. One Data. One Source of Truth."
  ];

  const isGuidePhase = currentStepIndex >= 0 && currentStepIndex <= 7;
  const isTakeawaysPhase = currentStepIndex >= 8;

  const activeGuideStep = isGuidePhase && currentStepIndex > 0 ? walkthroughSteps[currentStepIndex - 1] : null;

  return (
    <Scene id="slide5-live-walkthrough" isActive={isActive} theme="light">
      <div className="flex h-full w-full">
        
        {/* Left Panel: Presentation Guide */}
        <div className="w-1/3 bg-surface border-r border-border h-full flex flex-col pt-12 px-8 relative z-20 shadow-md">
          
          <AnimatePresence mode="wait">
            {currentStepIndex === 0 && (
              <motion.div key="intro" className="flex flex-col h-full justify-center" variants={fadeUpVariants} initial="initial" animate="animate" exit="exit">
                <h2 className="text-4xl font-bold text-text-primary leading-tight mb-4">Live Product<br/>Walkthrough</h2>
                <p className="text-xl text-text-secondary">Demonstrate how one Campaign flows through the system using the real product.</p>
                <div className="mt-12 text-sm text-text-muted font-bold tracking-widest uppercase animate-pulse">Press Next to Begin</div>
              </motion.div>
            )}

            {activeGuideStep && (
              <motion.div key={activeGuideStep.step} className="flex flex-col h-full justify-start pt-12" variants={fadeUpVariants} initial="initial" animate="animate" exit="exit">
                
                <div className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Current Step {activeGuideStep.step}/{walkthroughSteps.length}</div>
                <h3 className="text-3xl font-bold text-text-primary mb-12">{activeGuideStep.title}</h3>

                <div className="flex flex-col gap-6">
                  <div className="p-6 bg-primary-soft border border-primary/20 rounded-panel">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">Key Message</span>
                    <p className="text-lg text-primary font-medium">{activeGuideStep.msg}</p>
                  </div>

                  <div className="p-6 bg-surface-muted border border-border rounded-panel">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-secondary block mb-2">What to observe</span>
                    <p className="text-lg text-text-primary">{activeGuideStep.obs}</p>
                  </div>
                </div>

              </motion.div>
            )}

            {isTakeawaysPhase && (
              <motion.div key="takeaways" className="flex flex-col h-full justify-center" variants={fadeUpVariants} initial="initial" animate="animate" exit="exit">
                <h3 className="text-3xl font-bold text-text-primary mb-8">Key Takeaways</h3>
                <div className="flex flex-col gap-4">
                  {takeaways.map((takeaway, idx) => {
                    const isVisible = currentStepIndex >= 8 + idx;
                    return (
                      <AnimatePresence key={idx}>
                        {isVisible && (
                          <motion.div 
                            className="flex items-start gap-3 p-4 bg-success/5 border border-success/20 rounded-lg"
                            variants={fadeUpVariants} initial="initial" animate="animate"
                          >
                            <CheckCircle size={24} className="text-success shrink-0 mt-0.5" />
                            <span className="text-lg text-text-primary font-medium">{takeaway}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Panel: Live Product iframe */}
        <div className="w-2/3 h-full bg-border-strong relative">
          
          {/* Iframe wrapper. Using pointer-events-auto allows user interaction inside iframe */}
          <div className="absolute inset-0 pointer-events-auto">
            <iframe 
              src="https://is-prototype.vercel.app/" 
              className={cn(
                "w-full h-full border-none transition-all duration-700",
                isTakeawaysPhase ? "opacity-30 grayscale blur-sm" : "opacity-100 grayscale-0 blur-none"
              )}
              title="Live Prototype"
            />
          </div>

          {/* Overlay to dim iframe during takeaways */}
          <AnimatePresence>
            {isTakeawaysPhase && (
              <motion.div 
                className="absolute inset-0 bg-surface/50 backdrop-blur-sm pointer-events-none z-10"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

        </div>
      </div>
    </Scene>
  );
}
