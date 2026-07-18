import { Scene } from "../../components/presentation/Scene";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../design-system/animations";
import { ArrowRight, Database, FileText, CheckCircle } from "lucide-react";

export function Scene3ValueMapping() {
  const mappings = [
    { id: 1, pain: "Requirement ตกหล่นและต้องถามซ้ำ", need: "ต้องมีข้อมูล Campaign ที่ครบและพร้อมส่งต่อ", feature: "Structured Campaign Brief", outcome: "ลด Clarification และ Rework" },
    { id: 2, pain: "Buyer ต้องค้นหาจากหลายแหล่ง", need: "ต้องเข้าถึง Influencer Information ได้จากจุดเดียว", feature: "Search by Name / Image", outcome: "ลด Time to Shortlist" },
    { id: 3, pain: "Planner ต้อง Copy ข้อมูลหลายรอบ", need: "ต้องนำข้อมูลเดิมไปสร้าง Commercial Output ได้ทันที", feature: "Auto Deal Sheet", outcome: "ลด Manual Preparation และ Copy Error" },
    { id: 4, pain: "Proposal ใช้ข้อมูลซ้ำจากหลายไฟล์", need: "ต้องสร้าง Client Output จากข้อมูลชุดเดียวกัน", feature: "Auto Proposal", outcome: "ลด Proposal Turnaround Time" },
    { id: 5, pain: "แต่ละทีมใช้ข้อมูลคนละเวอร์ชัน", need: "ต้องมี Campaign Record กลาง", feature: "Central Campaign Record", outcome: "ลด Version Conflict" },
  ];

  return (
    <Scene id="slide3-value-mapping" theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative px-8">
        
        {/* Title */}
        <motion.div 
          className="text-center w-full mb-12 flex flex-col items-center" 
          variants={fadeUpVariants} 
          initial="initial" 
          animate="animate"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">From Voice of Customer to Product Value</h2>
          <div className="w-16 h-[3px] rounded-full bg-primary mb-2" />
        </motion.div>

        <div className="flex w-full max-w-7xl gap-12 h-full">
          
          {/* Left: Mapping Table */}
          <motion.div 
            className="w-3/5 flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 font-bold text-sm text-text-secondary pb-3 border-b-2 border-border px-2">
               <div>Voice of Customer / Pain</div>
               <div>Proposed Feature</div>
               <div>Business Outcome</div>
            </div>
            
            <div className="flex flex-col gap-3">
              {mappings.map((m, idx) => (
                 <motion.div 
                    key={m.id}
                    className="grid grid-cols-[1fr_1fr_1fr] gap-4 items-center py-4 px-2 bg-surface hover:bg-surface-muted transition-colors rounded-lg border border-transparent hover:border-border"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                 >
                    <div className="text-error text-sm font-medium flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0" />
                      {m.pain}
                    </div>
                    <div className="text-primary text-sm font-bold flex items-center gap-2">
                      <ArrowRight size={14} className="shrink-0"/> 
                      {m.feature}
                    </div>
                    <div className="text-success text-sm font-medium flex items-start gap-2">
                      <CheckCircle size={14} className="shrink-0 mt-0.5"/> 
                      {m.outcome}
                    </div>
                 </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Before/After & Evidence */}
          <motion.div 
            className="w-2/5 flex flex-col gap-8 pt-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
             {/* Data-driven workflow Visual */}
             <div className="flex-1 min-h-[300px] bg-surface-muted/50 rounded-panel p-8 relative flex flex-col items-center justify-center border border-border shadow-inner">
                 <h3 className="text-2xl font-bold text-primary mb-3 text-center">Data-driven workflow</h3>
                 <p className="text-sm text-text-secondary text-center mb-8 max-w-[80%]">
                   The system reuses campaign data across multiple business steps seamlessly.
                 </p>
                 
                 {/* Glowing Database Icon */}
                 <motion.div 
                    className="relative flex flex-col items-center justify-center w-32 h-32 bg-primary text-primary-foreground rounded-full shadow-[0_0_40px_rgba(109,93,246,0.3)] z-10"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                 >
                    <Database size={40} className="mb-2" />
                    <span className="font-bold text-xs text-center leading-tight">Central<br/>Record</span>
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                 </motion.div>

                 {/* Connecting lines or dots in background */}
                 <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M10,50 Q50,10 90,50 T10,50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-primary" />
                      <path d="M10,90 Q50,50 90,90 T10,90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-primary" />
                    </svg>
                 </div>
             </div>
             
             {/* Evidence Note */}
             <motion.div 
                className="bg-primary-soft border border-primary/20 rounded-card p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
             >
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <FileText size={16} />
                  </div>
                  <p className="text-sm text-primary font-medium italic leading-relaxed">
                    "Business Outcome เชิงปริมาณจะถูกวัดจาก User Validation ไม่ใช้ตัวเลขสมมติเป็นผลลัพธ์ล่วงหน้า"
                  </p>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </Scene>
  );
}
