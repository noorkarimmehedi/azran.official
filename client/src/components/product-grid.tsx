import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import { useLocation } from "wouter";

// Import images
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
  const [, setLocation] = useLocation();

  return (
    <section className="bg-white">
      {/* Minimal Grid Header */}
      <div className="border-b border-black grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 p-8 md:p-16 border-b md:border-b-0 md:border-r border-black">
          <h2 className="text-5xl md:text-7xl font-display font-medium uppercase tracking-tighter">Selected Works</h2>
        </div>
        <div className="md:col-span-4 p-8 md:p-16 flex items-end justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Archive 2026</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Vol. 01</span>
        </div>
      </div>

      {/* Clean Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <div 
            key={p.id} 
            onClick={() => setLocation(`/product/${p.id}`)}
            className={`group border-black p-8 flex flex-col transition-colors duration-500 hover:bg-neutral-50 border-b cursor-pointer ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i % 2 !== 1 ? 'md:border-r lg:border-r-0' : ''}`}
          >
             <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] uppercase tracking-widest font-bold">Item {p.id.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.price}</span>
             </div>
             
             <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-neutral-100">
               <img src={p.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={p.title}/>
             </div>

             <h3 className="text-2xl font-display font-medium uppercase tracking-tight mt-auto">
               {p.title}
             </h3>
          </div>
        ))}
      </div>
    </section>
  );
}