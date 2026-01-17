import imgNoir from "@assets/image_1768632448516.png";
import imgSherwani from "@assets/image_1768632387917.png";
import imgCrimson from "@assets/image_1768632401640.png";
import imgSilk from "@assets/image_1768632422582.png";
import imgBridal from "@assets/image_1768632436038.png";
import imgEarth from "@assets/image_1768632360954.png";

const products = [
  { id: 1, title: "The Noir Ensemble", category: "Bespoke Couture", image: imgNoir },
  { id: 2, title: "Heritage Sherwani", category: "Wedding Atelier", image: imgSherwani },
  { id: 3, title: "Velvet Crimson", category: "Limited Edition", image: imgCrimson },
  { id: 4, title: "Silk Drapery", category: "Essential Silk", image: imgSilk },
  { id: 5, title: "The Bridal Gown", category: "Bridal Suite", image: imgBridal },
  { id: 6, title: "Earth Tones", category: "Ready to Wear", image: imgEarth }
];

export default function ProductGrid() {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Curation</span>
          <h2 className="text-5xl font-display uppercase tracking-tight">The Gallery</h2>
          <div className="w-12 h-[1px] bg-gold mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-2xl shadow-black/5">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
                  alt={p.title}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{p.category}</span>
                <h3 className="text-2xl font-display tracking-tight group-hover:opacity-60 transition-opacity">{p.title}</h3>
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="text-[10px] uppercase tracking-widest font-bold border-b border-gold pb-1">Enquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}