import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import BookingSection from "@/components/booking-section";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Minimal Philosophy */}
      <section className="border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-8 md:p-16 border-b md:border-b-0 md:border-r border-black">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Core Philosophy</span>
          </div>
          <div className="md:col-span-8 p-8 md:p-16">
            <p className="text-3xl md:text-5xl font-display font-light uppercase leading-tight tracking-tight max-w-3xl">
              "We believe in <span className="italic font-normal">subtraction</span>. Removing the unnecessary until only the <span className="font-bold">essential</span> remains."
            </p>
          </div>
        </div>
      </section>

      <ProductGrid />
      <BookingSection />
    </Layout>
  );
}