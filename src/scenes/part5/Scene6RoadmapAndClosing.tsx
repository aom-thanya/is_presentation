import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, BrainCircuit, Database, FileText, Search, Users, FileSpreadsheet, FileArchive, Zap, LineChart, RefreshCcw } from "lucide-react";

export function Scene6RoadmapAndClosing() {
  const { resetPresentation, currentStepIndex } = usePresentationStore();
  const activeTab = currentStepIndex === 0 ? 'roadmap' : 'closing';

  // Orbiting Modules for Closing
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
    <Scene id="slide6-roadmap-closing" theme="light">

      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative px-8">
        <AnimatePresence mode="wait">
          
          {/* Roadmap Tab */}
          {activeTab === 'roadmap' && (
            <motion.div 
              key="tab-roadmap"
              className="flex flex-col items-center w-full h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl text-text-primary font-bold mb-4 text-center">Project Roadmap</h2>
              <div className="w-16 h-[3px] rounded-full bg-primary mb-12" />

              <div className="w-full max-w-6xl flex gap-6 h-full pb-8">
                
                {/* Phase 1 */}
                <div className="flex-1 flex flex-col p-6 bg-surface border-2 border-primary rounded-panel shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-primary">Validate Campaign Data Foundation</h3>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    <div className="inline-block bg-success/10 text-success text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">Current Phase</div>
                    <ul className="flex flex-col gap-3">
                      {["Structured Campaign Brief", "Central Campaign Record", "Influencer Discovery", "Auto Deal Sheet", "Auto Proposal", "User Validation"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-text-primary font-medium text-sm">
                          <CheckCircle size={18} className="text-success shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto p-4 bg-primary-soft rounded-xl border border-primary/20">
                      <span className="block text-xs font-bold text-primary uppercase mb-1">Objective</span>
                      <span className="text-sm font-bold text-primary">พิสูจน์ว่า Campaign Data สามารถถูกสร้างครั้งเดียวและนำไปใช้ต่อได้จริง</span>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="flex-1 flex flex-col p-6 bg-surface border border-info rounded-panel shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-info/10 text-info rounded-full flex items-center justify-center font-bold">2</div>
                    <h3 className="text-xl font-bold text-info">AI-Assisted Content Operations</h3>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="inline-block bg-surface-muted text-text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">Future Work</div>
                    <div className="flex flex-col gap-4">
                      <div className="p-4 bg-info/5 rounded-xl border border-info/20">
                        <h4 className="font-bold text-info flex items-center gap-2 mb-2 text-sm"><BrainCircuit size={16}/> Idea & Draft Review</h4>
                        <div className="text-xs font-medium text-text-secondary mb-1">Input: <span className="font-normal">Brief, Idea, Draft Content</span></div>
                        <div className="text-xs font-medium text-info">Output: <span className="font-normal">Alignment Check, Missing Requirements, Revision Suggestions</span></div>
                      </div>
                      <div className="p-4 bg-info/5 rounded-xl border border-info/20">
                        <h4 className="font-bold text-info flex items-center gap-2 mb-2 text-sm"><BrainCircuit size={16}/> Final Post Compliance Check</h4>
                        <div className="text-xs font-medium text-text-secondary mb-1">Input: <span className="font-normal">Post URL, Caption</span></div>
                        <div className="text-xs font-medium text-info">Output: <span className="font-normal">Hashtag, Mention, Disclosure, Link Check</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="flex-1 flex flex-col p-6 bg-surface border border-warning rounded-panel shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-warning/10 text-warning rounded-full flex items-center justify-center font-bold">3</div>
                    <h3 className="text-xl font-bold text-warning">Campaign Analytics & Insights</h3>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="inline-block bg-surface-muted text-text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">Future Capability</div>
                    
                    <div className="p-4 bg-surface-muted rounded-xl border border-border">
                      <h4 className="font-bold text-text-primary mb-2 text-sm">Inputs</h4>
                      <ul className="text-xs text-text-secondary flex flex-col gap-1 list-disc pl-4">
                        <li>Campaign Records</li>
                        <li>Approval & Revision History</li>
                        <li>Campaign Timeline</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-warning/10 rounded-xl border border-warning/20">
                      <h4 className="font-bold text-warning mb-2 text-sm">Outputs (Business Insights)</h4>
                      <ul className="text-xs text-warning font-medium flex flex-col gap-1 list-disc pl-4">
                        <li>Approval Rate & Revision Count</li>
                        <li>Creator Performance Analytics</li>
                        <li>Campaign Lead Time</li>
                        <li>Influencer Recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* Closing Tab */}
          {activeTab === 'closing' && (
            <motion.div 
              key="tab-closing"
              className="flex flex-col items-center justify-between w-full h-full relative pb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Top: Grand Finale Text */}
              <div className="relative z-30 flex flex-col items-center justify-center mt-4 mb-auto">
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  <motion.span initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-3xl sm:text-5xl font-black text-[#1a1a24] uppercase tracking-tight">One Campaign.</motion.span>
                  <motion.span initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.4}} className="text-3xl sm:text-5xl font-black text-[#1a1a24] uppercase tracking-tight">One Data.</motion.span>
                  <motion.span initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.6}} className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6d5df6] to-[#a341f0] uppercase tracking-tight drop-shadow-sm">One Source of Truth.</motion.span>
                </div>
              </div>

              {/* Center: Convergence Visual */}
              <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-8">
                
                <div className="relative w-full max-w-[800px] h-[400px] flex items-center justify-center">
                  
                  {/* Central Hub */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute z-20 flex flex-col items-center justify-center"
                  >
                    <div className="w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_rgba(109,93,246,0.3)] bg-gradient-to-br from-[#6d5df6] to-[#5a48e5] text-white border-4 border-white/50 backdrop-blur-md">
                      <Database size={48} className="mb-2 opacity-90" />
                      <span className="font-bold text-center leading-tight text-lg drop-shadow-md">Central<br/>Campaign<br/>Record</span>
                    </div>
                  </motion.div>

                  {/* Modules radiating inwards */}
                  {modules.map((mod, i) => {
                    const angle = (i / modules.length) * 360 - 90; // Start from top
                    const radiusX = 320;
                    const radiusY = 180;
                    const x = Math.cos(angle * (Math.PI / 180)) * radiusX;
                    const y = Math.sin(angle * (Math.PI / 180)) * radiusY;
                    
                    return (
                      <motion.div
                        key={mod.id}
                        className="absolute flex flex-col items-center justify-center z-10"
                        initial={{ x: x * 1.2, y: y * 1.2, opacity: 0 }}
                        animate={{ x, y, opacity: 1 }}
                        transition={{ delay: 1.2 + mod.delay * 0.3, duration: 0.8, type: "spring" }}
                      >
                        {/* Flowing Data Particle */}
                        <motion.div
                          className="absolute w-2 h-2 rounded-full bg-[#6d5df6] shadow-[0_0_10px_rgba(109,93,246,0.8)] z-0"
                          animate={{
                            x: [0, -x * 0.65],
                            y: [0, -y * 0.65],
                            opacity: [0, 1, 0],
                            scale: [1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: mod.delay,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Module Card */}
                        <div className="flex flex-col items-center gap-2 p-3 bg-white/90 backdrop-blur-sm border border-[#e4e5eb] shadow-sm rounded-xl min-w-[110px] z-10">
                          <div className="w-12 h-12 bg-[#f0efff] text-[#6d5df6] rounded-full flex items-center justify-center">
                            <mod.icon size={22} />
                          </div>
                          <span className="text-[12px] font-bold text-[#1a1a24] text-center leading-tight">{mod.label}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>


            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </Scene>
  );
}
