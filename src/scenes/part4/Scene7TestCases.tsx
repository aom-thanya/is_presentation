import { useEffect } from "react";
import { Scene } from "../../components/presentation/Scene";
import { usePresentationStore } from "../../store/presentationStore";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants } from "../../design-system/animations";
import { cn } from "../../design-system/cn";
import { CheckCircle, X, ArrowRight, Play, Database, CheckSquare } from "lucide-react";

export function Scene7TestCases({ stepIndex }: { stepIndex: number }) {
  const { goToStep } = usePresentationStore();
  
  const testCases = [
    {
      id: 1,
      title: "Structured Campaign Brief",
      input: "Campaign Requirement จาก Sales",
      outputs: [
        "Brand", "Objective", "Target Audience", "Budget", "Timeline", "Key Message", "Deliverables"
      ],
      criteria: [
        "Output ครบทั้ง 7 ส่วน",
        "ไม่มี Required Field ที่ว่าง",
        "Buyer และ Planner สามารถระบุข้อมูล Campaign หลักได้โดยไม่ต้องถามข้อมูลพื้นฐานเพิ่ม",
        "Record สามารถนำไปใช้ใน Feature ถัดไป"
      ]
    },
    {
      id: 2,
      title: "Search by Influencer Name",
      input: "ชื่อ Influencer",
      outputs: [
        "Influencer Name", "Profile Image", "Platform", "Category", "Profile Information"
      ],
      criteria: [
        "ระบบแสดง Profile ที่ตรงกับชื่อ",
        "ข้อมูลครบตามที่กำหนด",
        "Buyer สามารถเพิ่ม Profile เข้า Shortlist ได้"
      ]
    },
    {
      id: 3,
      title: "Search by Reference Image",
      input: "รูป Influencer อ้างอิง",
      outputs: [
        "Matching Profiles", "Profile Images", "Platforms", "Categories", "Profile Information"
      ],
      criteria: [
        "Influencer ที่ต้องการปรากฏในผลลัพธ์ลำดับต้น",
        "ผลลัพธ์มาจาก Prototype Dataset",
        "Buyer สามารถใช้ผลลัพธ์เพื่อสร้าง Shortlist ได้"
      ]
    },
    {
      id: 4,
      title: "Auto Deal Sheet",
      input: "Campaign Data + Influencer Selection + Deliverables + Rates",
      outputs: [
        "Campaign Name", "Influencer Name", "Deliverables", "Rate", "Total Cost"
      ],
      criteria: [
        "Output ครบทั้ง 5 ส่วน",
        "Total Cost ถูกต้องตาม Input",
        "ข้อมูลตรงกับ Campaign Record",
        "หากข้อมูล Rate ไม่ครบ ระบบต้องแจ้ง Missing Input"
      ]
    },
    {
      id: 5,
      title: "Auto Proposal",
      input: "Campaign Data + Influencer Selection + Commercial Information",
      outputs: [
        "Campaign Overview", "Campaign Objective", "Target Audience", "Influencer List", "Deliverables", "Pricing", "Timeline"
      ],
      criteria: [
        "Output ครบทั้ง 7 ส่วน",
        "ข้อมูลสอดคล้องกับ Brief และ Deal Sheet",
        "Planner ไม่ต้องกรอก Campaign Information ซ้ำ",
        "Output พร้อมสำหรับ Internal Review"
      ]
    }
  ];

  const isOverview = stepIndex === 0;
  const activeCaseIndex = stepIndex > 0 && stepIndex <= 5 ? stepIndex - 1 : -1;
  const activeCase = activeCaseIndex >= 0 ? testCases[activeCaseIndex] : null;

  // Handle Escape key to return to overview without using global Next/Back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isOverview) {
        goToStep(0);
        e.preventDefault();
        e.stopPropagation();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOverview, goToStep]);

  return (
    <Scene id="slide7-feature-test-cases"  theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative px-8">
        
        {/* Header (hidden in detail view to save space) */}
        <AnimatePresence>
          {isOverview && (
            <motion.div className="text-center mb-12 w-full" variants={fadeUpVariants} initial="initial" animate="animate" exit={{ opacity: 0, height: 0 }}>
              <h2 className="text-4xl text-text-primary font-bold">Feature Test Cases</h2>
              <p className="text-text-secondary mt-4">Select a test case to view its validation criteria</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Browser Container */}
        <div className="relative w-full flex-1 flex items-start justify-center">
          
          <AnimatePresence mode="wait">
            
            {/* Overview Grid */}
            {isOverview && (
              <motion.div 
                key="overview" 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
              >
                {testCases.map((tc) => (
                  <motion.div
                    key={tc.id}
                    layoutId={`card-${tc.id}`}
                    onClick={() => goToStep(tc.id)}
                    className="bg-surface border border-border rounded-panel p-6 shadow-sm hover:shadow-md hover:border-primary/50 cursor-pointer flex flex-col items-start transition-all group"
                  >
                    <div className="w-10 h-10 bg-surface-muted text-text-muted rounded-full flex items-center justify-center font-bold mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {tc.id}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2 leading-tight">{tc.title}</h3>
                    <div className="flex items-center text-sm font-bold text-primary mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight size={16} className="ml-1" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Detail View */}
            {!isOverview && activeCase && (
              <motion.div 
                key={`detail-${activeCase.id}`}
                layoutId={`card-${activeCase.id}`}
                className="w-full max-w-6xl bg-surface border border-border shadow-lg rounded-[2rem] flex flex-col overflow-hidden h-[75vh]"
                // Prevent clicks inside the detail view from advancing the slide globally
                onClick={(e) => e.stopPropagation()}
              >
                {/* Detail Header */}
                <div className="flex items-center justify-between p-6 bg-surface border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      {activeCase.id}
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary">{activeCase.title}</h3>
                  </div>
                  <button 
                    onClick={() => goToStep(0)}
                    className="w-10 h-10 bg-surface-muted hover:bg-error/10 hover:text-error text-text-secondary rounded-full flex items-center justify-center transition-colors"
                    title="Close (Esc)"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Detail Content */}
                <div className="flex-1 flex overflow-hidden">
                  
                  {/* Left Column: Input & Expected Output */}
                  <div className="w-1/2 p-8 border-r border-border overflow-y-auto">
                    
                    <div className="mb-10">
                      <div className="flex items-center gap-2 mb-4">
                        <Play size={20} className="text-primary" />
                        <h4 className="text-lg font-bold uppercase tracking-wider text-text-secondary">Input</h4>
                      </div>
                      <div className="p-4 bg-surface-muted rounded-xl border border-border">
                        <span className="text-xl font-medium text-text-primary">{activeCase.input}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Database size={20} className="text-info" />
                        <h4 className="text-lg font-bold uppercase tracking-wider text-text-secondary">Expected Output</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2 pl-2">
                        {activeCase.outputs.map((out, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-surface border border-border rounded-lg">
                            <span className="w-6 h-6 bg-info/10 text-info text-sm font-bold rounded-full flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-lg text-text-primary">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Pass Criteria */}
                  <div className="w-1/2 p-8 bg-success/5 overflow-y-auto">
                    
                    <div className="flex items-center gap-2 mb-6">
                      <CheckSquare size={20} className="text-success" />
                      <h4 className="text-lg font-bold uppercase tracking-wider text-text-secondary">Pass Criteria</h4>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      {activeCase.criteria.map((crit, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-surface rounded-xl shadow-sm border border-success/20">
                          <CheckCircle size={24} className="text-success shrink-0 mt-0.5" />
                          <span className="text-lg font-medium text-text-primary leading-relaxed">{crit}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Bottom Navigation Bar */}
                <div className="p-4 bg-surface border-t border-border flex justify-between items-center">
                  <div className="text-sm font-medium text-text-muted">
                    Press <kbd className="px-2 py-1 bg-surface-muted rounded border border-border font-mono">Esc</kbd> to return to overview
                  </div>
                  <div className="flex gap-2">
                    {testCases.map((tc) => (
                      <button
                        key={tc.id}
                        onClick={() => goToStep(tc.id)}
                        className={cn(
                          "w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center transition-colors",
                          activeCase.id === tc.id ? "bg-primary text-primary-foreground" : "bg-surface-muted text-text-secondary hover:bg-border cursor-pointer"
                        )}
                      >
                        {tc.id}
                      </button>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </Scene>
  );
}
