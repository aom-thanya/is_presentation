import { Scene } from "../../components/presentation/Scene";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { 
  FileText, Users, LayoutTemplate, BarChart2, MessageCircle, 
  CheckCircle2, Folder, Calendar, DollarSign, Target, Sparkles, Activity
} from "lucide-react";
import { useState, useEffect } from "react";

export function Scene0Cover({ stepIndex }: { stepIndex: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Parallax layers
  const parallaxXFront = useTransform(mouseXSpring, [-1000, 1000], [-16, 16]);
  const parallaxYFront = useTransform(mouseYSpring, [-1000, 1000], [-16, 16]);
  
  const parallaxXMid = useTransform(mouseXSpring, [-1000, 1000], [-8, 8]);
  const parallaxYMid = useTransform(mouseYSpring, [-1000, 1000], [-8, 8]);

  const features = [
    { icon: Sparkles, label: "Smart Brief\nCreation" },
    { icon: Users, label: "Seamless\nCollaboration" },
    { icon: LayoutTemplate, label: "Structured\nWorkflows" },
    { icon: Activity, label: "Actionable\nInsights" }
  ];

  return (
    <Scene id="cover" theme="light">
      <div 
        className="flex w-full h-full bg-[#f8f9fc] overflow-hidden" 
        onMouseMove={handleMouseMove}
      >
        {/* Background Orbits */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="absolute w-[80vw] h-[80vw] border border-primary/5 rounded-full" />
          <div className="absolute w-[60vw] h-[60vw] border border-primary/5 rounded-full" />
          <div className="absolute w-[40vw] h-[40vw] border border-primary/10 rounded-full" />
        </div>

        {/* Left Section */}
        <div className="w-5/12 h-full flex flex-col justify-center pl-20 pr-4 z-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              variants={staggerContainerVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-6"
            >
              {/* Label */}
              <motion.div variants={fadeUpVariants} className="flex items-center gap-2 text-primary font-bold tracking-wider text-xs">
                <FileText size={16} />
                <span>BRIEF MANAGEMENT</span>
              </motion.div>

              {/* Title */}
              <motion.h1 variants={fadeUpVariants} className="text-6xl lg:text-7xl font-extrabold text-[#1A1A24] leading-[1.05] tracking-tight">
                Brief <br/>
                <span className="text-primary">
                  Management
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={fadeUpVariants} className="text-xl text-[#4A4A5A] mt-4 font-medium leading-snug">
                One Brief. Clear Direction.<br/>
                Better Collaboration. Greater Impact.
              </motion.p>

              {/* Features */}
              <motion.div variants={fadeUpVariants} className="flex gap-4 mt-8">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 w-24">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(109,93,246,0.1)] border border-primary/10 flex items-center justify-center text-primary">
                      <feat.icon size={28} />
                    </div>
                    <span className="text-xs font-bold text-center text-[#1A1A24] whitespace-pre-line leading-tight">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Section */}
        <div className="w-7/12 h-full relative flex items-center justify-center">
          
          {/* Purple Glow */}
          <div className="absolute w-[60vw] h-[60vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Perspective Container */}
          {isClient && (
            <div className="relative w-full h-full flex items-center justify-center -translate-x-12" style={{ perspective: "2000px" }}>
              
              {/* 3D Scene Container (Rotated) */}
              <motion.div
                initial={{ scale: 0.96, opacity: 0, rotateY: -22, rotateX: 6, rotateZ: 0 }}
                animate={{ scale: 1, opacity: 1, rotateY: -22, rotateX: 6, rotateZ: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute w-full h-full flex items-center justify-center"
              >
                
                {/* Main Dashboard Card */}
                <motion.div 
                  style={{ x: parallaxXMid, y: parallaxYMid, transformStyle: "preserve-3d" }}
                  className="absolute z-10 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[760px] bg-white/95 backdrop-blur-md rounded-2xl border border-primary/20 shadow-[0_30px_60px_-15px_rgba(109,93,246,0.3)] flex overflow-hidden"
                  >
                    {/* Dashboard Sidebar */}
                    <div className="w-16 bg-[#F8F9FA] border-r border-border flex flex-col items-center py-6 gap-6">
                      <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center mb-4"><MessageCircle size={16}/></div>
                      <Folder size={20} className="text-[#9CA3AF]" />
                      <Users size={20} className="text-[#9CA3AF]" />
                      <FileText size={20} className="text-primary" />
                      <Activity size={20} className="text-[#9CA3AF]" />
                    </div>

                    {/* Dashboard Main */}
                    <div className="flex-1 p-8 flex flex-col">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-extrabold text-2xl text-[#1A1A24]">BR-2025-0717</h3>
                            <span className="px-2 py-1 bg-[#F3F0FF] text-primary text-xs font-bold rounded-md">Rate Card Brief</span>
                          </div>
                          
                          {/* Steps */}
                          <div className="flex items-center gap-2 text-[11px] font-bold mt-6">
                            <div className="flex items-center gap-1.5 text-primary"><div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">1</div> Brief Info</div>
                            <div className="w-8 h-[1px] bg-border" />
                            <div className="flex items-center gap-1.5 text-[#9CA3AF]"><div className="w-5 h-5 rounded-full bg-[#F3F4F6] text-[#9CA3AF] flex items-center justify-center text-[10px]">2</div> Example List</div>
                            <div className="w-8 h-[1px] bg-border" />
                            <div className="flex items-center gap-1.5 text-[#9CA3AF]"><div className="w-5 h-5 rounded-full bg-[#F3F4F6] text-[#9CA3AF] flex items-center justify-center text-[10px]">3</div> Recap</div>
                            <div className="w-8 h-[1px] bg-border" />
                            <div className="flex items-center gap-1.5 text-[#9CA3AF]"><div className="w-5 h-5 rounded-full bg-[#F3F4F6] text-[#9CA3AF] flex items-center justify-center text-[10px]">4</div> Deal Sheet</div>
                            <div className="w-8 h-[1px] bg-border" />
                            <div className="flex items-center gap-1.5 text-[#9CA3AF]"><div className="w-5 h-5 rounded-full bg-[#F3F4F6] text-[#9CA3AF] flex items-center justify-center text-[10px]">5</div> Proposal</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-6 mb-8">
                        {/* Campaign Overview */}
                        <div className="flex-1 border border-border rounded-xl p-5 shadow-sm">
                          <h4 className="text-sm font-bold text-[#4A4A5A] mb-5">Campaign Overview</h4>
                          <div className="w-full h-2.5 bg-[#F3F4F6] rounded-full mb-4" />
                          <div className="w-5/6 h-2.5 bg-[#F3F4F6] rounded-full mb-4" />
                          <div className="w-4/6 h-2.5 bg-[#F3F4F6] rounded-full" />
                        </div>
                        
                        {/* Timeline & Details */}
                        <div className="flex-1 border border-border rounded-xl p-5 shadow-sm flex flex-col gap-4">
                          <div>
                            <div className="text-[11px] font-bold text-[#9CA3AF] flex items-center gap-1.5 mb-1.5 uppercase tracking-wider"><Calendar size={12}/> Timeline</div>
                            <div className="text-sm font-bold text-[#1A1A24]">1 Aug - 31 Aug 2025</div>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-[#9CA3AF] flex items-center gap-1.5 mb-1.5 uppercase tracking-wider"><DollarSign size={12}/> Budget</div>
                            <div className="text-sm font-bold text-[#1A1A24]">฿ 1,250,000</div>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-[#9CA3AF] flex items-center gap-1.5 mb-1.5 uppercase tracking-wider"><Target size={12}/> Objective</div>
                            <div className="text-sm font-bold text-[#1A1A24]">Increase brand awareness</div>
                          </div>
                        </div>
                      </div>

                      {/* Influencer Groups */}
                      <div>
                        <h4 className="text-sm font-bold text-[#4A4A5A] mb-5">Influencer Groups</h4>
                        <div className="flex flex-col gap-4">
                          {[15, 20, 10].map((num, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#F3F0FF] text-primary flex items-center justify-center"><Users size={14}/></div>
                                <div className="w-48 h-2.5 bg-[#F3F4F6] rounded-full" />
                              </div>
                              <span className="text-sm font-black text-primary">{num}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Element: Progress Card */}
                <motion.div 
                  style={{ x: parallaxXFront, y: parallaxYFront, translateZ: 40 }}
                  className="absolute right-[40px] top-[180px] z-20"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 0.8 },
                      scale: { duration: 0.8, delay: 0.8 },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                    }}
                    className="bg-white rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-primary/10 p-5 flex flex-col items-center w-44"
                  >
                    <span className="text-xs font-bold text-primary mb-4">Progress Overview</span>
                    <div className="relative w-20 h-20 flex items-center justify-center mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="40" cy="40" r="36" fill="none" stroke="#F3F4F6" strokeWidth="8" />
                        <circle cx="40" cy="40" r="36" fill="none" stroke="#6D5DF6" strokeWidth="8" strokeDasharray="226" strokeDashoffset="56.5" strokeLinecap="round" />
                      </svg>
                      <span className="absolute font-black text-lg text-[#1A1A24]">75%</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider">Completed</span>
                  </motion.div>
                </motion.div>

                {/* Floating Element: Folder */}
                <motion.div 
                  style={{ x: parallaxXFront, y: parallaxYFront, translateZ: 60 }}
                  className="absolute right-[100px] bottom-[80px] z-30"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 1.4 },
                      scale: { duration: 0.8, delay: 1.4 },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                    }}
                    className="relative w-56 h-36"
                  >
                    {/* Tabs */}
                    <div className="absolute top-0 flex items-end">
                      <div className="px-3 py-2 bg-primary rounded-t-xl text-[10px] font-bold text-white z-10 shadow-sm">BRIEF</div>
                      <div className="px-3 py-1.5 bg-[#FAD2E1] rounded-t-xl text-[10px] font-bold text-[#1A1A24] -ml-2 z-0">RECAP</div>
                      <div className="px-3 py-1 bg-[#FFECCC] rounded-t-xl text-[10px] font-bold text-[#1A1A24] -ml-3 z-0">DEAL SHEET</div>
                      <div className="px-3 py-1 bg-[#D2E3FC] rounded-t-xl text-[10px] font-bold text-[#1A1A24] -ml-3 -z-10">PROPOSAL</div>
                    </div>
                    {/* Folder Body */}
                    <div className="absolute top-[28px] w-full h-28 bg-primary rounded-2xl rounded-tl-none shadow-[0_20px_40px_-10px_rgba(109,93,246,0.4)] flex flex-col justify-center px-5 border border-white/20">
                      <div className="w-10 h-2 bg-white/40 rounded-full mb-1.5" />
                      <div className="w-16 h-2 bg-white/20 rounded-full" />
                      <div className="absolute right-4 bottom-4 w-5 h-5 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Element: All in one place */}
                <motion.div 
                  style={{ x: parallaxXMid, y: parallaxYMid, translateZ: 30 }}
                  className="absolute left-[80px] top-[100px] z-20"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 0.5 },
                      scale: { duration: 0.8, delay: 0.5 },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    }}
                    className="bg-white rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] px-5 py-2.5 flex items-center gap-2"
                  >
                    <CheckCircle2 size={18} className="text-primary fill-primary/20" />
                    <span className="text-sm font-bold text-[#1A1A24]">All in one place</span>
                  </motion.div>
                </motion.div>

                {/* Floating Icon: User */}
                <motion.div 
                  style={{ x: parallaxXFront, y: parallaxYFront, translateZ: 50 }}
                  className="absolute right-[80px] top-[80px] z-20"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 2 },
                      scale: { duration: 0.8, delay: 2 },
                      y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
                    }}
                    className="w-14 h-14 bg-primary rounded-2xl shadow-[0_15px_30px_-5px_rgba(109,93,246,0.4)] flex items-center justify-center text-white"
                  >
                    <Users size={24} />
                  </motion.div>
                </motion.div>

                {/* Floating Icon: Document */}
                <motion.div 
                  style={{ x: parallaxXMid, y: parallaxYMid, translateZ: 20 }}
                  className="absolute left-[40px] bottom-[220px] z-20"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 1.2 },
                      scale: { duration: 0.8, delay: 1.2 },
                      y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                    }}
                    className="w-12 h-12 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-primary/10 flex items-center justify-center text-primary"
                  >
                    <FileText size={22} />
                  </motion.div>
                </motion.div>

                {/* Floating Icon: Analytics */}
                <motion.div 
                  style={{ x: parallaxXFront, y: parallaxYFront, translateZ: 40 }}
                  className="absolute right-[20px] bottom-[220px] z-20"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 2.2 },
                      scale: { duration: 0.8, delay: 2.2 },
                      y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }
                    }}
                    className="w-14 h-14 bg-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] border border-primary/10 flex items-center justify-center text-primary"
                  >
                    <BarChart2 size={24} />
                  </motion.div>
                </motion.div>

              </motion.div>
            </div>
          )}
        </div>

        {/* Scroll Instruction */}
        <AnimatePresence>
          {stepIndex >= 0 && (
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#9CA3AF] font-bold tracking-widest uppercase flex flex-col items-center gap-2 z-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Scroll or Click to begin
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Scene>
  );
}
