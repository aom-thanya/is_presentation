import { Scene } from "../../components/presentation/Scene";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "../../design-system/animations";
import { MessageSquare, Table, FileSpreadsheet, AlertTriangle, CheckCircle, Search, FileText } from "lucide-react";
import salesAvatar from "../../assets/sale.png";
import buyerAvatar from "../../assets/buyer.png";
import plannerAvatar from "../../assets/planner.png";

import { usePresentationStore } from "../../store/presentationStore";

export function Scene2Personas() {
  const { currentStepIndex, goToStep } = usePresentationStore();
  
  const isOverview = currentStepIndex === 0;

  const personas = [
    {
      id: "sales",
      title: "Sales",
      role: "Campaign Data Creator",
      voc: "“ส่ง Brief ไปแล้ว แต่แต่ละทีมยังกลับมาถามข้อมูลเดิม”",
      icon: MessageSquare,
      avatar: salesAvatar,
      pains: [
        "Requirement อาจตกหล่น",
        "ไม่มีรูปแบบข้อมูลมาตรฐาน",
        "ต้องตอบคำถามเดิมหลายครั้ง"
      ],
      gains: [
        "กรอกข้อมูล Campaign ครั้งเดียว",
        "ข้อมูลครบและเป็นมาตรฐาน",
        "ทุกทีมเห็น Campaign Context ชุดเดียวกัน"
      ]
    },
    {
      id: "buyer",
      title: "Buyer",
      role: "Influencer Discovery User",
      voc: "“บางครั้งลูกค้าส่งมาแค่ชื่อหรือรูป ต้องใช้เวลาหาว่าเป็น Influencer คนไหน”",
      icon: Table,
      avatar: buyerAvatar,
      pains: [
        "ค้นหาข้อมูลจากหลายแหล่ง",
        "ต้องรวบรวม Profile ด้วยตนเอง",
        "ใช้เวลาสร้าง Shortlist"
      ],
      gains: [
        "ค้นหาจากชื่อหรือรูปภาพ",
        "เข้าถึง Influencer Profile จากจุดเดียว",
        "ลดขั้นตอนก่อนการทำ Shortlist"
      ]
    },
    {
      id: "planner",
      title: "Planner",
      role: "Commercial Output User",
      voc: "“ข้อมูลใน Deal Sheet และ Proposal ต้อง Copy ซ้ำหลายรอบ”",
      icon: FileSpreadsheet,
      avatar: plannerAvatar,
      pains: [
        "ต้องนำข้อมูลจาก Brief มาใส่ใหม่",
        "เอกสารแต่ละชุดอาจไม่ตรงกัน",
        "เสี่ยงต่อ Human Error"
      ],
      gains: [
        "Generate Deal Sheet จากข้อมูลในระบบ",
        "Generate Proposal จาก Campaign Data ชุดเดียวกัน",
        "ลดการคัดลอกข้อมูลซ้ำ"
      ]
    }
  ];

  const activePersona = isOverview ? null : personas[currentStepIndex - 1];

  return (
    <Scene id="slide2-personas" theme="light">
      
      {/* Full-screen Background & Decorative Elements */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none z-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at 95% 5%,
              rgba(139, 124, 255, 0.20) 0%,
              rgba(139, 124, 255, 0.08) 22%,
              transparent 45%
            ),
            radial-gradient(
              circle at 50% 0%,
              rgba(109, 93, 246, 0.08) 0%,
              transparent 40%
            ),
            linear-gradient(
              180deg,
              #FCFCFF 0%,
              #F7F8FD 100%
            )
          `
        }}
      >
        {/* Left Concentric Circles */}
        <div className="absolute left-[-150px] top-[40%] -translate-y-1/2">
          <div className="w-[400px] h-[400px] rounded-full border-[40px] border-primary/5 opacity-10 flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full border-[20px] border-primary/5" />
          </div>
        </div>

        {/* Top-left Grid of Dots */}
        <div className="absolute left-[8%] top-[15%] opacity-30">
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#6D5DF6" />
            </pattern>
            <rect width="80" height="60" fill="url(#dots)" />
          </svg>
        </div>

        {/* Top-right Quotes */}
        <div className="absolute right-[8%] top-[20%] opacity-10">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Swooping Dashed Line */}
        <div className="absolute top-[45%] left-0 w-full opacity-20">
          <svg width="100%" height="400" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-100,100 C200,300 1240,300 1540,100" stroke="#6D5DF6" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start h-full pt-[8vh] w-full max-w-full mx-auto relative z-10 px-8">
        
        {/* Main Title (Only in overview) */}
        <AnimatePresence mode="wait">
          {isOverview && (
            <motion.div
              key="main-title"
              className="text-center w-full max-w-3xl flex flex-col items-center"
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#1A1A24]">
                Persona & <span style={{ background: "linear-gradient(90deg, #6D5DF6 0%, #8B7CFF 55%, #A99CFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>Voice of Customer</span>
              </h2>
              <div className="flex flex-col items-center">
                <p className="text-xl text-[#4A4A5A] leading-relaxed mb-8">
                  คลิกที่แต่ละ Persona เพื่อดู Pain Point และการแก้ปัญหา
                </p>
                <div className="w-10 h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #6D5DF6 0%, #8B7CFF 55%, #A99CFF 100%)" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overview Cards */}
        <AnimatePresence>
          {isOverview && (
            <motion.div 
              className="w-full flex justify-center gap-8 mt-16"
              variants={staggerContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {personas.map((persona) => {
                return (
                  <motion.button
                    key={persona.id}
                    className="flex flex-col items-center p-8 bg-surface border border-border rounded-panel shadow-sm w-[300px] hover:-translate-y-2 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                    onClick={() => goToStep(personas.findIndex(p => p.id === persona.id) + 1)}
                    variants={fadeUpVariants}
                    layoutId={`persona-card-${persona.id}`}
                  >
                    <div className="w-24 h-24 rounded-full bg-surface-muted flex items-center justify-center text-text-subtle mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors overflow-hidden">
                      <img 
                        src={persona.avatar} 
                        alt={persona.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{persona.title}</h3>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>



        {/* Detailed Persona View */}
        <AnimatePresence mode="wait">
          {!isOverview && activePersona && (
            <motion.div 
              key={`detail-${activePersona.id}`}
              className="w-full flex flex-col h-full pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="flex gap-12 w-full h-full">
                
                {/* Left side: Persona Info */}
                <div className="w-1/3 flex flex-col items-start pt-4">
                  <motion.div 
                    layoutId={`persona-card-${activePersona.id}`}
                    className="flex items-center gap-4 px-6 py-3 bg-surface border border-border rounded-pill shadow-sm mb-8 cursor-pointer hover:bg-surface-muted transition-colors"
                    onClick={() => goToStep(0)}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <img src={activePersona.avatar} alt={activePersona.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl font-bold text-primary">{activePersona.title}</span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl font-bold text-text-primary mb-2"
                    variants={fadeUpVariants} initial="initial" animate="animate"
                  >
                    {activePersona.role}
                  </motion.h3>

                  <motion.div
                    className="mt-8 px-8 py-6 bg-primary-soft border border-primary/20 rounded-card relative"
                    variants={fadeUpVariants} initial="initial" animate="animate"
                  >
                    <span className="absolute -top-4 left-6 text-4xl text-primary opacity-30 font-serif">"</span>
                    <p className="text-lg text-primary font-medium italic relative z-10">
                      {activePersona.voc.replace(/['"]+/g, '')}
                    </p>
                  </motion.div>
                </div>

                {/* Right side: Pain & Gain & Interactions */}
                <div className="w-2/3 flex flex-col pl-12 border-l border-border h-full relative">
                  
                  <div className="flex w-full gap-8 h-full">
                    
                    {/* Pain to Gain List */}
                    <div className="flex-1 flex flex-col gap-4 pt-4">
                      {activePersona.pains.map((pain, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg"
                          >
                            <AlertTriangle size={16} className="text-red-500 shrink-0" />
                            <span className="text-sm text-red-600 font-medium">{pain}</span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                            className="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-lg ml-6 shadow-sm"
                          >
                            <CheckCircle size={16} className="text-green-500 shrink-0" />
                            <span className="text-sm text-green-600 font-medium">{activePersona.gains[idx]}</span>
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    {/* Special Animation Area */}
                    <div className="flex-1 flex items-center justify-center relative bg-surface-muted rounded-panel overflow-hidden border border-border">
                      
                      {/* Sales: Structured Brief */}
                      {activePersona.id === "sales" && (
                        <motion.div 
                          className="w-3/4 bg-surface rounded-card shadow-md border border-border p-6 flex flex-col gap-4"
                          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        >
                          <div className="w-full h-8 bg-primary-soft text-primary font-semibold flex items-center justify-center rounded mb-2">Structured Campaign Brief</div>
                          <div className="flex gap-4 items-center"><div className="w-16 h-4 bg-surface-muted rounded" /><div className="flex-1 h-8 bg-border rounded" /></div>
                          <div className="flex gap-4 items-center"><div className="w-16 h-4 bg-surface-muted rounded" /><div className="flex-1 h-8 bg-border rounded" /></div>
                          <div className="flex gap-4 items-center"><div className="w-16 h-4 bg-surface-muted rounded" /><div className="flex-1 h-8 bg-border rounded" /></div>
                        </motion.div>
                      )}

                      {/* Buyer: Sources Merging */}
                      {activePersona.id === "buyer" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <motion.div 
                            className="w-64 h-80 bg-surface rounded-card shadow-md border border-border flex flex-col overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
                          >
                            <div className="h-12 bg-surface-muted flex items-center px-4 border-b border-border text-sm font-medium text-text-subtle">
                              <Search size={16} className="mr-2" /> Unified Search
                            </div>
                            <div className="p-4 flex flex-col gap-4">
                              <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-primary-soft shrink-0" />
                                <div className="flex flex-col gap-2 w-full"><div className="h-3 w-3/4 bg-border rounded" /><div className="h-2 w-1/2 bg-surface-muted rounded" /></div>
                              </div>
                              <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-surface-muted shrink-0" />
                                <div className="flex flex-col gap-2 w-full"><div className="h-3 w-3/4 bg-border rounded" /><div className="h-2 w-1/2 bg-surface-muted rounded" /></div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* Planner: Auto Generation */}
                      {activePersona.id === "planner" && (
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                          <motion.div 
                            className="w-40 h-32 bg-primary text-primary-foreground rounded-card shadow-md flex items-center justify-center font-bold text-center z-10"
                            initial={{ y: 0 }}
                            animate={{ y: -60 }}
                            transition={{ delay: 0.6 }}
                          >
                            Campaign<br/>Record
                          </motion.div>

                          <motion.div 
                            className="absolute top-[60%] flex gap-8 w-full justify-center"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                          >
                            <motion.div 
                              className="w-32 h-40 bg-surface rounded-card shadow-md border border-border flex flex-col items-center p-4"
                              initial={{ y: -40, x: 20 }} animate={{ y: 0, x: 0 }} transition={{ delay: 0.8 }}
                            >
                              <FileSpreadsheet size={24} className="text-green-500 mb-2" />
                              <span className="text-xs font-bold text-center">Deal Sheet</span>
                              <div className="mt-auto w-full h-2 bg-green-100 rounded" />
                            </motion.div>
                            <motion.div 
                              className="w-32 h-40 bg-surface rounded-card shadow-md border border-border flex flex-col items-center p-4"
                              initial={{ y: -40, x: -20 }} animate={{ y: 0, x: 0 }} transition={{ delay: 0.8 }}
                            >
                              <FileText size={24} className="text-blue-500 mb-2" />
                              <span className="text-xs font-bold text-center">Proposal</span>
                              <div className="mt-auto w-full h-2 bg-blue-100 rounded" />
                            </motion.div>
                          </motion.div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Scene>
  );
}
