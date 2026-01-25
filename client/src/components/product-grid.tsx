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
  { id: 1, title: "Noir Kurta", price: "BDT 45,000", image: imgNoir },
  { id: 2, title: "Sherwani", price: "BDT 120,000", image: imgSherwani },
  { id: 3, title: "Crimson", price: "BDT 89,000", image: imgCrimson },
  { id: 4, title: "Silk Blend", price: "BDT 65,000", image: imgSilk },
  { id: 5, title: "Bridal", price: "Enquiry", image: imgBridal },
  { id: 6, title: "Earth Classic", price: "BDT 52,000", image: imgEarth }
];

export default function ProductGrid() {
  const [, setLocation] = useLocation();

  return (
    <section className="bg-brand-ivory py-24 px-0 md:px-16">
      {/* Grid Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-8 md:px-0">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-brand-gold mb-4 block">Archive 2026</span>
          <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight">Selected <span className="italic">Works</span></h2>
        </div>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
          <span>Vol. 01</span>
          <span>Studio Collection</span>
        </div>
      </div>

      {/* Luxury Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-8 gap-y-4 md:gap-y-32">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            onClick={() => setLocation(`/product/${p.id}`)}
            className="group flex flex-col cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-4 md:mb-8 bg-neutral-100 shadow-sm">
              <img
                src={p.image}
                className="w-full h-full object-cover grayscale brightness-95 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                alt={p.title}
              />
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 text-[9px] text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Details
              </div>
            </div>

            <div className="flex justify-between items-baseline px-4 md:px-0">
              <h3 className="text-xl md:text-3xl font-display font-light uppercase tracking-tight">
                {p.title}
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">{p.price}</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium opacity-30 mt-2 px-4 md:px-0">Bespoke Couture</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}