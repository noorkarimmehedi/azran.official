import { ArrowDownRight } from "lucide-react";
import heroImage from "@assets/image_1768632374082.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white overflow-hidden border-b border-black">
      <div className="grid grid-cols-1 md:grid-cols-12 h-full min-h-[90vh]">
        {/* Left: Text & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 p-8 md:p-16 flex flex-col justify-between border-r border-black"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Guzel / Studio</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">CH-26</span>
          </div>

          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[14vw] md:text-[12vw] font-display font-black leading-[0.9] tracking-tighter uppercase"
            >
              GU<br/>
              ZEL <span className="text-4xl font-normal tracking-widest">STUDIO</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 text-sm uppercase tracking-widest text-muted-foreground max-w-xs leading-relaxed"
            >
              Swiss modernist principles applied to contemporary luxury couture.
            </motion.p>
          </div>

          <div className="flex justify-between items-end border-t border-black pt-8">
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-widest font-bold">Collection</span>
              <span className="block text-xl font-display uppercase italic">Genesis 001</span>
            </div>
            <ArrowDownRight className="w-10 h-10 stroke-[1px]" />
          </div>
        </motion.div>

        {/* Right: Minimal Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 relative h-[50vh] md:h-auto bg-neutral-50 overflow-hidden group"
        >
          <img 
            src={heroImage} 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 transition-all duration-1000 group-hover:scale-105"
            alt="Hero"
          />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-3 opacity-10">
            <div className="border-r border-black"></div>
            <div className="border-r border-black"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}