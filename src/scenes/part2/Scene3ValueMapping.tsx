import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { ArrowRight, Database, FileText, CheckCircle, Search, FileArchive, LayoutDashboard } from "lucide-react";

export function Scene3ValueMapping() {
  const { currentSceneIndex, currentStepIndex, goToStep } = usePresentationStore();
  const isActive = currentSceneIndex === 3;

  const mappings = [
    { id: 1, startStep: 1, pain: "Requirement ตกหล่นและต้องถามซ้ำ", need: "ต้องมีข้อมูล Campaign ที่ครบและพร้อมส่งต่อ", feature: "Structured Campaign Brief", outcome: "ลด Clarification และ Rework" },
    { id: 2, startStep: 5, pain: "Buyer ต้องค้นหาจากหลายแหล่ง", need: "ต้องเข้าถึง Influencer Information ได้จากจุดเดียว", feature: "Search by Name / Image", outcome: "ลด Time to Shortlist" },
    { id: 3, startStep: 9, pain: "Planner ต้อง Copy ข้อมูลหลายรอบ", need: "ต้องนำข้อมูลเดิมไปสร้าง Commercial Output ได้ทันที", feature: "Auto Deal Sheet", outcome: "ลด Manual Preparation และ Copy Error" },
    { id: 4, startStep: 13, pain: "Proposal ใช้ข้อมูลซ้ำจากหลายไฟล์", need: "ต้องสร้าง Client Output จากข้อมูลชุดเดียวกัน", feature: "Auto Proposal", outcome: "ลด Proposal Turnaround Time" },
    { id: 5, startStep: 17, pain: "แต่ละทีมใช้ข้อมูลคนละเวอร์ชัน", need: "ต้องมี Campaign Record กลาง", feature: "Central Campaign Record", outcome: "ลด Version Conflict" },
  ];

  const outcomesList = [
    "ลดเวลาในการประสานงานระหว่างทีม",
    "ลดจำนวนคำถามที่ต้องถามซ้ำ",
    "ลดเวลาค้นหา Influencer",
    "ลดเวลาจัดทำ Deal Sheet และ Proposal",
    "ลดความเสี่ยงจากข้อมูลไม่ตรงกัน",
    "เพิ่ม Campaign Handling Capacity"
  ];

  // Phase logic
  const isMappingPhase = currentStepIndex >= 0 && currentStepIndex <= 20;
  const activeMappingIndex = isMappingPhase && currentStepIndex > 0 ? Math.floor((currentStepIndex - 1) / 4) : -1;
  const activeMapping = activeMappingIndex >= 0 ? mappings[activeMappingIndex] : null;
  const mappingStep = activeMapping ? currentStepIndex - activeMapping.startStep : -1;

  const isBeforeAfterPhase = currentStepIndex >= 21 && currentStepIndex <= 22;
  const isAfterState = currentStepIndex >= 22;
  
  const isOutcomesPhase = currentStepIndex >= 23;
  const isEvidencePhase = currentStepIndex >= 29;

  return (
    <Scene id="slide3-value-mapping" isActive={isActive} theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[6vh] w-full max-w-full mx-auto relative px-8">
        
        <AnimatePresence mode="wait">
          {!isBeforeAfterPhase && !isOutcomesPhase && (
            <motion.div key="title-mapping" className="text-center w-full mb-12" variants={fadeUpVariants} initial="initial" animate="animate" exit="exit">
              <h2 className="text-4xl font-bold text-text-primary mb-6">From Voice of Customer to Product Value</h2>
              {/* Mapping structure legend */}
              <div className="flex items-center justify-center gap-4 text-sm font-medium text-text-secondary bg-surface-muted py-3 px-6 rounded-pill border border-border inline-flex">
                <span className="text-error">Voice of Customer / Pain</span>
                <ArrowRight size={16} />
                <span className="text-info">User Need</span>
                <ArrowRight size={16} />
                <span className="text-primary">Proposed Feature</span>
                <ArrowRight size={16} />
                <span className="text-success">Expected Business Outcome</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mappings Phase */}
        <AnimatePresence mode="wait">
          {isMappingPhase && currentStepIndex > 0 && activeMapping && (
            <motion.div key="mapping-content" className="w-full flex-1 flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {/* Navigation Indicators */}
              <div className="flex gap-2 mb-12">
                {mappings.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => goToStep(m.startStep)}
                    className={cn(
                      "w-12 h-2 rounded-full transition-colors cursor-pointer",
                      idx === activeMappingIndex ? "bg-primary" : "bg-border hover:bg-primary/30"
                    )}
                  />
                ))}
              </div>

              {/* The Mapping Flow */}
              <div className="flex flex-col gap-6 w-full max-w-4xl relative items-center">
                
                {/* 1. Pain */}
                <motion.div className="flex flex-col items-center w-full" layoutId="node-pain">
                  <div className="px-6 py-4 bg-error/10 border border-error/20 rounded-card w-full text-center shadow-sm">
                    <span className="text-sm font-bold uppercase tracking-wider text-error block mb-1">Pain Point</span>
                    <span className="text-2xl text-error font-medium">{activeMapping.pain}</span>
                  </div>
                </motion.div>

                {/* 2. Need */}
                <AnimatePresence>
                  {mappingStep >= 1 && (
                    <motion.div className="flex flex-col items-center w-full" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                      <ArrowRight size={24} className="text-text-muted my-2 rotate-90" />
                      <div className="px-6 py-4 bg-info/10 border border-info/20 rounded-card w-full text-center shadow-sm">
                        <span className="text-sm font-bold uppercase tracking-wider text-info block mb-1">User Need</span>
                        <span className="text-xl text-info font-medium">{activeMapping.need}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 3. Feature */}
                <AnimatePresence>
                  {mappingStep >= 2 && (
                    <motion.div className="flex flex-col items-center w-full" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                      <ArrowRight size={24} className="text-text-muted my-2 rotate-90" />
                      <div className="px-6 py-4 bg-primary/10 border border-primary/20 rounded-card w-full text-center shadow-md">
                        <span className="text-sm font-bold uppercase tracking-wider text-primary block mb-1">Proposed Feature</span>
                        <span className="text-2xl text-primary font-bold">{activeMapping.feature}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 4. Outcome */}
                <AnimatePresence>
                  {mappingStep >= 3 && (
                    <motion.div className="flex flex-col items-center w-full" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                      <ArrowRight size={24} className="text-text-muted my-2 rotate-90" />
                      <div className="px-6 py-4 bg-success/10 border border-success/20 rounded-card w-full text-center shadow-sm">
                        <span className="text-sm font-bold uppercase tracking-wider text-success block mb-1">Business Outcome</span>
                        <span className="text-xl text-success font-medium flex items-center justify-center gap-2">
                          <CheckCircle size={20} /> {activeMapping.outcome}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Before / After & Outcomes Phase */}
        <AnimatePresence>
          {(isBeforeAfterPhase || isOutcomesPhase) && (
            <motion.div key="before-after" className="w-full flex-1 flex flex-col items-center pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              <div className="flex w-full gap-12 max-w-6xl">
                {/* Left: Animation Area */}
                <div className="w-1/2 flex flex-col items-center relative h-[400px] bg-surface-muted/50 border border-border rounded-panel overflow-hidden p-8">
                  
                  <AnimatePresence mode="popLayout">
                    {!isAfterState ? (
                      <motion.div key="before-text" className="text-center absolute top-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                        <h3 className="text-2xl font-bold text-text-primary mb-2">Document-driven workflow</h3>
                        <p className="text-text-secondary">People recreate information at every handoff</p>
                      </motion.div>
                    ) : (
                      <motion.div key="after-text" className="text-center absolute top-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h3 className="text-2xl font-bold text-primary mb-2">Data-driven workflow</h3>
                        <p className="text-text-secondary">The system reuses campaign data across multiple business steps</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Messy Documents -> Merged Database Animation */}
                  <div className="absolute inset-0 top-32 flex items-center justify-center">
                    
                    {/* The disconnected documents */}
                    <AnimatePresence>
                      {!isAfterState && (
                        <>
                          <motion.div exit={{ x: 100, y: 50, scale: 0, opacity: 0 }} className="absolute top-10 left-20 w-16 h-20 bg-surface shadow-md border border-border rounded p-2 rotate-[-15deg]"><FileText size={24} className="text-error mb-1"/><div className="w-full h-1 bg-surface-muted rounded mb-1"/><div className="w-3/4 h-1 bg-surface-muted rounded"/></motion.div>
                          <motion.div exit={{ x: -100, y: 50, scale: 0, opacity: 0 }} className="absolute top-16 right-24 w-16 h-20 bg-surface shadow-md border border-border rounded p-2 rotate-[25deg]"><FileArchive size={24} className="text-warning mb-1"/><div className="w-full h-1 bg-surface-muted rounded mb-1"/><div className="w-3/4 h-1 bg-surface-muted rounded"/></motion.div>
                          <motion.div exit={{ x: 50, y: -100, scale: 0, opacity: 0 }} className="absolute bottom-16 left-32 w-16 h-20 bg-surface shadow-md border border-border rounded p-2 rotate-[-5deg]"><Search size={24} className="text-info mb-1"/><div className="w-full h-1 bg-surface-muted rounded mb-1"/><div className="w-3/4 h-1 bg-surface-muted rounded"/></motion.div>
                          <motion.div exit={{ x: -50, y: -100, scale: 0, opacity: 0 }} className="absolute bottom-20 right-20 w-16 h-20 bg-surface shadow-md border border-border rounded p-2 rotate-[10deg]"><LayoutDashboard size={24} className="text-primary mb-1"/><div className="w-full h-1 bg-surface-muted rounded mb-1"/><div className="w-3/4 h-1 bg-surface-muted rounded"/></motion.div>
                        </>
                      )}
                    </AnimatePresence>

                    {/* The glowing central record */}
                    <AnimatePresence>
                      {isAfterState && (
                        <motion.div 
                          initial={{ scale: 0.5, opacity: 0 }} 
                          animate={{ scale: 1, opacity: 1 }}
                          className="relative flex flex-col items-center justify-center w-40 h-40 bg-primary text-primary-foreground rounded-full shadow-[0_0_40px_rgba(109,93,246,0.3)] z-10"
                        >
                          <Database size={48} className="mb-2" />
                          <span className="font-bold text-center leading-tight">Central<br/>Campaign Record</span>
                          
                          {/* Pulsing ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right: Outcomes List */}
                <div className="w-1/2 flex flex-col">
                  <AnimatePresence>
                    {isOutcomesPhase && (
                      <motion.div className="flex flex-col gap-4" variants={staggerContainerVariants} initial="initial" animate="animate">
                        <h3 className="text-2xl font-bold text-text-primary mb-2">Expected Business Outcomes</h3>
                        {outcomesList.map((outcome, idx) => {
                          const isVisible = currentStepIndex >= 23 + idx;
                          return (
                            <AnimatePresence key={idx}>
                              {isVisible && (
                                <motion.div 
                                  className="flex items-center gap-3 px-4 py-3 bg-success/5 border border-success/20 rounded-lg"
                                  variants={fadeUpVariants} initial="initial" animate="animate"
                                >
                                  <CheckCircle size={20} className="text-success shrink-0" />
                                  <span className="text-lg text-text-primary font-medium">{outcome}</span>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Evidence Status */}
              <AnimatePresence>
                {isEvidencePhase && (
                  <motion.div 
                    className="mt-16 text-center max-w-3xl px-8 py-4 bg-surface-muted border border-border rounded-pill"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-lg text-text-secondary font-medium italic">
                      "Business Outcome เชิงปริมาณจะถูกวัดจาก User Validation ไม่ใช้ตัวเลขสมมติเป็นผลลัพธ์ล่วงหน้า"
                    </p>
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
