import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ArrowDownRight, Ruler, MapPin, Calendar } from "lucide-react";
import studioImage from "@assets/image_1768632360954.png";
import BookingForm from "./booking-form";
import { motion } from "framer-motion";

export default function BookingSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-brand-ivory pt-32 pb-48 md:pt-48 md:pb-64 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative">
        {/* Editorial Layout: Overlapping Elements */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">

          {/* Background Text: Large & Faded */}
          <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] z-0">
            <h2 className="text-[30vw] font-display font-light uppercase tracking-tighter leading-none -ml-20">
              ATELIER
            </h2>
          </div>

          {/* Left Column: The Image (Editorial Style) */}
          <div className="md:col-span-7 relative z-10 mb-24 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.1)]"
            >
              <img
                src={studioImage}
                alt="Studio Atmosphere"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-110 transition-transform duration-[3s] hover:scale-110"
              />
              {/* Gold Border Detail */}
              <div className="absolute inset-4 border border-brand-gold/20 pointer-events-none" />

              {/* Overlay Label */}
              <div className="absolute bottom-12 -right-8 md:-right-16 bg-black text-white px-10 py-6 hidden md:block">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Studio Archive</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dramatic Text Overlay */}
          <div className="md:col-span-6 md:-ml-32 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-brand-ivory/95 backdrop-blur-xl p-6 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-black/5"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium text-brand-gold mb-10 block">
                The Bespoke Experience
              </span>

              <h2 className="text-4xl md:text-8xl font-display font-light uppercase leading-[0.8] tracking-tight text-black mb-12 break-words">
                Private<br />
                <span className="italic block mt-4">Consultation</span>
              </h2>

              <div className="w-20 h-px bg-brand-gold mb-12" />

              <p className="text-sm md:text-base uppercase leading-loose tracking-[0.15em] text-black/60 mb-16 max-w-sm">
                A journey into the soul of craftsmanship. We welcome you for a private fitting at our Gulshan studio or via a dedicated digital atelier.
              </p>

              {/* Minimalist Details */}
              <div className="space-y-6 mb-16">
                {[
                  { label: "Master Silhouette Analysis", icon: Ruler },
                  { label: "Exclusive SS26 Fabric Selection", icon: Calendar }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-black/80">
                    <item.icon className="w-3 h-3 text-brand-gold" />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Editorial CTA */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="group relative flex items-center gap-6 text-[10px] uppercase tracking-[0.5em] font-bold text-black transition-all hover:text-brand-gold">
                    <span className="relative">
                      Request a Fitting
                      <span className="absolute -bottom-2 left-0 w-full h-px bg-black group-hover:bg-brand-gold transition-colors" />
                    </span>
                    <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] rounded-none border-none bg-brand-ivory p-0 overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.2)]">
                  <div className="p-10 md:p-16">
                    <DialogHeader className="mb-16 text-center">
                      <DialogTitle className="font-display font-light uppercase text-5xl md:text-6xl tracking-tight">Inquiry</DialogTitle>
                      <div className="w-12 h-px bg-brand-gold mx-auto mt-6 mb-4" />
                      <DialogDescription className="text-[10px] uppercase tracking-[0.4em] font-medium text-brand-gold">
                        Our studio concierge will reach out
                      </DialogDescription>
                    </DialogHeader>
                    <BookingForm onSubmitted={() => setOpen(false)} />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>

        {/* Floating Metadata */}
        <div className="absolute bottom-0 right-16 hidden md:flex items-center gap-12 text-[9px] uppercase tracking-[0.5em] font-bold opacity-20 rotate-90 origin-right translate-y-24">
          <span>DHAKA / STUDIO</span>
          <div className="w-12 h-px bg-black" />
          <span>2026 ARCHIVE</span>
        </div>
      </div>
    </section>
  );
}