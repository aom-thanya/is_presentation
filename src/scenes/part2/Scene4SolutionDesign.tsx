import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { Database, FileText, Search, Users, FileSpreadsheet, FileArchive, LineChart, AlertCircle, Play, ArrowRight, Settings } from "lucide-react";

export function Scene4SolutionDesign({ stepIndex }: { stepIndex: number }) {
  const { goToStep } = usePresentationStore();
  
  const flowNodes = [
    { id: "brief", label: "Campaign Brief", icon: FileText },
    { id: "central", label: "Central Campaign Record", icon: Database },
    { id: "discovery", label: "Influencer Discovery", icon: Search },
    { id: "selection", label: "Influencer Selection", icon: Users },
    { id: "deal", label: "Deal Sheet", icon: FileSpreadsheet },
    { id: "proposal", label: "Proposal", icon: FileArchive },
    { id: "analytics", label: "Review & Analytics", icon: LineChart, isFuture: true },
  ];

  const consequences = [
    { step: 9, targetId: "discovery", text: "Buyer ต้องถามข้อมูลเพิ่ม" },
    { step: 10, targetId: "selection", text: "Planner อาจใช้ข้อมูลผิด" },
    { step: 11, targetId: "deal", text: "Deal Sheet และ Proposal อาจไม่ตรงกัน", secondaryTarget: "proposal" },
    { step: 12, targetId: "brief", text: "Working Brief อาจคลาดเคลื่อน" }, // Visual representation of general breakdown
    { step: 13, targetId: "analytics", text: "AI Content Review ในอนาคตจะไม่มี Context ที่เชื่อถือได้" }
  ];

  const features = [
    { id: "f1", title: "Structured Campaign Brief", startStep: 14, in: "Text / Structured Form", out: "Structured Campaign Data", proc: "Validate required fields and save Campaign Record" },
    { id: "f2", title: "Influencer Discovery", startStep: 17, in: "Influencer Name or Reference Image", out: "Relevant Influencer Profiles", proc: "Search and match within the available Influencer Database" },
    { id: "f3", title: "Auto Deal Sheet", startStep: 20, in: "Campaign Data, Selected Influencers, Deliverables, Rates", out: "Generated Deal Sheet", proc: "Map and calculate commercial information" },
    { id: "f4", title: "Auto Proposal", startStep: 23, in: "Campaign Data, Influencer Selection, Commercial Information", out: "Generated Proposal", proc: "Reuse data and map into Client Proposal Template" }
  ];

  // Phase logic
  const isFlowPhase = stepIndex >= 0 && stepIndex <= 6;
  const isFoundationPhase = stepIndex >= 7 && stepIndex <= 13;
  const activeConsequence = isFoundationPhase ? consequences.find(c => stepIndex >= c.step) : null;
  const activeConsequenceList = consequences.filter(c => stepIndex >= c.step);

  const isFeaturesPhase = stepIndex >= 14 && stepIndex <= 25;
  const activeFeature = isFeaturesPhase ? features.find(f => stepIndex >= f.startStep && stepIndex <= f.startStep + 2) : null;
  const featureSubStep = activeFeature ? stepIndex - activeFeature.startStep : -1; // 0=Input, 1=Process, 2=Output

  const isFinalPhase = stepIndex >= 26;
  const isFullyReused = stepIndex >= 27;

  return (
    <Scene id="slide4-solution-design"  theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[6vh] w-full max-w-full mx-auto relative px-8">
        
        {/* Title */}
        <AnimatePresence mode="wait">
          {!isFinalPhase && (
            <motion.h2 
              key="title"
              className="text-3xl sm:text-4xl text-text-primary font-bold mb-8 text-center"
              variants={fadeUpVariants} initial="initial" animate="animate" exit="exit"
            >
              Solution Design: Campaign Data Created Once, Reused Many Times
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Phase 1 & 2 & 3: Flow and Consequences */}
        <AnimatePresence>
          {(isFlowPhase || isFoundationPhase) && (
            <motion.div key="flow-phase" className="w-full flex flex-col items-center flex-1 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {/* Foundation Statement */}
              <AnimatePresence>
                {isFoundationPhase && (
                  <motion.div className="absolute top-0 text-center z-20" variants={fadeUpVariants} initial="initial" animate="animate">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Brief ไม่ใช่ Hero Feature</h3>
                    {stepIndex >= 8 && <p className="text-xl text-primary font-medium">แต่เป็น Data Foundation ของ Feature อื่น</p>}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Data Flow */}
              <div className="absolute top-[20vh] w-full max-w-5xl flex items-start justify-between">
                
                {/* Connecting Line Base */}
                <div className="absolute top-8 left-8 right-8 h-2 bg-surface-muted rounded-full -z-10" />
                
                {/* Connecting Line Active */}
                <motion.div 
                  className="absolute top-8 left-8 h-2 bg-primary rounded-full -z-10"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(Math.min(stepIndex, 6) / (flowNodes.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ maxWidth: "calc(100% - 4rem)" }}
                />

                {/* The flowing data object (Database Icon) */}
                <AnimatePresence>
                  {stepIndex >= 1 && stepIndex <= 6 && (
                    <motion.div
                      className="absolute top-[20px] w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20"
                      style={{ backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
                      initial={{ left: "0%" }}
                      animate={{ left: `calc(${(stepIndex / (flowNodes.length - 1)) * 100}% - 20px)` }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                      <Database size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Flow Nodes */}
                {flowNodes.map((node, idx) => {
                  const isRevealed = stepIndex >= idx;
                  const isBlocked = activeConsequenceList.some(c => c.targetId === node.id || c.secondaryTarget === node.id);
                  const isCentral = node.id === "central";

                  return (
                    <div key={node.id} className="relative flex flex-col items-center w-32">
                      <motion.div
                        className={cn(
                          "w-16 h-16 rounded-2xl border-2 flex items-center justify-center z-10 shadow-sm transition-colors duration-500",
                          isBlocked ? "border-red-500 bg-red-50 text-red-500" : ""
                        )}
                        style={
                          isBlocked ? {} :
                          isCentral ? { backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)", borderColor: "var(--color-primary)" } :
                          { backgroundColor: "var(--color-surface-dark)", color: "var(--color-text-inverse)", borderColor: "var(--color-surface-dark)" }
                        }
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: isRevealed ? 1 : 0.8, opacity: isRevealed ? 1 : 0 }}
                      >
                        <node.icon size={28} />
                      </motion.div>
                      
                      <motion.span
                        className={cn(
                          "text-center font-bold text-sm mt-4 px-2",
                          isBlocked ? "text-red-500" : (isCentral ? "text-primary" : "text-text-primary")
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isRevealed ? 1 : 0 }}
                      >
                        {node.label}
                        {node.isFuture && <span className="block text-xs text-text-muted mt-1 font-normal">(Future Scope)</span>}
                      </motion.span>

                      {/* Blocked Alert Icon */}
                      <AnimatePresence>
                        {isBlocked && (
                          <motion.div 
                            className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md z-30"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                          >
                            <AlertCircle size={16} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Consequence Text */}
              <AnimatePresence>
                {activeConsequence && (
                  <motion.div 
                    key={activeConsequence.step}
                    className="absolute top-[45vh] px-8 py-4 bg-red-50 border border-red-200 rounded-pill flex items-center gap-3 text-red-500 shadow-sm"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  >
                    <AlertCircle size={24} />
                    <span className="text-xl font-bold">{activeConsequence.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 4: Core Features */}
        <AnimatePresence>
          {isFeaturesPhase && (
            <motion.div key="features-phase" className="w-full flex-1 flex flex-col pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              <div className="flex gap-4 mb-12 overflow-x-auto pb-4 justify-center">
                {features.map(feat => {
                  const isSelected = activeFeature?.id === feat.id;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => goToStep(feat.startStep)}
                      className={cn(
                        "px-6 py-4 rounded-xl border text-left transition-all min-w-[240px] cursor-pointer shadow-sm",
                        isSelected ? "border-transparent scale-105" : "bg-surface text-text-primary border-border hover:border-border-strong"
                      )}
                      style={isSelected ? { backgroundColor: "var(--color-surface-dark)", color: "var(--color-text-inverse)" } : {}}
                    >
                      <h4 className="font-bold text-lg mb-1">{feat.title}</h4>
                      <span className="text-sm" style={isSelected ? { color: "rgba(255, 255, 255, 0.8)" } : { color: "var(--color-text-subtle)" }}>
                        {isSelected ? "Active" : "Click to view"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feature Detail View */}
              <AnimatePresence mode="wait">
                {activeFeature && (
                  <motion.div key={activeFeature.id} className="w-full max-w-4xl mx-auto flex gap-4" variants={staggerContainerVariants} initial="initial" animate="animate" exit="exit">
                    
                    {/* Input */}
                    <motion.div className="flex-1 flex flex-col items-center text-center p-6 bg-surface border border-border rounded-panel shadow-sm relative" variants={fadeUpVariants}>
                      <div className="w-12 h-12 bg-surface-muted rounded-full flex items-center justify-center text-text-subtle mb-4"><Play size={24} /></div>
                      <span className="text-sm font-bold uppercase tracking-wider text-text-muted mb-2">Input</span>
                      <span className="text-lg font-medium text-text-primary">{activeFeature.in}</span>
                    </motion.div>

                    {/* Process */}
                    <AnimatePresence>
                      {featureSubStep >= 1 && (
                        <motion.div className="flex-1 flex flex-col items-center text-center p-6 bg-surface-muted border border-border rounded-panel shadow-sm relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                          <div className="absolute top-1/2 -left-5 -translate-y-1/2 text-border-strong"><ArrowRight size={24}/></div>
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                            style={{ backgroundColor: "var(--color-surface-dark)", color: "var(--color-text-inverse)" }}
                          >
                            <Settings size={24} className="animate-spin-slow" />
                          </div>
                          <span className="text-sm font-bold uppercase tracking-wider text-text-primary mb-2">Process</span>
                          <span className="text-lg font-bold text-text-primary">{activeFeature.proc}</span>
                          <div className="absolute top-1/2 -right-5 -translate-y-1/2 text-border-strong"><ArrowRight size={24}/></div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Output */}
                    <AnimatePresence>
                      {featureSubStep >= 2 && (
                        <motion.div className="flex-1 flex flex-col items-center text-center p-6 bg-surface border border-border rounded-panel shadow-sm relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                          <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center text-success mb-4"><Database size={24} /></div>
                          <span className="text-sm font-bold uppercase tracking-wider text-success mb-2">Output</span>
                          <span className="text-lg font-bold text-success">{activeFeature.out}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 5: Final Reveal */}
        <AnimatePresence>
          {isFinalPhase && (
            <motion.div key="final-phase" className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl text-primary font-bold text-center leading-tight max-w-4xl mb-24"
                variants={fadeUpVariants} initial="initial" animate="animate"
              >
                Campaign Data is created once<br/>and reused across multiple outputs.
              </motion.h2>

              {/* Radial Data Hub Visual */}
              <AnimatePresence>
                {isFullyReused && (
                  <motion.div className="relative w-[600px] h-[400px] flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                    
                    {/* Center */}
                    <div 
                      className="absolute w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(109,93,246,0.4)] z-10"
                      style={{ backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
                    >
                      <Database size={32} className="mb-2" />
                      <span className="font-bold text-sm text-center leading-tight">Central<br/>Record</span>
                    </div>

                    {/* Orbiting Outputs */}
                    <div className="absolute w-[400px] h-[400px] animate-[spin_40s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-28 h-28 bg-gray-900 border border-gray-800 text-white shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <Search size={24} className="text-info mb-2" />
                          <span className="font-semibold text-xs text-center">Discovery</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-28 h-28 bg-gray-900 border border-gray-800 text-white shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <FileSpreadsheet size={24} className="text-success mb-2" />
                          <span className="font-semibold text-xs text-center">Deal Sheet</span>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-28 h-28 bg-gray-900 border border-gray-800 text-white shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <FileArchive size={24} className="text-warning mb-2" />
                          <span className="font-semibold text-xs text-center">Proposal</span>
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                        <div className="flex flex-col items-center justify-center w-28 h-28 bg-gray-900 border border-gray-800 text-white shadow-md rounded-2xl animate-[spin_40s_linear_infinite_reverse]">
                          <LineChart size={24} className="text-text-muted mb-2" />
                          <span className="font-semibold text-xs text-center">Analytics</span>
                        </div>
                      </div>
                    </div>

                    {/* Connecting dashed lines */}
                    <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-primary/20 -z-10" />

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Scene>
  );
}
