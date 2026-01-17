import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import images
import imgNoir from "@assets/image_1768632448516.png";
import imgSherwani from "@assets/image_1768632387917.png";
import imgCrimson from "@assets/image_1768632401640.png";
import imgSilk from "@assets/image_1768632422582.png";
import imgBridal from "@assets/image_1768632436038.png";
import imgEarth from "@assets/image_1768632360954.png";

const products = [
  {
    id: 1,
    title: "The Noir Kurta",
    price: "$450",
    image: imgNoir,
    tag: "Essential"
  },
  {
    id: 2,
    title: "Embroidered Sherwani",
    price: "$1,200",
    image: imgSherwani,
    tag: "Bespoke"
  },
  {
    id: 3,
    title: "Crimson Velvet",
    price: "$890",
    image: imgCrimson,
    tag: "Limited"
  },
  {
    id: 4,
    title: "Silk Blend Ensemble",
    price: "$650",
    image: imgSilk,
    tag: "New Arrival"
  },
  {
    id: 5,
    title: "Bridal Harmony",
    price: "Price on Request",
    image: imgBridal,
    tag: "Wedding"
  },
  {
    id: 6,
    title: "Earth Tone Classic",
    price: "$520",
    image: imgEarth,
    tag: "Essential"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight leading-none">
            Curated<br/>Selection
          </h2>
          <Button variant="link" className="text-lg uppercase underline-offset-4 decoration-1">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider">
                  {product.tag}
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-border pt-4">
                <div>
                  <h3 className="font-display text-lg uppercase mb-1 group-hover:underline decoration-1 underline-offset-4">{product.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono">Series {product.id.toString().padStart(3, '0')}</p>
                </div>
                <span className="font-medium">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}