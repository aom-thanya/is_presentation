import { useState } from "react";
import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../design-system/cn";
import { CheckCircle, BrainCircuit, Database, FileText, Search, Users, FileSpreadsheet, FileArchive, Zap, LineChart, RefreshCcw } from "lucide-react";

export function Scene6RoadmapAndClosing() {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'closing'>('roadmap');
  const { resetPresentation } = usePresentationStore();

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
      
      {/* Tab Navigation */}
      <div className="absolute top-6 right-8 z-50 flex gap-2 bg-surface p-1.5 rounded-lg border border-border shadow-sm">
        <button 
          onClick={() => setActiveTab('roadmap')} 
          className={cn(
            "px-6 py-2 rounded-md text-sm font-bold transition-all duration-300", 
            activeTab === 'roadmap' ? "bg-primary text-primary-foreground shadow-md" : "text-text-secondary hover:bg-surface-muted"
          )}
        >
          Project Roadmap
        </button>
        <button 
          onClick={() => setActiveTab('closing')} 
          className={cn(
            "px-6 py-2 rounded-md text-sm font-bold transition-all duration-300", 
            activeTab === 'closing' ? "bg-primary text-primary-foreground shadow-md" : "text-text-secondary hover:bg-surface-muted"
          )}
        >
          Closing
        </button>
      </div>

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
              className="flex flex-col items-center justify-center w-full h-full relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                <div className="relative w-[800px] h-[800px] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-primary/10 animate-[spin_45s_linear_infinite_reverse]" />
                  <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-primary/5 animate-[spin_30s_linear_infinite]" />

                  {modules.map((mod, i) => {
                    const angle = (i / modules.length) * 360;
                    const radius = 300;
                    const x = Math.cos(angle * (Math.PI / 180)) * radius;
                    const y = Math.sin(angle * (Math.PI / 180)) * radius;
                    
                    return (
                      <motion.div
                        key={mod.id}
                        className="absolute flex flex-col items-center justify-center"
                        initial={{ x: x * 1.5, y: y * 1.5 }}
                        animate={{ x, y }}
                        transition={{ delay: mod.delay, duration: 1, type: "spring" }}
                      >
                        <div className="w-12 h-12 bg-gray-900 border border-gray-800 text-white shadow-md rounded-xl flex items-center justify-center mb-2 z-10 relative">
                          <mod.icon className="text-white" size={20} />
                          <div className="absolute inset-0 border border-primary rounded-xl animate-ping opacity-20" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Central Hub Glow */}
              <div className="absolute z-10 flex flex-col items-center justify-center">
                <div className="w-64 h-64 rounded-full flex flex-col items-center justify-center shadow-[0_0_120px_rgba(109,93,246,0.6)] bg-primary text-primary-foreground">
                  <Database size={64} className="mb-2" />
                  <span className="font-bold text-center leading-tight text-xl">Central<br/>Campaign Record</span>
                </div>
              </div>

              {/* Grand Finale Text */}
              <div className="relative z-30 flex flex-col items-center justify-center mt-[350px]">
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  <span className="text-4xl sm:text-5xl font-black text-text-primary uppercase tracking-tight">One Campaign.</span>
                  <span className="text-4xl sm:text-5xl font-black text-text-primary uppercase tracking-tight">One Data.</span>
                  <span className="text-4xl sm:text-5xl font-black text-primary uppercase tracking-tight">One Source of Truth.</span>
                </div>

                <div className="flex gap-6 mt-16 z-50 pointer-events-auto">
                  <button 
                    onClick={resetPresentation}
                    className="flex items-center gap-2 px-8 py-4 bg-surface-muted hover:bg-border text-text-secondary hover:text-text-primary rounded-full transition-colors font-bold shadow-sm"
                  >
                    <RefreshCcw size={18} /> Restart Presentation
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </Scene>
  );
}
