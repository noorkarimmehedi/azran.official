import { motion } from "framer-motion";
import { ArrowDownRight, Globe, Instagram, Mail } from "lucide-react";
import heroImage from "@assets/image_1768632374082.png";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-foreground min-h-screen bg-background overflow-hidden flex flex-col">
      {/* Top Grid Info Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-foreground text-[10px] uppercase tracking-[0.2em] font-bold py-4 px-6 gap-4">
        <div className="flex items-center gap-2"><Globe className="w-3 h-3"/> Zurich / Worldwide</div>
        <div className="hidden md:block">Atelier 01 — Genesis</div>
        <div className="hidden md:block">Bespoke Couture Studio</div>
        <div className="text-right">Est. 2026</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        {/* Main Branding Cell */}
        <div className="col-span-1 lg:col-span-8 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-foreground flex flex-col justify-between relative group">
          <div className="space-y-4">
            <span className="inline-block px-2 py-1 border border-foreground text-[10px] font-bold uppercase tracking-widest">Selected Works 26'</span>
            <h1 className="text-[18vw] lg:text-[14vw] font-display font-black leading-[0.8] tracking-tighter uppercase mb-8">
              Gu<br/>zel
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <p className="text-sm uppercase font-medium leading-relaxed max-w-xs">
              Traditional precision meets radical modernism. A study in architectural clothing.
            </p>
            <div className="flex justify-end">
              <div className="w-24 h-24 border border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500 cursor-pointer">
                <ArrowDownRight className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          {/* Decorative Grid Lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10 pointer-events-none"></div>
        </div>

        {/* Visual Content Cell */}
        <div className="col-span-1 lg:col-span-4 flex flex-col">
          <div className="flex-grow relative overflow-hidden group border-b border-foreground lg:border-b-0">
             <img 
              src={heroImage} 
              alt="Guzel Editorial" 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="p-6 bg-foreground text-background">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest">Availability</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <p className="text-xs uppercase leading-loose">
              Our Zurich studio is now accepting private commissions for the Spring/Summer cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}