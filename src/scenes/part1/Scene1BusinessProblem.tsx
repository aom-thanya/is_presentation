import { Scene } from "../../components/presentation/Scene";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../design-system/animations";
import { 
  FileText, MessageSquare, Table, FileSpreadsheet, 
  FileArchive, FolderKanban, Image as ImageIcon 
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

export function Scene1BusinessProblem() {
  return (
    <Scene id="slide1-business-problem" theme="light">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-full mx-auto relative px-8 pb-12">
        
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

      </div>
    </Scene>
  );
}
