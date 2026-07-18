import { Scene } from "../../components/presentation/Scene";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../design-system/cn";
import { usePresentationStore } from "../../store/presentationStore";
import { 
  FileText, Users, Play, Building, User, MessageSquare, 
  Search, ClipboardList, Send, Smartphone, Clock, ArrowRight, Edit, Lightbulb
} from "lucide-react";
import salesAvatar from "../../assets/sale.png";
import buyerAvatar from "../../assets/buyer.png";
import plannerAvatar from "../../assets/planner.png";

export function Scene1BusinessProblem() {
  const { currentStepIndex, goToStep } = usePresentationStore();
  const activeStep = currentStepIndex + 1;

  const steps = [
    {
      id: 1,
      role: "Client",
      icon: User,
      action: "Submit Brief",
      title: "Client submits campaign brief",
      details: ["Campaign objectives", "Target audience", "Budget", "Timeline"],
      message: "The campaign begins with the client’s requirements.",
    },
    {
      id: 2,
      role: "Sales",
      icon: MessageSquare,
      avatar: salesAvatar,
      action: "Requirement Gathering",
      title: "Sales gathers and clarifies requirements",
      details: ["Review the client brief", "Confirm requirements", "Coordinate missing information"],
      time: "≈ 1 Day"
    },
    {
      id: 3,
      role: "Buyer",
      icon: Search,
      avatar: buyerAvatar,
      action: "Creator Sourcing",
      title: "Buyer sources and negotiates with creators",
      details: ["Creator sourcing", "Availability checking", "Rate negotiation", "Rate card preparation"],
      time: "≈ 1 Day"
    },
    {
      id: 4,
      role: "Planner",
      icon: ClipboardList,
      avatar: plannerAvatar,
      action: "Proposal Preparation",
      title: "Planner prepares the campaign proposal",
      details: ["Campaign strategy", "Creator shortlist", "Budget allocation", "Media plan"],
      time: "≈ 1 Day"
    },
    {
      id: 5,
      role: "Project Manager",
      icon: Users,
      action: "Working Brief",
      title: "Project Manager prepares the working brief",
      details: ["Translate the approved proposal into execution details", "Prepare influencer instructions", "Align campaign requirements across teams"]
    },
    {
      id: 6,
      role: "Operations / Influencers",
      icon: Smartphone,
      action: "Coordinate Campaign",
      title: "Campaign execution",
      details: ["Coordinate influencers", "Prepare ideas and drafts", "Review and revise content", "Publish final content"]
    }
  ];



  return (
    <Scene id="slide1-business-problem" theme="light">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-full mx-auto relative px-8 pb-[10vh] bg-[#f8f9fc] font-sans">
        
        {/* Top Metrics Section */}
        <div className="w-full flex justify-between items-start mb-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#1a1a24] mb-1">
              Influencer Agency
            </h1>
            <h1 className="text-4xl font-bold text-[#6d5df6] mb-3">
              Workflow at Scale
            </h1>
            <p className="text-sm text-[#4a4a5a] max-w-md">
              Behind every successful campaign is a complex process that involves many people, many steps, and countless hours.
            </p>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#f0efff] text-[#6d5df6] flex items-center justify-center mb-2">
                <FileText size={20} />
              </div>
              <span className="font-bold text-xl text-[#1a1a24]">1,000+</span>
              <span className="text-xs text-[#6a6a7c] text-center">Campaign Briefs<br/>/ Year</span>
            </div>
            
            <div className="w-px h-16 bg-[#e4e5eb] mt-2" />

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#f0efff] text-[#6d5df6] flex items-center justify-center mb-2">
                <Users size={20} />
              </div>
              <span className="font-bold text-xl text-[#1a1a24]">8,000+</span>
              <span className="text-xs text-[#6a6a7c] text-center">Influencers<br/>Collaborated</span>
            </div>

            <div className="w-px h-16 bg-[#e4e5eb] mt-2" />

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#f0efff] text-[#6d5df6] flex items-center justify-center mb-2">
                <Play size={20} />
              </div>
              <span className="font-bold text-xl text-[#1a1a24]">12,000+</span>
              <span className="text-xs text-[#6a6a7c] text-center">Contents<br/>Produced</span>
            </div>

            <div className="w-px h-16 bg-[#e4e5eb] mt-2" />

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#f0efff] text-[#6d5df6] flex items-center justify-center mb-2">
                <Building size={20} />
              </div>
              <span className="font-bold text-xl text-[#1a1a24]">5</span>
              <span className="text-xs text-[#6a6a7c] text-center">Teams<br/>Involved</span>
            </div>
          </div>
        </div>



        {/* Horizontal Stepper */}
        <div className="w-full flex justify-center items-stretch gap-4 mb-8 h-[320px]">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const isCompleted = step.id < activeStep;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                layout
                onClick={(e) => {
                  e.stopPropagation();
                  goToStep(step.id - 1);
                }}
                className={cn(
                  "relative flex flex-col items-center cursor-pointer rounded-xl border transition-all duration-500 overflow-hidden",
                  isActive ? "bg-gradient-to-b from-[#6d5df6] to-[#5a48e5] text-white border-transparent shadow-lg shadow-[#6d5df6]/30 flex-[2] z-10" : 
                  isCompleted ? "bg-white border-[#e4e5eb] text-[#1a1a24] shadow-sm flex-1 hover:border-[#6d5df6]/50" : 
                  "bg-white/50 border-transparent text-[#9a9aa8] flex-1 opacity-70 hover:opacity-100 hover:bg-white"
                )}
                style={{ minHeight: isActive ? '320px' : '260px', marginTop: isActive ? '0' : '30px' }}
              >
                {/* Step Number Badge */}
                <div className={cn(
                  "absolute top-3 left-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-20",
                  isActive ? "bg-white/20 text-white" : "bg-[#6d5df6] text-white"
                )}>
                  {step.id}
                </div>

                <div className="flex flex-col items-center w-full h-full pt-10 pb-4 px-4">
                  {/* Icon */}
                  <div className={cn(
                    "rounded-full flex items-center justify-center mb-3 transition-all duration-300 shrink-0 overflow-hidden",
                    isActive ? "w-20 h-20 bg-white/10 text-white" : 
                    isCompleted ? "w-14 h-14 bg-[#f0efff] text-[#6d5df6]" : "w-14 h-14 bg-gray-100 text-[#9a9aa8]"
                  )}>
                    {step.avatar ? (
                      <img 
                        src={step.avatar} 
                        alt={step.role} 
                        className={cn("w-full h-full object-cover transition-all duration-300", 
                          isActive ? "" : isCompleted ? "grayscale-0 opacity-90" : "grayscale opacity-60"
                        )} 
                      />
                    ) : (
                      <Icon size={isActive ? 32 : 24} />
                    )}
                  </div>
                  
                  {/* Role Name */}
                  <span className="font-bold text-lg mb-2 text-center leading-tight h-[28px]">{step.role}</span>
                  
                  {/* Collapsed view text */}
                  {!isActive && (
                    <div className="text-[10px] text-center mt-2 flex flex-col items-center opacity-80 gap-1 flex-1">
                      <span className="mb-auto leading-tight">{step.action}</span>
                      {step.time && (
                        <div className={cn(
                          "px-2 py-1 rounded-full flex items-center gap-1 mt-2",
                          isCompleted ? "bg-[#f0efff] text-[#6d5df6]" : "bg-gray-100 text-[#9a9aa8]"
                        )}>
                          <Clock size={10} />
                          <span className="font-semibold">{step.time}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Expanded Active View Details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col items-center text-center mt-2 w-full flex-1"
                      >
                        <span className="text-[11px] font-semibold mb-3 leading-tight opacity-90">{step.title}</span>
                        
                        {step.details && (
                          <div className="flex flex-col items-start w-full text-[10px] gap-1.5 mb-auto opacity-90 pl-1 text-left">
                            {step.details.map((d, i) => (
                              <div key={i} className="flex items-start gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />
                                <span className="leading-tight">{d}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {step.highlight && (
                          <div className="text-3xl font-bold mb-2 flex items-center gap-2">
                            <Clock size={24} className="opacity-80"/>
                            {step.highlight}
                          </div>
                        )}

                        {step.message && (
                          <div className="text-[10px] opacity-80 mt-auto leading-tight p-2 bg-white/10 rounded-md">
                            {step.message}
                          </div>
                        )}

                        {step.time && !step.highlight && (
                          <div className="px-3 py-1.5 rounded-full bg-white/20 flex items-center gap-1.5 mt-auto">
                            <Clock size={12} />
                            <span className="font-semibold text-xs">{step.time}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section - Reveal on Step 7 */}
        <div className="w-full h-[160px] relative">
          <AnimatePresence>
            {activeStep === 6 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col"
              >
                <div className="flex gap-4 w-full mb-4">
                  {/* Left Bottom Card */}
                  <div className="flex-1 bg-white border border-[#e4e5eb] rounded-xl p-4 shadow-sm flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#f0efff] text-[#6d5df6] flex items-center justify-center shrink-0">
                      <Clock size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#6d5df6] mb-1">Before campaign even starts</span>
                      <span className="text-xs text-[#6a6a7c] mb-1">Proposal Lead Time</span>
                      <span className="text-3xl font-bold text-[#1a1a24] mb-1">≈ 3 Days</span>
                      <span className="text-[10px] text-[#6a6a7c]">To prepare, align, and present the best solution to our client</span>
                    </div>
                  </div>

                  {/* Arrow Separator */}
                  <div className="flex items-center justify-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#6d5df6] text-white flex items-center justify-center shadow-md">
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Right Bottom Card */}
                  <div className="flex-[1.2] bg-white border border-[#e4e5eb] rounded-xl p-4 shadow-sm flex flex-col justify-center">
                    <span className="text-sm font-bold text-[#1a1a24] mb-1">After project approval</span>
                    <span className="text-xs text-[#6d5df6] font-semibold mb-4">Average time investment per influencer</span>
                    
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#f0efff] text-[#6d5df6] flex items-center justify-center">
                          <Edit size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-[#6a6a7c]">Creative Briefing</span>
                          <span className="text-xl font-bold text-[#1a1a24]">≈ 4 hrs</span>
                          <span className="text-[10px] text-[#6a6a7c]">/ Influencer</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#f0efff] text-[#6d5df6] flex items-center justify-center">
                          <Play size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-[#6a6a7c]">Content Review</span>
                          <span className="text-xl font-bold text-[#1a1a24]">≈ 4 hrs</span>
                          <span className="text-[10px] text-[#6a6a7c]">/ Influencer</span>
                        </div>
                      </div>
                    </div>
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
