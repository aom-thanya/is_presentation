import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../design-system/cn";
import { fadeUpVariants } from "../../design-system/animations";
import { 
  FileText, MessageSquare, Table, FileSpreadsheet, 
  FileArchive, FolderKanban, Image as ImageIcon, 
  Database, AlertTriangle 
} from "lucide-react";

// The 7 roles in the workflow
const roles = [
  { id: "client", name: "Client", desc: "Collect Campaign Requirements", icon: FileText, docs: ["Brief"] },
  { id: "sales", name: "Sales", desc: "Collect Campaign Requirements", icon: MessageSquare, docs: ["Chat"] },
  { id: "buyer", name: "Buyer", desc: "Search and Shortlist Influencers", icon: Table, docs: ["Spreadsheet"] },
  { id: "planner", name: "Planner", desc: "Prepare Deal Sheet and Proposal", icon: FileSpreadsheet, docs: ["Deal Sheet", "Proposal"] },
  { id: "pm", name: "Project Manager", desc: "Create Working Brief", icon: FileArchive, docs: ["Working Brief"] },
  { id: "ops", name: "Operations", desc: "Coordinate Campaign Execution", icon: FolderKanban, docs: ["Coordination file"] },
  { id: "influencer", name: "Influencer", desc: "Develop Idea, Draft, and Final Content", icon: ImageIcon, docs: ["Idea", "Draft", "Content"] },
];

// The 5 Pain Points
const painPoints = [
  { 
    id: "sales-buyer", 
    activeRoles: ["sales", "buyer"], 
    pain: "Requirement ไม่ครบหรือเข้าใจไม่ตรงกัน",
    effect: "ต้องถามกลับและเริ่มงานช้า"
  },
  { 
    id: "buyer", 
    activeRoles: ["buyer"], 
    pain: "ค้นหา Influencer จากหลายแหล่ง",
    effect: "ใช้เวลาสร้าง Shortlist นาน"
  },
  { 
    id: "planner", 
    activeRoles: ["planner"], 
    pain: "Copy ข้อมูลไปทำ Deal Sheet และ Proposal",
    effect: "เกิดงานซ้ำและ Copy Error"
  },
  { 
    id: "pm-ops", 
    activeRoles: ["pm", "ops"], 
    pain: "ต้องแปลงข้อมูลเป็น Working Brief ใหม่",
    effect: "เสี่ยงต่อการตีความคลาดเคลื่อน"
  },
  { 
    id: "all", 
    activeRoles: roles.map(r => r.id), 
    pain: "ใช้ข้อมูลคนละไฟล์หรือคนละเวอร์ชัน",
    effect: "เกิด Version Conflict"
  }
];

export function Scene1BusinessProblem({ stepIndex }: { stepIndex: number }) {
  
  
  // Phase 1: Workflow Reveal (Steps 0 - 7)
  // Step 0: Title only
  // Steps 1-7: Reveal roles (activeRoleIndex = stepIndex - 1)
  const activeRoleIndex = Math.min(stepIndex - 1, 6);
  
  // Phase 2: Conflict Statement (Step 8)
  const showConflict = stepIndex >= 8;

  // Phase 3: Hidden Costs (Steps 9 - 18)
  // 5 pains, 2 steps each. 
  // Step 9: Pain 0
  // Step 10: Effect 0
  const painPhaseActive = stepIndex >= 9 && stepIndex <= 18;
  const painIndex = painPhaseActive ? Math.floor((stepIndex - 9) / 2) : -1;
  const showEffect = painPhaseActive ? (stepIndex - 9) % 2 === 1 : false;
  const currentPainData = painIndex >= 0 ? painPoints[painIndex] : null;
  const painActiveRoles = currentPainData?.activeRoles || [];

  // Phase 4: Root Cause (Steps 19 - 21)
  const rootCausePhaseActive = stepIndex >= 19;
  const dimWorkflow = rootCausePhaseActive;
  const showEnglishRootCause = stepIndex >= 20;
  const showThaiRootCause = stepIndex >= 21;

  return (
    <Scene id="slide1-business-problem"  theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative">
        
        {/* Title */}
        <AnimatePresence>
          {stepIndex >= 0 && !rootCausePhaseActive && (
            <motion.h2
              className="text-3xl sm:text-4xl text-text-primary font-bold mb-8"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              The Hidden Cost of Campaign Handoffs
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Phase 1 & 2: Workflow Area */}
        <div 
          className={cn(
            "relative w-full flex justify-between items-start mt-8 px-4 transition-all duration-1000",
            dimWorkflow ? "opacity-15 blur-[2px]" : (painPhaseActive ? "opacity-60" : "opacity-100")
          )}
        >
          {/* Base connector line */}
          <div className="absolute top-6 left-8 right-8 h-1 bg-surface-muted rounded-full -z-10" />

          {/* Active connector line (Phase 1) */}
          {!painPhaseActive && !rootCausePhaseActive && (
            <motion.div 
              className="absolute top-6 left-8 h-1 bg-primary rounded-full -z-10"
              initial={{ width: "0%" }}
              animate={{ width: activeRoleIndex >= 0 ? `${(activeRoleIndex / (roles.length - 1)) * 100}%` : "0%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ maxWidth: "calc(100% - 4rem)" }}
            />
          )}

          {roles.map((role, idx) => {
            const isVisible = idx <= activeRoleIndex || showConflict;
            
            // In Phase 1, the "active" role is the one we are currently revealing
            let isActiveRole = idx === activeRoleIndex && !showConflict && !painPhaseActive && !rootCausePhaseActive;
            
            // In Phase 3 (Pain), the active role is based on currentPainData
            let isPainRole = false;
            let isAllPain = false;
            if (painPhaseActive && currentPainData) {
              isPainRole = painActiveRoles.includes(role.id);
              isAllPain = currentPainData.id === "all";
            }

            const Icon = role.icon;

            return (
              <div key={role.id} className="flex flex-col items-center relative w-[14%]">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isVisible ? 1 : 0, 
                    opacity: isVisible ? 1 : 0,
                    borderColor: isPainRole 
                      ? (isAllPain ? "var(--color-error)" : "var(--color-primary)")
                      : (isActiveRole ? "var(--color-primary)" : "var(--color-border-strong)"),
                    backgroundColor: isPainRole
                      ? (isAllPain ? "var(--color-error)" : "var(--color-primary)")
                      : (isActiveRole ? "var(--color-primary)" : "var(--color-surface)"),
                    color: (isActiveRole || isPainRole) ? "var(--color-primary-foreground)" : "var(--color-text-subtle)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 shadow-sm"
                >
                  <Icon size={20} />
                </motion.div>

                <AnimatePresence>
                  {isVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "text-center mt-4 flex flex-col items-center",
                        (isActiveRole || isPainRole) ? "opacity-100" : "opacity-60"
                      )}
                    >
                      <span className={cn(
                        "font-semibold text-sm transition-colors duration-300", 
                        isPainRole ? (isAllPain ? "text-red-500" : "text-primary") : (isActiveRole ? "text-primary" : "text-text-primary")
                      )}>
                        {role.name}
                      </span>
                      
                      {/* Only show desc in Phase 1 when active */}
                      <AnimatePresence>
                        {isActiveRole && (
                          <motion.span 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-text-secondary mt-1 max-w-[120px] leading-tight"
                          >
                            {role.desc}
                          </motion.span>
                        )}
                      </AnimatePresence>

                      {/* Documents piling up (Phase 1 & 2 only) */}
                      {!painPhaseActive && !rootCausePhaseActive && (
                        <div className="mt-4 flex flex-col gap-1 items-center">
                          {roles.slice(0, idx + 1).flatMap(r => r.docs).map((doc, docIdx) => (
                            <motion.div
                              key={`${doc}-${docIdx}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: docIdx * 0.05 }}
                              className="px-2 py-1 bg-surface border border-border rounded text-[10px] text-text-subtle shadow-xs truncate max-w-[100px]"
                            >
                              {doc}
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Phase 2: Conflict Text */}
        <AnimatePresence>
          {showConflict && !painPhaseActive && !rootCausePhaseActive && (
            <motion.div
              className="absolute bottom-[20vh] w-full text-center px-4"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h3 className="text-2xl sm:text-3xl text-text-primary font-bold mb-4">
                ทุกฝ่ายกำลังทำงานกับ Campaign เดียวกัน
              </h3>
              <p className="text-xl text-text-secondary font-medium">
                แต่ข้อมูลถูกส่งต่อผ่านเอกสาร แชต และไฟล์หลายรูปแบบ
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 3: Pain Points */}
        <div className="absolute top-[50vh] w-full max-w-2xl flex flex-col items-center justify-center -translate-y-1/2 z-20">
          <AnimatePresence mode="wait">
            {painPhaseActive && currentPainData && (
              <motion.div
                key={currentPainData.id}
                className="flex flex-col items-center text-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 text-warning font-semibold text-xl sm:text-2xl mb-6">
                  <AlertTriangle size={28} />
                  <span>{currentPainData.pain}</span>
                </div>
                
                <AnimatePresence>
                  {showEffect && (
                    <motion.div
                      key={`effect-${currentPainData.id}`}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="px-6 py-4 bg-red-50 border border-red-200 rounded-card w-full max-w-md"
                    >
                      <span className="text-sm font-bold uppercase tracking-wider text-red-500 block mb-1">Business Effect</span>
                      <span className="text-lg text-red-500 font-medium">{currentPainData.effect}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phase 4: Root Cause Reconstruction Animation */}
        <div className="absolute top-[10vh] w-full flex justify-between px-4 z-20 pointer-events-none">
          {roles.slice(1).map((role, idx) => (
            <AnimatePresence key={role.id}>
              {rootCausePhaseActive && (
                <motion.div
                  className="w-32 flex flex-col items-center justify-center opacity-0"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [30, -20, -40],
                    scale: [0.8, 1, 0.9]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 0.5,
                    delay: idx * 0.4
                  }}
                  style={{ left: `${(idx + 1) * (100 / (roles.length - 1))}%`, position: 'absolute', transform: 'translateX(-50%)' }}
                >
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 border border-red-300">
                    <Database size={18} />
                  </div>
                  <span className="text-[10px] text-red-500 font-semibold mt-1">Rebuild Context</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Phase 4: Root Cause Messages */}
        <div className="absolute top-[40vh] w-full max-w-4xl flex flex-col items-center text-center z-30">
          <AnimatePresence mode="wait">
            {showEnglishRootCause && (
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight"
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Every handoff requires people to reconstruct <br/>
                <span className="text-primary">the same campaign context.</span>
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {showThaiRootCause && (
              <motion.p
                className="mt-12 text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-3xl"
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                ปัญหาไม่ได้อยู่ที่จำนวนเอกสารเพียงอย่างเดียว
                แต่อยู่ที่ Campaign Information ยังไม่อยู่ในรูปแบบข้อมูล
                ที่สามารถนำไปใช้ต่อได้ทันที
              </motion.p>
            )}
          </AnimatePresence>
        </div>

      </div>
    </Scene>
  );
}
