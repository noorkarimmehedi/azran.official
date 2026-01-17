import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowDownRight, ShieldCheck, Globe, Truck, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import imgNoir from "@assets/image_1768632448516.png";
import imgSherwani from "@assets/image_1768632387917.png";
import imgCrimson from "@assets/image_1768632401640.png";
import imgSilk from "@assets/image_1768632422582.png";
import imgBridal from "@assets/image_1768632436038.png";
import imgEarth from "@assets/image_1768632360954.png";

const products = {
  "1": { id: 1, title: "Noir Kurta", price: "$450", image: imgNoir, description: "A study in absolute black. Constructed from hand-spun Swiss cotton and silk blend, featuring architectural stitching and hidden fasteners.", material: "80% Cotton, 20% Silk", origin: "Studio Zurich", care: "Professional Dry Clean Only" },
  "2": { id: 2, title: "Sherwani", price: "$1,200", image: imgSherwani, description: "Exquisite hand-embroidery meets radical modern silhouettes. A masterpiece of time and precision.", material: "Premium Raw Silk", origin: "Artisan Workshop", care: "Specialist Care" },
  "3": { id: 3, title: "Crimson", price: "$890", image: imgCrimson, description: "Deep pigments and structured velvet. A garment designed for presence and permanence.", material: "Silk Velvet", origin: "Studio Zurich", care: "Dry Clean" },
  "4": { id: 4, title: "Silk Blend", price: "$650", image: imgSilk, description: "The intersection of comfort and luxury. Light-catching fibers woven with surgical precision.", material: "Fine Silk Blend", origin: "Studio Zurich", care: "Hand Wash" },
  "5": { id: 5, title: "Bridal", price: "Enquiry", image: imgBridal, description: "Bespoke bridal couture. A collaborative journey between client and atelier to create a legacy piece.", material: "Custom Selection", origin: "Bespoke Atelier", care: "Legacy Preservation" },
  "6": { id: 6, title: "Earth Classic", price: "$520", image: imgEarth, description: "Neutral tones derived from natural pigments. A timeless staple for the contemporary wardrobe.", material: "Linen & Wool", origin: "Studio Zurich", care: "Gentle Cycle" }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!product) return <div>Product not found</div>;

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-black">
          {/* Visual Side - Sticky on Desktop */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-black bg-neutral-50 relative">
            <div className="lg:sticky lg:top-20 overflow-hidden h-[70vh] lg:h-[calc(100vh-80px)] group">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-8 left-8">
                <Link href="/">
                  <a className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white transition-all">
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-8 md:p-16 flex-grow space-y-16">
              {/* Header */}
              <div className="space-y-6">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
                  <span>Guzel / Studio</span>
                  <span>S. {product.id.toString().padStart(3, '0')}</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-medium uppercase tracking-tighter leading-[0.85]">
                  {product.title}
                </h1>
                <p className="text-2xl font-display italic">{product.price}</p>
              </div>

              {/* Description */}
              <div className="space-y-8">
                <div className="h-[1px] w-12 bg-black"></div>
                <p className="text-sm uppercase leading-relaxed tracking-widest text-muted-foreground max-w-md">
                  {product.description}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-12 pt-8 border-t border-black/10">
                <div className="space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 block">Composition</span>
                  <span className="text-xs font-medium uppercase tracking-widest block">{product.material}</span>
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 block">Origin</span>
                  <span className="text-xs font-medium uppercase tracking-widest block">{product.origin}</span>
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 block">Care</span>
                  <span className="text-xs font-medium uppercase tracking-widest block">{product.care}</span>
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 block">Shipping</span>
                  <span className="text-xs font-medium uppercase tracking-widest block">Worldwide</span>
                </div>
              </div>

              {/* Selector Mockup */}
              <div className="pt-12 space-y-6">
                <div className="flex justify-between items-center border border-black p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Select Size</span>
                  <div className="flex gap-4 text-xs font-bold">
                    {['S', 'M', 'L', 'XL'].map(s => (
                      <span key={s} className="cursor-pointer hover:opacity-40 transition-opacity uppercase">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky/Bottom Action */}
            <div className="border-t border-black">
              <Button className="w-full h-24 rounded-none bg-black text-white text-xl uppercase font-bold tracking-[0.2em] hover:bg-neutral-900 transition-all flex items-center justify-center gap-4">
                Enquire for Bespoke <ArrowDownRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
           <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col gap-8">
              <Globe className="w-6 h-6 stroke-[1px]" />
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest block">Logistics</span>
                <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] leading-loose">Premium insured transit directly from our Zurich atelier to your residence.</p>
              </div>
           </div>
           <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col gap-8">
              <ShieldCheck className="w-6 h-6 stroke-[1px]" />
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest block">Authentication</span>
                <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] leading-loose">Each garment is issued with a unique digital certificate of authenticity.</p>
              </div>
           </div>
           <div className="p-12 md:p-16 flex flex-col gap-8">
              <Truck className="w-6 h-6 stroke-[1px]" />
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest block">Process</span>
                <p className="text-[10px] opacity-40 uppercase tracking-[0.2em] leading-loose">Every piece is hand-finished. Bespoke adjustments require 14 business days.</p>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}