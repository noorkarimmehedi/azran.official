import { motion } from "framer-motion";
import imgNoir from "@assets/image_1768632448516.png";
import imgSherwani from "@assets/image_1768632387917.png";
import imgCrimson from "@assets/image_1768632401640.png";
import imgSilk from "@assets/image_1768632422582.png";
import imgBridal from "@assets/image_1768632436038.png";
import imgEarth from "@assets/image_1768632360954.png";

const products = [
  { id: 1, title: "Noir Kurta", price: "$450", image: imgNoir },
  { id: 2, title: "Sherwani", price: "$1,200", image: imgSherwani },
  { id: 3, title: "Crimson", price: "$890", image: imgCrimson },
  { id: 4, title: "Silk Blend", price: "$650", image: imgSilk },
  { id: 5, title: "Bridal", price: "Enquiry", image: imgBridal },
  { id: 6, title: "Earth Classic", price: "$520", image: imgEarth }
];

export default function ProductGrid() {
  return (
    <section className="bg-white">
      {/* Massive Header */}
      <div className="border-b-[20px] border-black p-12 md:p-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <h2 className="text-[12vw] font-black uppercase leading-[0.7] tracking-tighter">
          Curated<br/>Works
        </h2>
        <div className="text-right">
          <p className="text-xs font-bold uppercase tracking-widest mb-4">Filtering by Category: All</p>
          <div className="flex gap-2 justify-end">
            {['All', 'Essential', 'Couture'].map(c => (
              <button key={c} className="px-4 py-2 border border-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Radical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-[20px] border-black">
        {products.map((p, i) => (
          <div key={p.id} className={`group relative border-black p-8 hover:bg-black hover:text-white transition-all duration-500 flex flex-col ${i % 3 !== 2 ? 'lg:border-r-[1px]' : ''} ${i % 2 !== 1 ? 'md:border-r-[1px] lg:border-r-0' : ''} ${i < 3 ? 'border-b-[1px]' : ''}`}>
             <div className="flex justify-between items-start mb-8 font-bold text-[10px] uppercase tracking-widest">
                <span>00{p.id} — Archive</span>
                <span className="group-hover:text-white/50">{p.price}</span>
             </div>
             
             <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-black/10">
               <img src={p.image} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={p.title}/>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
             </div>

             <h3 className="text-5xl font-black uppercase tracking-tighter leading-none mt-auto">
               {p.title}
             </h3>
          </div>
        ))}
      </div>
    </section>
  );
}