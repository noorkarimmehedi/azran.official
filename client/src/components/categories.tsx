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
        <section className="bg-brand-ivory border-t border-black/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {CATEGORIES.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="group relative h-[70vh] md:h-[80vh] overflow-hidden border-r border-black/5 last:border-r-0"
                    >
                        {/* Immersive Image */}
                        <motion.img
                            src={cat.image}
                            alt={cat.title}
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110 transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
                        />

                        {/* Luxury Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />

                        {/* Content Overlay */}
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

                        {/* Frame Detail */}
                        <div className="absolute inset-8 border border-white/5 pointer-events-none group-hover:inset-6 transition-all duration-1000" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
