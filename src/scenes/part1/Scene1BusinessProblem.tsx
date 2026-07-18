import { Scene } from "../../components/presentation/Scene";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../design-system/animations";
import { 
  FileText, MessageSquare, Table, FileSpreadsheet, 
  FileArchive, FolderKanban, Image as ImageIcon, 
  AlertTriangle 
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

export function Scene1BusinessProblem() {
  return (
    <Scene id="slide1-business-problem" theme="light">
      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative px-8">
        
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl text-text-primary font-bold mb-12"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
        >
          The Hidden Cost of Campaign Handoffs
        </motion.h2>

        {/* Workflow Area */}
        <div className="relative w-full max-w-5xl flex justify-between items-start mt-4 px-4 opacity-100">
          <div className="absolute top-6 left-8 right-8 h-1 bg-primary/20 rounded-full -z-10" />
          
          {roles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div 
                key={role.id} 
                className="flex flex-col items-center relative w-[14%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-surface flex items-center justify-center z-10 shadow-sm text-primary">
                  <Icon size={20} />
                </div>
                <div className="text-center mt-4 flex flex-col items-center">
                  <span className="font-semibold text-sm text-text-primary">{role.name}</span>
                  <div className="mt-3 flex flex-col gap-1 items-center">
                    {role.docs.map((doc, docIdx) => (
                      <div key={docIdx} className="px-2 py-1 bg-surface border border-border rounded text-[10px] text-text-subtle shadow-xs truncate max-w-[100px]">
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pain Points Summary */}
        <motion.div 
          className="w-full max-w-6xl flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {painPoints.map((p, i) => (
            <div key={i} className="px-4 py-3 bg-red-50 border border-red-100 rounded-card flex items-center gap-3 shadow-sm max-w-[280px]">
              <AlertTriangle size={18} className="text-red-500 shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-red-600 mb-0.5">{p.pain}</span>
                <span className="text-[10px] text-red-400">{p.effect}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Root Cause Messages */}
        <motion.div 
          className="w-full max-w-4xl flex flex-col items-center text-center mt-auto mb-[8vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-tight">
            Every handoff requires people to reconstruct <br/>
            <span className="text-primary">the same campaign context.</span>
          </h2>
          <p className="mt-6 text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            ปัญหาไม่ได้อยู่ที่จำนวนเอกสารเพียงอย่างเดียว
            แต่อยู่ที่ Campaign Information ยังไม่อยู่ในรูปแบบข้อมูล
            ที่สามารถนำไปใช้ต่อได้ทันที
          </p>
        </motion.div>

      </div>
    </Scene>
  );
}
