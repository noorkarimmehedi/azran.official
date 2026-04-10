import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import imgCouture from "@assets/couture_category_1769348846360.png";
import imgAtelier from "@assets/atelier_category_1769348866794.png";
import imgHeritage from "@assets/heritage_category_1769348884857.png";
import imgAccessories from "@assets/accessories_category_1769348904424.png";

const CATEGORIES = [
    {
        title: "The Couture",
        subtitle: "Bespoke Evening Gowns",
        image: imgCouture,
        path: "/couture"
    },
    {
        title: "The Atelier",
        subtitle: "Modern Tailoring",
        image: imgAtelier,
        path: "/atelier"
    },
    {
        title: "The Heritage",
        subtitle: "Artisan Craftsmanship",
        image: imgHeritage,
        path: "/heritage"
    },
    {
        title: "The Accessories",
        subtitle: "Refined Accents",
        image: imgAccessories,
        path: "/accessories"
    }
];

export default function Categories() {
    return (
        <section className="bg-brand-ivory border-t border-black">

            {/* ── Header ──────────────────────────────────────────── */}
            <div className="flex items-center border-b border-black">
                <div className="flex-1 px-6 md:px-16 py-3 border-r border-black">
                    <span className="text-[9px] uppercase tracking-[0.6em] font-medium text-brand-gold">
                        Our Universe
                    </span>
                </div>
                <div className="px-6 md:px-16 py-3">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-medium text-black/30">
                        04 — Collections
                    </span>
                </div>
            </div>

            {/* Title */}
            <div className="px-6 md:px-16 py-10 md:py-20 border-b border-black">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(3.2rem,11vw,8rem)] font-display font-light uppercase tracking-tight text-black leading-[0.88]"
                >
                    <span className="font-bold">The Maison</span><br />
                    Archives
                </motion.h2>
            </div>

            {/* Description */}
            <div className="flex items-stretch border-b border-black">
                <div className="w-12 md:w-16 border-r border-black shrink-0" />
                <p className="flex-1 px-6 md:px-10 py-4 text-[9px] uppercase tracking-[0.3em] font-medium text-black/40 leading-loose max-w-md">
                    Explore our curated selection of bespoke evening wear,
                    precision tailoring, and heritage craftsmanship.
                </p>
            </div>

            {/* ── Mobile: Swiss editorial stack ───────────────────── */}
            <div className="md:hidden">
                {CATEGORIES.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.08 }}
                        className="border-b border-black group"
                    >
                        {/* Number + subtitle header row */}
                        <div className="flex items-end justify-between px-6 pt-6 pb-0">
                            <span className="text-[4.5rem] font-display font-light leading-none text-black/[0.07] select-none">
                                0{idx + 1}
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-gold pb-2">
                                {cat.subtitle}
                            </span>
                        </div>

                        {/* Ruled title bar */}
                        <div className="flex items-center gap-4 px-6 pb-4">
                            <h3 className="text-[1.35rem] font-display font-light uppercase tracking-tight text-black">
                                {cat.title}
                            </h3>
                            <div className="h-px flex-1 bg-black/15" />
                        </div>

                        {/* Full-width image — landscape */}
                        <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-all duration-[2s] group-hover:grayscale-0"
                            />
                        </div>

                        {/* Bottom bar: counter + CTA */}
                        <div className="flex items-center justify-between px-6 py-4 border-t border-black">
                            <span className="text-[9px] uppercase tracking-[0.4em] font-medium text-black/30">
                                {String(idx + 1).padStart(2, "0")} / 04
                            </span>
                            <button className="flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold">
                                Explore <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Desktop: immersive 4-column grid ─────────────────── */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4">
                {CATEGORIES.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="group relative h-[80vh] overflow-hidden border-r border-black last:border-r-0"
                    >
                        <motion.img
                            src={cat.image}
                            alt={cat.title}
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110 transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold">
                                    0{idx + 1}
                                </span>
                                <div className="h-px w-8 bg-brand-gold opacity-40 group-hover:w-16 transition-all duration-700" />
                                <h3 className="text-4xl md:text-5xl font-display font-light uppercase tracking-tighter text-white">
                                    {cat.title}
                                </h3>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 mb-8">
                                    {cat.subtitle}
                                </p>
                                <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    Explore Collection <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="absolute inset-8 border border-white/5 pointer-events-none group-hover:inset-6 transition-all duration-1000" />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
