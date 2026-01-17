import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import heroImage from "@assets/image_1768632374082.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen border-b-[20px] border-black bg-white overflow-hidden">
      {/* 12-Column Radical Grid */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="border-r border-black/5 h-full"></div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 h-screen">
        {/* Branding Block */}
        <div className="md:col-span-8 p-12 md:p-24 border-r-[1px] md:border-r-[20px] border-black flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-black text-8xl md:text-[15vw] leading-[0.75] uppercase tracking-tighter">
              Guzel<br/>Studio
            </span>
            <div className="text-right hidden md:block">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] rotate-90 origin-right inline-block translate-y-20">
                Zurich / Switzerland
              </span>
            </div>
          </div>

          <div className="max-w-2xl mt-auto">
             <h2 className="text-2xl md:text-4xl font-display font-medium leading-none uppercase mb-8">
               Radical Modernism.<br/>
               <span className="text-stroke">Bespoke Precision.</span>
             </h2>
             <div className="flex gap-4">
                <button className="swiss-button">Explore Archive</button>
                <button className="swiss-button bg-black text-white">Book Private Fitting</button>
             </div>
          </div>
        </div>

        {/* Visual Block */}
        <div className="md:col-span-4 flex flex-col">
          <div className="flex-grow bg-black relative overflow-hidden group">
            <img 
              src={heroImage} 
              alt="Editorial" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-0 left-0 p-8 text-white uppercase font-black text-5xl leading-none">
              Gen<br/>esis
            </div>
          </div>
          <div className="p-8 border-t-[20px] border-black">
            <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase">
              <span>Collection 001</span>
              <span>Available — SS26</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}