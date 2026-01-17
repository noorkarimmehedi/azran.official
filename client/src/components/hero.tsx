import { ArrowDownRight } from "lucide-react";
import heroImage from "@assets/image_1768632374082.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        {/* Left: Classic Luxury Text */}
        <div className="lg:col-span-5 p-8 lg:p-24 flex flex-col justify-between border-r border-foreground/5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Maison Guzel</span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Est. 2026</span>
          </div>

          <div className="space-y-8">
            <h1 className="text-6xl lg:text-[7vw] font-display leading-[1.1] tracking-tight">
              The Art of <br/>
              <span className="italic">Timeless</span> <br/>
              Elegance
            </h1>
            <div className="w-24 h-[1px] bg-gold"></div>
            <p className="text-lg text-foreground/70 max-w-sm leading-relaxed font-sans font-light">
              Crafting bespoke narratives through rare textiles and heritage-inspired silhouettes.
            </p>
          </div>

          <div className="pt-12">
            <button className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold hover:text-gold transition-colors">
              Discover Collection
              <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all">
                <ArrowDownRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Right: Cinematic Image */}
        <div className="lg:col-span-7 relative min-h-[60vh] lg:min-h-0 luxury-gradient">
          <div className="absolute inset-8 border border-white/20 z-10 pointer-events-none"></div>
          <img 
            src={heroImage} 
            className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110"
            alt="Editorial"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Subtle Swiss Grid Overlay (Minimal) */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
            <div className="border-r border-white/10 h-full"></div>
            <div className="border-r border-white/10 h-full"></div>
            <div className="border-r border-white/10 h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}