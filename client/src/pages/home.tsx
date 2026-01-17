import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import BookingSection from "@/components/booking-section";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="bg-background relative z-10">
        <div className="container mx-auto px-4 py-24 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Philosophy</span>
            <p className="text-2xl md:text-4xl font-display leading-tight">
              "We believe in the quiet power of precision. Every stitch is a deliberate act, every silhouette a study in form."
            </p>
          </div>
        </div>
        <ProductGrid />
        <BookingSection />
      </div>
    </Layout>
  );
}