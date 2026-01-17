import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import BookingSection from "@/components/booking-section";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Heritage Section */}
      <section className="py-40 border-y border-foreground/5 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-foreground/5 hidden lg:block"></div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div className="flex flex-col justify-center space-y-8">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Heritage</span>
            <h2 className="text-5xl font-display leading-tight uppercase tracking-tight">
              A Legacy <br/> 
              <span className="italic text-foreground/60">of Mastery</span>
            </h2>
            <p className="text-lg text-foreground/70 font-sans font-light leading-relaxed max-w-md">
              Guzel is more than a label; it is a repository of craft. Every garment is born from a dialogue between heritage textiles and contemporary vision.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <span className="font-display text-4xl italic text-gold">01</span>
                  <h3 className="text-xl uppercase tracking-widest font-bold">The Material</h3>
               </div>
               <p className="text-sm text-foreground/60 font-sans leading-relaxed pl-14">We source only from the finest mills in Zurich and the heritage weavers of the East.</p>
            </div>
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <span className="font-display text-4xl italic text-gold">02</span>
                  <h3 className="text-xl uppercase tracking-widest font-bold">The Fitting</h3>
               </div>
               <p className="text-sm text-foreground/60 font-sans leading-relaxed pl-14">A precision-led process where the garment is sculpted to your unique form.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
      <BookingSection />
    </Layout>
  );
}