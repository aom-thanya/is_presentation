import { Scene } from "../../components/presentation/Scene";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Scene5LiveWalkthrough() {
  const takeaways = [
    "Campaign Data is created once.",
    "Campaign Data is reused across multiple business steps.",
    "No repeated Campaign Information entry.",
    "One Campaign. One Data. One Source of Truth."
  ];

  return (
    <Scene id="slide5-live-walkthrough" theme="light">
      <div className="flex w-full h-full">
        {/* Left Panel: Takeaways */}
        <div className="w-[30%] bg-surface border-r border-border h-full flex flex-col pt-24 px-8 shadow-sm">
          <h2 className="text-3xl font-bold text-text-primary leading-tight mb-2">Live Prototype<br/>Walkthrough</h2>
          <p className="text-sm text-text-secondary mb-12">Interact with the system on the right to see the data flow in action.</p>
          
          <h3 className="text-xl font-bold text-text-primary mb-6">Key Takeaways</h3>
          <div className="flex flex-col gap-4">
            {takeaways.map((takeaway, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start gap-3 p-4 bg-success/5 border border-success/20 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle size={20} className="text-success shrink-0 mt-0.5" />
                <span className="text-sm text-text-primary font-medium">{takeaway}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Panel: Iframe */}
        <div className="w-[70%] h-full bg-border-strong relative">
          <iframe 
            src="https://is-prototype.vercel.app/" 
            className="w-full h-full border-none"
            title="Live Prototype"
          />
        </div>
      </div>
    </Scene>
  );
}
