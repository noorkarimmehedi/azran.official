import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";

// Import images
import imgNoir from "@assets/image_1768632448516.png";
import imgSherwani from "@assets/image_1768632387917.png";
import imgCrimson from "@assets/image_1768632401640.png";
import imgSilk from "@assets/image_1768632422582.png";
import imgBridal from "@assets/image_1768632436038.png";
import imgEarth from "@assets/image_1768632360954.png";

const products = [
  { id: 1, title: "The Noir Kurta", price: "$450", image: imgNoir, tag: "Essential" },
  { id: 2, title: "Embroidered Sherwani", price: "$1,200", image: imgSherwani, tag: "Bespoke" },
  { id: 3, title: "Crimson Velvet", price: "$890", image: imgCrimson, tag: "Limited" },
  { id: 4, title: "Silk Blend Ensemble", price: "$650", image: imgSilk, tag: "New Arrival" },
  { id: 5, title: "Bridal Harmony", price: "Price on Request", image: imgBridal, tag: "Wedding" },
  { id: 6, title: "Earth Tone Classic", price: "$520", image: imgEarth, tag: "Essential" }
];

export default function ProductGrid() {
  return (
    <section className="bg-background">
      {/* Grid Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-foreground">
        <div className="md:col-span-8 p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground">
          <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.8] tracking-tighter">
            Curated<br/>Selection
          </h2>
        </div>
        <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-between items-end bg-foreground text-background">
           <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Drop 001 / 26</span>
           <Button variant="link" className="text-background p-0 h-auto text-xl uppercase font-display font-bold hover:no-underline group">
             View All <ArrowDownRight className="inline ml-2 group-hover:rotate-45 transition-transform"/>
           </Button>
        </div>
      </div>

      {/* Product Grid - Stark Swiss Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={product.id} className={`group border-b border-foreground ${(index + 1) % 3 !== 0 ? 'lg:border-r' : ''} ${(index + 1) % 2 !== 0 ? 'md:border-r lg:border-r-0' : ''} ${index === 1 || index === 4 ? 'lg:border-r' : ''}`}>
            {/* Using a custom logic for grid borders to maintain the Swiss aesthetic */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-0 right-0 p-4 border-l border-b border-foreground bg-background text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {product.tag}
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between min-h-[160px] border-t border-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono">#{product.id.toString().padStart(3, '0')}</span>
                <span className="text-sm font-bold uppercase tracking-widest">{product.price}</span>
              </div>
              <h3 className="text-3xl font-display font-bold uppercase tracking-tighter leading-none mt-4">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}