import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { CheckCircle, Info, LayoutTemplate } from "lucide-react";

export function Scene6ValidationDesign() {
  const { currentSceneIndex, currentStepIndex } = usePresentationStore();
  const isActive = currentSceneIndex === 6;

  const personas = ["Sales", "Buyer", "Planner"];
  
  const metrics = [
    { title: "Task Completion Time", desc: "เวลาทั้งหมดที่ใช้ในการทำงานให้สำเร็จ" },
    { title: "Number of Clarification Questions", desc: "จำนวนคำถามที่เกิดขึ้นระหว่างการส่งต่องาน" },
    { title: "Output Completeness", desc: "ความครบถ้วนของข้อมูลในเอกสารที่ได้" },
    { title: "Perceived Usefulness", desc: "ประโยชน์ที่ผู้ใช้รู้สึกว่าได้รับจากฟีเจอร์" },
    { title: "Readiness for the Next Business Step", desc: "ความพร้อมของข้อมูลสำหรับส่งต่อให้ทีมถัดไป" },
    { title: "User Satisfaction", desc: "ความพึงพอใจโดยรวมต่อการใช้งาน" }
  ];

  const methods = [
    "ให้ผู้ใช้ทำงานด้วยวิธีปัจจุบัน",
    "ให้ผู้ใช้ทำ Scenario เดียวกันผ่าน Prototype",
    "เปรียบเทียบเวลา ขั้นตอน และจำนวนคำถาม",
    "ให้ผู้ใช้ประเมิน Output",
    "เก็บ Feedback เพื่อปรับ Feature และ Workflow"
  ];

  // Phase logic
  const isTargetPhase = currentStepIndex >= 1 && currentStepIndex <= 2;
  const isPrinciplePhase = currentStepIndex >= 3 && currentStepIndex <= 4;
  const isMetricsPhase = currentStepIndex >= 5 && currentStepIndex <= 10;
  const isMethodPhase = currentStepIndex >= 11 && currentStepIndex <= 15;
  const isFinalPhase = currentStepIndex >= 16;
  
  const showBeforeAfter = currentStepIndex >= 13 && currentStepIndex <= 15; // Shows up when comparing

  return (
    <Scene id="slide6-validation-design" isActive={isActive} theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative px-8">
        
        {/* Title */}
        <motion.h2 
          className="text-4xl text-text-primary font-bold mb-12 text-center"
          variants={fadeUpVariants} initial="initial" animate="animate"
        >
          Validation Design
        </motion.h2>

        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          {/* Phase 1: Target */}
          <AnimatePresence mode="wait">
            {isTargetPhase && (
              <motion.div key="target-phase" className="flex flex-col items-center" variants={fadeUpVariants} initial="initial" animate="animate" exit="exit">
                <h3 className="text-2xl font-bold text-text-primary mb-8 bg-surface-muted px-6 py-2 rounded-pill border border-border">
                  ทดสอบกับผู้ใช้ที่ตรงกับ Primary Persona
                </h3>
                <AnimatePresence>
                  {currentStepIndex >= 2 && (
                    <motion.div className="flex gap-6" variants={staggerContainerVariants} initial="initial" animate="animate">
                      {personas.map((persona, idx) => (
                        <motion.div key={idx} variants={fadeUpVariants} className="px-8 py-4 bg-primary text-primary-foreground font-bold text-xl rounded-card shadow-sm">
                          {persona}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2: Principle & Final Reveal */}
          <AnimatePresence mode="wait">
            {(isPrinciplePhase || isFinalPhase) && (
              <motion.div key="principle-phase" className="flex flex-col items-center text-center max-w-4xl" variants={fadeUpVariants} initial="initial" animate="animate" exit="exit">
                
                {!isFinalPhase && (
                  <h3 className="text-2xl font-bold text-primary mb-8 bg-primary-soft px-6 py-2 rounded-pill border border-primary/20">
                    เรา Validate ที่ Output ของแต่ละ Feature
                  </h3>
                )}

                <AnimatePresence>
                  {(currentStepIndex >= 4 || isFinalPhase) && (
                    <motion.h2 
                      className={cn(
                        "font-bold text-text-primary leading-tight transition-all duration-700",
                        isFinalPhase ? "text-5xl" : "text-4xl"
                      )} 
                      variants={fadeUpVariants} initial="initial" animate="animate"
                    >
                      Feature สามารถสร้าง Output ได้ครบตามนิยาม<br/>
                      <span className="text-primary">และ Output พร้อมนำไปใช้ใน Business Step ถัดไปหรือไม่?</span>
                    </motion.h2>
                  )}
                </AnimatePresence>
                
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 3: Metrics */}
          <AnimatePresence mode="wait">
            {isMetricsPhase && (
              <motion.div key="metrics-phase" className="flex flex-col w-full max-w-5xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Validation Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, idx) => {
                    const isVisible = currentStepIndex >= 5 + idx;
                    return (
                      <AnimatePresence key={idx}>
                        {isVisible && (
                          <motion.div 
                            className="p-6 bg-surface border border-border rounded-panel shadow-sm flex flex-col justify-center group hover:border-primary/50 transition-colors pointer-events-auto cursor-help"
                            variants={fadeUpVariants} initial="initial" animate="animate"
                          >
                            <div className="flex items-center gap-3">
                              <CheckCircle size={20} className="text-primary shrink-0" />
                              <span className="font-bold text-lg text-text-primary">{metric.title}</span>
                            </div>
                            {/* Hover explanation (does not trigger presentation advance) */}
                            <div className="mt-2 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                              <p className="text-text-secondary text-sm flex items-start gap-2 pt-2 border-t border-border mt-2">
                                <Info size={14} className="mt-0.5 shrink-0" /> {metric.desc}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 4: Method */}
          <AnimatePresence mode="wait">
            {isMethodPhase && (
              <motion.div key="method-phase" className="flex w-full h-full max-w-6xl items-center gap-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                
                {/* Left: Method Flow */}
                <div className="w-1/2 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">Validation Process</h3>
                  {methods.map((method, idx) => {
                    const isVisible = currentStepIndex >= 11 + idx;
                    const isActive = currentStepIndex === 11 + idx;
                    return (
                      <AnimatePresence key={idx}>
                        {isVisible && (
                          <motion.div 
                            className={cn(
                              "flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-300",
                              isActive ? "bg-primary text-primary-foreground border-primary shadow-md scale-105" : "bg-surface text-text-secondary border-border"
                            )}
                            variants={fadeUpVariants} initial="initial" animate="animate"
                          >
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
                              isActive ? "bg-white text-primary" : "bg-surface-muted text-text-subtle"
                            )}>
                              {idx + 1}
                            </div>
                            <span className="font-bold text-lg">{method}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  })}
                </div>

                {/* Right: Side by Side Comparison Visual */}
                <div className="w-1/2 flex items-center justify-center h-[400px]">
                  <AnimatePresence>
                    {showBeforeAfter && (
                      <motion.div 
                        className="w-full flex gap-4 bg-surface-muted p-8 rounded-panel border border-border"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                      >
                        {/* Current Workflow */}
                        <div className="flex-1 flex flex-col items-center text-center p-4 bg-surface rounded-card shadow-sm border border-border">
                          <LayoutTemplate size={32} className="text-error mb-4" />
                          <h4 className="font-bold text-text-primary mb-2">Current Workflow</h4>
                          <p className="text-sm text-text-secondary">Manual handoffs, scattered documents</p>
                        </div>
                        
                        <div className="flex items-center justify-center text-primary font-bold italic">VS</div>

                        {/* Prototype Workflow */}
                        <div className="flex-1 flex flex-col items-center text-center p-4 bg-primary-soft rounded-card shadow-sm border border-primary/20">
                          <LayoutTemplate size={32} className="text-primary mb-4" />
                          <h4 className="font-bold text-primary mb-2">Prototype Workflow</h4>
                          <p className="text-sm text-text-secondary">Centralized data, automated features</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </Scene>
  );
}
