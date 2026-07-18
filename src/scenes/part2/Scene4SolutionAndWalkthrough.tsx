import { useState } from "react";
import { Scene } from "../../components/presentation/Scene";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { Database, Search, FileSpreadsheet, FileArchive, LineChart, CheckCircle, FileText } from "lucide-react";

export function Scene4SolutionAndWalkthrough() {
  const [activeTab, setActiveTab] = useState<'design' | 'walkthrough'>('design');

  const features = [
    { id: "f1", title: "Structured Campaign Brief", icon: FileText, desc: "Input brief via structured form to create the Central Campaign Record." },
    { id: "f2", title: "Influencer Discovery", icon: Search, desc: "Search and match influencers using Campaign Context." },
    { id: "f3", title: "Auto Deal Sheet", icon: FileSpreadsheet, desc: "Map and calculate commercial information automatically." },
    { id: "f4", title: "Auto Proposal", icon: FileArchive, desc: "Reuse data and map into Client Proposal Template." }
  ];

  const takeaways = [
    "Campaign Data is created once.",
    "Campaign Data is reused across multiple business steps.",
    "No repeated Campaign Information entry.",
    "One Campaign. One Data. One Source of Truth."
  ];

  return (
    <Scene id="slide4-solution-walkthrough" theme="light">
      
      {/* Tab Navigation */}
      <div className="absolute top-6 right-8 z-50 flex gap-2 bg-surface p-1.5 rounded-lg border border-border shadow-sm">
        <button 
          onClick={() => setActiveTab('design')} 
          className={cn(
            "px-6 py-2 rounded-md text-sm font-bold transition-all duration-300", 
            activeTab === 'design' ? "bg-primary text-primary-foreground shadow-md" : "text-text-secondary hover:bg-surface-muted"
          )}
        >
          Solution Design
        </button>
        <button 
          onClick={() => setActiveTab('walkthrough')} 
          className={cn(
            "px-6 py-2 rounded-md text-sm font-bold transition-all duration-300", 
            activeTab === 'walkthrough' ? "bg-primary text-primary-foreground shadow-md" : "text-text-secondary hover:bg-surface-muted"
          )}
        >
          Live Walkthrough
        </button>
      </div>

      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          
          {/* Solution Design Tab */}
          {activeTab === 'design' && (
            <motion.div 
              key="tab-design"
              className="flex flex-col items-center justify-start h-full pt-[8vh] w-full px-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl text-text-primary font-bold mb-4 text-center"
                variants={fadeUpVariants} initial="initial" animate="animate"
              >
                Solution Design: Data Created Once, Reused Many Times
              </motion.h2>
              <div className="w-16 h-[3px] rounded-full bg-primary mb-12" />

              <div className="flex w-full max-w-6xl gap-16 items-center">
                
                {/* Left: Core Features List */}
                <motion.div 
                  className="w-1/2 flex flex-col gap-4"
                  variants={staggerContainerVariants} initial="initial" animate="animate"
                >
                  <h3 className="text-xl font-bold text-text-primary mb-2">Core Features</h3>
                  {features.map((feat) => (
                    <motion.div 
                      key={feat.id}
                      className="flex items-start gap-4 p-4 bg-surface border border-border rounded-panel shadow-sm hover:border-primary/50 transition-colors"
                      variants={fadeUpVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <feat.icon size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-text-primary">{feat.title}</span>
                        <span className="text-sm text-text-secondary">{feat.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Right: Radial Hub Visual */}
                <motion.div 
                  className="w-1/2 flex items-center justify-center relative h-[450px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                    {/* Connecting dashed lines */}
                    <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-primary/20" />
                    
                    {/* Orbiting Outputs */}
                    <div className="absolute w-[300px] h-[300px] animate-[spin_40s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-surface-dark border border-border-strong text-text-inverse shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <Search size={24} className="text-info mb-2" />
                          <span className="font-semibold text-xs text-center">Discovery</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-surface-dark border border-border-strong text-text-inverse shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <FileSpreadsheet size={24} className="text-success mb-2" />
                          <span className="font-semibold text-xs text-center">Deal Sheet</span>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-surface-dark border border-border-strong text-text-inverse shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <FileArchive size={24} className="text-warning mb-2" />
                          <span className="font-semibold text-xs text-center">Proposal</span>
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-24 h-24 bg-surface-dark border border-border-strong text-text-inverse shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <LineChart size={24} className="text-text-muted mb-2" />
                          <span className="font-semibold text-xs text-center">Analytics</span>
                        </div>
                      </div>
                    </div>

                    {/* Center Data Hub */}
                    <div className="absolute w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(109,93,246,0.3)] z-30 bg-primary text-primary-foreground">
                      <Database size={32} className="mb-1" />
                      <span className="font-bold text-[10px] text-center leading-tight">Central<br/>Record</span>
                      <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" style={{ animationDuration: '2s' }} />
                    </div>

                  </div>
                </motion.div>
              </div>

            </motion.div>
          )}

          {/* Live Walkthrough Tab */}
          {activeTab === 'walkthrough' && (
            <motion.div 
              key="tab-walkthrough"
              className="flex w-full h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Left Panel: Takeaways */}
              <div className="w-[30%] bg-surface border-r border-border h-full flex flex-col pt-24 px-8 shadow-sm">
                <h2 className="text-3xl font-bold text-text-primary leading-tight mb-2">Live Prototype<br/>Walkthrough</h2>
                <p className="text-sm text-text-secondary mb-12">Interact with the system on the right to see the data flow in action.</p>
                
                <h3 className="text-xl font-bold text-text-primary mb-6">Key Takeaways</h3>
                <div className="flex flex-col gap-4">
                  {takeaways.map((takeaway, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-success/5 border border-success/20 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CheckCircle size={20} className="text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-text-primary font-medium">{takeaway}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Panel: Iframe */}
              <div className="w-[70%] h-full bg-border-strong relative">
                <iframe 
                  src="https://is-prototype.vercel.app/" 
                  className="w-full h-full border-none"
                  title="Live Prototype"
                />
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </Scene>
  );
}
