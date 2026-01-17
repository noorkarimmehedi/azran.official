import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import BookingSection from "@/components/booking-section";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Radical Philosophy Section */}
      <section className="bg-black text-white py-40 overflow-hidden relative border-b-[20px] border-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-2">
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-50 block rotate-90 origin-left translate-y-20">Art Direction</span>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-[10vw] font-black uppercase leading-[0.8] tracking-tighter mb-20">
                Precision<br/>
                <span className="text-white/20">is not</span><br/>
                Negotiable
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
                {[
                  { t: "Constructed", d: "Architectural silhouettes built from first principles." },
                  { t: "Honest", d: "Material integrity without superfluous ornament." },
                  { t: "Permanent", d: "Designed to transcend the seasonal cycle." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <span className="text-[10px] font-bold text-white/50">0{i+1} —</span>
                    <h3 className="text-2xl font-bold uppercase">{item.t}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Background Text Decor */}
        <div className="absolute top-0 right-0 text-[30vw] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase">
          Gu<br/>zel
        </div>
      </section>

      <ProductGrid />
      <BookingSection />
    </Layout>
  );
}