
import { Scene } from "../../components/presentation/Scene";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { CheckCircle, LayoutTemplate, Database, CheckSquare } from "lucide-react";

import { usePresentationStore } from "../../store/presentationStore";
export function Scene5ValidationAndTestCases() {
  const { currentStepIndex } = usePresentationStore();
  const activeTab = currentStepIndex === 0 ? 'validation' : 'testcases';
  const metrics = [
    { title: "Task Completion Time", desc: "เวลาทั้งหมดที่ใช้ในการทำงานให้สำเร็จ" },
    { title: "Number of Clarification Questions", desc: "จำนวนคำถามที่เกิดขึ้นระหว่างการส่งต่องาน" },
    { title: "Output Completeness", desc: "ความครบถ้วนของข้อมูลในเอกสารที่ได้" },
    { title: "Readiness for Next Step", desc: "ความพร้อมของข้อมูลสำหรับส่งต่อให้ทีมถัดไป" }
  ];

  const methods = [
    "ให้ผู้ใช้ทำงานด้วยวิธีปัจจุบัน",
    "ให้ผู้ใช้ทำ Scenario เดียวผ่าน Prototype",
    "เปรียบเทียบเวลา ขั้นตอน และจำนวนคำถาม",
    "เก็บ Feedback ปรับ Feature"
  ];

  const testCases = [
    {
      id: 1, title: "Structured Campaign Brief", input: "Campaign Requirement จาก Sales",
      outputs: ["Brand, Objective, Budget", "Timeline, Key Message, Deliverables"],
      criteria: ["ไม่มี Required Field ที่ว่าง", "สามารถใช้งานต่อใน Feature ถัดไปได้ทันที"]
    },
    {
      id: 2, title: "Search by Influencer Name", input: "ชื่อ Influencer",
      outputs: ["Profile Image", "Platform, Category, Info"],
      criteria: ["ระบบแสดง Profile ตรงกับชื่อ", "สามารถเพิ่ม Profile เข้า Shortlist ได้"]
    },
    {
      id: 3, title: "Search by Reference Image", input: "รูป Influencer อ้างอิง",
      outputs: ["Matching Profiles", "Categories, Info"],
      criteria: ["Influencer ที่ต้องการปรากฏในอันดับต้น", "ผลลัพธ์ดึงจาก Prototype Dataset"]
    },
    {
      id: 4, title: "Auto Deal Sheet", input: "Campaign Data + Influencer + Rates",
      outputs: ["Campaign Name, Influencer Name", "Deliverables, Rate, Total Cost"],
      criteria: ["Total Cost ถูกต้องตาม Input", "แจ้งเตือนหาก Missing Input"]
    },
    {
      id: 5, title: "Auto Proposal", input: "Campaign Data + Influencer + Commercial Info",
      outputs: ["Campaign Overview, Objective", "Influencer List, Deliverables, Pricing"],
      criteria: ["ข้อมูลสอดคล้องกับ Brief & Deal Sheet", "ไม่ต้องกรอก Campaign Info ซ้ำ"]
    }
  ];


  return (
    <Scene id="slide5-validation-test-cases" theme="light">

      <div className="flex flex-col items-center justify-start h-full pt-[5vh] w-full max-w-full mx-auto relative px-8">
        
        <AnimatePresence mode="wait">
          
          {/* Validation Design Tab */}
          {activeTab === 'validation' && (
            <motion.div 
              key="tab-validation"
              className="flex flex-col items-center w-full h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl text-text-primary font-bold mb-4 text-center">Validation Design</h2>
              <div className="w-16 h-[3px] rounded-full bg-primary mb-8" />
              
              <h3 className="text-2xl font-bold text-primary mb-8 bg-primary-soft px-8 py-3 rounded-pill border border-primary/20 text-center max-w-3xl leading-snug shadow-sm">
                "Feature สามารถสร้าง Output ได้ครบตามนิยาม และ Output พร้อมนำไปใช้ใน Business Step ถัดไปหรือไม่?"
              </h3>

              <div className="flex w-full max-w-6xl gap-8 mt-4">
                
                {/* Method Flow */}
                <div className="w-1/3 flex flex-col gap-3">
                  <h4 className="text-lg font-bold text-text-secondary uppercase tracking-wider mb-2">Process</h4>
                  {methods.map((method, idx) => (
                    <div key={idx} className="flex items-center gap-4 px-4 py-3 bg-surface rounded-xl border border-border shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-surface-muted text-text-muted flex items-center justify-center font-bold text-xs shrink-0">{idx + 1}</div>
                      <span className="font-semibold text-sm">{method}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="w-1/3 flex flex-col gap-3">
                  <h4 className="text-lg font-bold text-text-secondary uppercase tracking-wider mb-2">Metrics</h4>
                  {metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 bg-surface border border-border rounded-panel shadow-sm hover:border-primary/50 transition-colors group">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        <span className="font-bold text-sm text-text-primary">{metric.title}</span>
                      </div>
                      <p className="text-text-secondary text-xs">{metric.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Comparison */}
                <div className="w-1/3 flex flex-col gap-3">
                   <h4 className="text-lg font-bold text-text-secondary uppercase tracking-wider mb-2">Comparison</h4>
                   <div className="flex flex-col gap-2 h-full bg-surface-muted p-6 rounded-panel border border-border justify-center">
                      
                      <div className="flex items-center gap-4 bg-surface p-4 rounded-xl shadow-sm border border-border">
                        <LayoutTemplate size={24} className="text-error" />
                        <div>
                          <h4 className="font-bold text-sm text-text-primary">Current Workflow</h4>
                          <p className="text-xs text-text-secondary">Manual handoffs, scattered docs</p>
                        </div>
                      </div>
                      
                      <div className="text-center text-primary font-bold italic my-1">VS</div>
                      
                      <div className="flex items-center gap-4 bg-primary-soft p-4 rounded-xl shadow-sm border border-primary/20">
                        <LayoutTemplate size={24} className="text-primary" />
                        <div>
                          <h4 className="font-bold text-sm text-primary">Prototype Workflow</h4>
                          <p className="text-xs text-text-secondary">Centralized data, automated</p>
                        </div>
                      </div>
                   </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* Test Cases Tab */}
          {activeTab === 'testcases' && (
            <motion.div 
              key="tab-testcases"
              className="flex flex-col items-center w-full h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl text-text-primary font-bold mb-3 text-center">Feature Test Cases</h2>
              <div className="w-16 h-[3px] rounded-full bg-primary mb-8" />

              <div className="w-full max-w-6xl overflow-hidden rounded-xl border border-border shadow-sm bg-surface">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-muted border-b border-border text-xs font-bold text-text-secondary uppercase tracking-wider">
                      <th className="p-3 w-[25%]">Feature</th>
                      <th className="p-3 w-[20%]">Input</th>
                      <th className="p-3 w-[25%]">Expected Output</th>
                      <th className="p-3 w-[30%]">Pass Criteria</th>
                    </tr>
                  </thead>
                  <motion.tbody 
                    variants={staggerContainerVariants} 
                    initial="initial" 
                    animate="animate"
                  >
                    {testCases.map((tc) => (
                      <motion.tr 
                        key={tc.id}
                        className="border-b border-border hover:bg-primary-soft/10 transition-colors"
                        variants={fadeUpVariants}
                      >
                        <td className="p-3 align-top">
                          <div className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">{tc.id}</span>
                            <span className="font-bold text-sm text-text-primary leading-snug">{tc.title}</span>
                          </div>
                        </td>
                        <td className="p-3 align-top">
                          <span className="text-xs font-medium text-text-secondary leading-snug">{tc.input}</span>
                        </td>
                        <td className="p-3 align-top">
                          <ul className="flex flex-col gap-1.5 text-xs text-text-primary">
                            {tc.outputs.map((out, i) => (
                              <li key={i} className="flex items-start gap-2 bg-info/5 p-1.5 rounded-md border border-info/10 leading-snug">
                                <Database size={12} className="text-info shrink-0 mt-0.5" />
                                <span>{out}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-3 align-top">
                          <ul className="flex flex-col gap-1.5 text-xs text-text-primary">
                            {tc.criteria.map((crit, i) => (
                              <li key={i} className="flex items-start gap-2 bg-success/5 p-1.5 rounded-md border border-success/20 leading-snug">
                                <CheckSquare size={12} className="text-success shrink-0 mt-0.5" />
                                <span>{crit}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </Scene>
  );
}
