import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ArrowDownRight, Share2, Heart, ShieldCheck, Globe, Truck } from "lucide-react";
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

  if (!product) return <div>Product not found</div>;

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Navigation Bar */}
        <div className="border-b border-black grid grid-cols-2 md:grid-cols-12 h-16">
          <div className="col-span-1 md:col-span-3 border-r border-black flex items-center px-8">
            <Link href="/">
              <a className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 hover:opacity-40 transition-opacity">
                <ArrowLeft className="w-4 h-4" /> Back to Archive
              </a>
            </Link>
          </div>
          <div className="hidden md:flex col-span-6 border-r border-black items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Drop 001 / Series {product.id.toString().padStart(3, '0')}</span>
          </div>
          <div className="col-span-1 md:col-span-3 flex items-center justify-between px-8">
             <Share2 className="w-4 h-4 cursor-pointer hover:opacity-40" />
             <Heart className="w-4 h-4 cursor-pointer hover:opacity-40" />
          </div>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-144px)] border-b border-black">
          {/* Visual Column */}
          <div className="md:col-span-7 border-r border-black relative bg-neutral-50 overflow-hidden group">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-1000"
            />
            {/* Swiss Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none grid grid-cols-3 opacity-10">
              <div className="border-r border-black"></div>
              <div className="border-r border-black"></div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="p-8 md:p-16 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Guzel / Studio</span>
                <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none">
                  {product.title}
                </h1>
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-black pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Price</span>
                  <span className="text-2xl font-display">{product.price}</span>
                </div>
                <p className="text-sm uppercase leading-loose tracking-widest text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 block">Material</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest block">{product.material}</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 block">Provenance</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest block">{product.origin}</span>
                </div>
              </div>
            </div>

            <div className="p-0 border-t border-black">
              <Button className="w-full h-24 rounded-none bg-black text-white text-xl uppercase font-bold tracking-[0.2em] hover:bg-neutral-900 transition-all flex items-center justify-center gap-4">
                Enquire for Bespoke <ArrowDownRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
           <div className="p-12 border-b md:border-b-0 md:border-r border-black flex flex-col items-center text-center gap-6">
              <Globe className="w-8 h-8 stroke-[1px]" />
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest block">Global Shipping</span>
                <p className="text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">Secured courier transit from Zurich to your location.</p>
              </div>
           </div>
           <div className="p-12 border-b md:border-b-0 md:border-r border-black flex flex-col items-center text-center gap-6">
              <ShieldCheck className="w-8 h-8 stroke-[1px]" />
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest block">Studio Guarantee</span>
                <p className="text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">Lifetime structural support for every bespoke garment.</p>
              </div>
           </div>
           <div className="p-12 flex flex-col items-center text-center gap-6">
              <Truck className="w-8 h-8 stroke-[1px]" />
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest block">Bespoke Lead Time</span>
                <p className="text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">Estimated 4-8 weeks for personalized construction.</p>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}