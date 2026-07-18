import { Scene } from "../../components/presentation/Scene";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { Database, Search, FileSpreadsheet, FileArchive, LineChart, FileText } from "lucide-react";

export function Scene4SolutionDesign() {
  const features = [
    { id: "f1", title: "Structured Campaign Brief", icon: FileText, desc: "Input brief via structured form to create the Central Campaign Record." },
    { id: "f2", title: "Influencer Discovery", icon: Search, desc: "Search and match influencers using Campaign Context." },
    { id: "f3", title: "Auto Deal Sheet", icon: FileSpreadsheet, desc: "Map and calculate commercial information automatically." },
    { id: "f4", title: "Auto Proposal", icon: FileArchive, desc: "Reuse data and map into Client Proposal Template." }
  ];

  return (
    <Scene id="slide4-solution-design" theme="light">
      <div className="w-full h-full relative">
        <motion.div 
          className="flex flex-col items-center justify-start h-full pt-[8vh] w-full px-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
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
      </div>
    </Scene>
  );
}
