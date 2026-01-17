import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import BookingSection from "@/components/booking-section";
import { ArrowDownRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="bg-background relative z-10">
        {/* Philosophy Section - Swiss Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-foreground bg-background">
          <div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Philosophy</span>
            <div className="mt-12">
               <div className="w-12 h-12 border border-foreground flex items-center justify-center font-display font-bold">01</div>
            </div>
          </div>
          <div className="md:col-span-8 p-8 md:p-16 flex flex-col justify-center">
            <p className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[0.9] tracking-tighter uppercase max-w-4xl">
              "We believe in the quiet power of <span className="text-muted-foreground">precision</span>. Every stitch is a deliberate act."
            </p>
            <div className="mt-12 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
               <span className="w-8 h-[1px] bg-foreground"></span>
               Atelier Principles
            </div>
          </div>
        </section>

        <ProductGrid />
        <BookingSection />
      </div>
    </Layout>
  );
}