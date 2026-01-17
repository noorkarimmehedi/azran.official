import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import heroImage from "@assets/image_1768632374082.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col border-b border-border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 h-full flex-grow">
        {/* Left Content Area */}
        <div className="col-span-1 lg:col-span-5 p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border bg-background z-10">
          <div className="space-y-2">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Est. 2026 — Zurich</h2>
          </div>
          
          <div className="space-y-6 mt-12 lg:mt-0">
            <h1 className="text-6xl lg:text-8xl font-display font-medium leading-[0.9] tracking-tighter uppercase">
              Pure<br/>
              Form<br/>
              <span className="text-muted-foreground">Luxury</span>
            </h1>
            <p className="text-sm md:text-base max-w-sm leading-relaxed text-muted-foreground">
              Guzel merges traditional craftsmanship with Swiss modernist principles. 
              Minimalist silhouettes for the contemporary connoisseur.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 pt-8 border-t border-border w-full flex justify-between items-end">
             <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest mb-1">Collection</span>
                <span className="font-display text-xl">001 / Genesis</span>
             </div>
             <ArrowDownRight className="w-8 h-8 font-light" />
          </div>
        </div>

        {/* Right Image Area */}
        <div className="col-span-1 lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden group">
           <img 
            src={heroImage} 
            alt="Guzel Editorial" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
           />
           
           {/* Grid Overlay Effect */}
           <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20">
             <div className="border-r border-white/30 h-full"></div>
             <div className="border-r border-white/30 h-full"></div>
             <div></div>
           </div>
        </div>
      </div>
    </section>
  );
}