import { motion } from "framer-motion";
import { ArrowDownRight, ShoppingBag } from "lucide-react";

const REEL_VIDEOS = [
    {
        id: 1,
        url: "/AQNhkbOEBBi0CA06rklQbu650sd1ivbQoKkWyhi9KQSb_hDdSHI7iEjpB1REk9sYaWIaZVWC6jJpiGWYD4xDh-LeHr2AfZGlBWOiy8wl21N52Q.mp4",
        title: "Silk Taffeta Noir",
        price: "Enquire",
        category: "Bespoke Evening Gown"
    },
    {
        id: 2,
        url: "/AQP5zFP4EUQGTXa_l6hbKQjJKjqOpzSiH4NO0VMdEi8QxHLISI_K6YOKeB81c2UnjcbxqWkSrrdUjesjr0no7vX-hBfqSZzQBPoyLYnnERFkgQ.mp4",
        title: "Crimson Velvet",
        price: "Enquire",
        category: "Couture Gala Piece"
    },
    {
        id: 3,
        url: "/AQPdBUy3uo1uEpvB96NfzsXDIR-QXPFF9bMRVlkjS7nt9MLHE0wL59kQjpD9xZ-kTFIPo8tsYBnplaVvJax1FR1XEYKk2js2Yhz49j7q1Jh-ZQ.mp4",
        title: "Ivory Organza",
        price: "Enquire",
        category: "Bridal Atelier"
    }
];

export default function VideoReel() {
    return (
        <section className="bg-brand-ivory py-24 md:py-48 flex flex-col overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-left"
                >
                    <span className="text-[10px] uppercase tracking-[0.6em] font-medium text-brand-gold mb-6 block">
                        Editorial / SS26
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight text-black italic">
                        Cinema <span className="not-italic">Noir</span>
                    </h2>
                </motion.div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto snap-x snap-mandatory flex md:justify-center gap-8 no-scrollbar pb-12 max-w-[1440px] mx-auto">
                {/* Centering Spacers (Mobile Only) */}
                <div className="flex-none w-[calc(50vw-42.5vw)] md:hidden" />

                {REEL_VIDEOS.map((video, idx) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "0px -100px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex-none w-[85vw] md:w-[380px] aspect-[9/16] snap-center group"
                    >
                        {/* ... video content ... */}
                        <div className="absolute inset-0 bg-neutral-900 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)]">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-[3s] ease-out"
                            >
                                <source src={video.url} type="video/mp4" />
                            </video>
                        </div>

                        {/* Luxury Overlays */}
                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between pointer-events-none">
                            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <span className="text-[10px] text-white/60 uppercase tracking-widest bg-black/20 backdrop-blur-md px-3 py-1">
                                    Live from Atelier
                                </span>
                            </div>

                            <div className="space-y-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <motion.div
                                    className="bg-brand-ivory/80 backdrop-blur-xl p-6 shadow-2xl pointer-events-auto border-l-2 border-brand-gold"
                                >
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="font-display text-xl uppercase tracking-tighter text-black">{video.title}</h4>
                                        <span className="text-[10px] text-brand-gold font-bold">{video.price}</span>
                                    </div>
                                    <p className="text-[8px] uppercase tracking-[0.2em] text-black/40 mb-4">
                                        {video.category} / Studio v.01
                                    </p>
                                    <button className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-black hover:text-brand-gold transition-colors">
                                        <ShoppingBag className="w-3 h-3" /> Shop Piece
                                    </button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Frame Detail */}
                        <div className="absolute inset-4 border border-white/10 pointer-events-none group-hover:inset-6 transition-all duration-700" />
                    </motion.div>
                ))}

                {/* Ending Spacer (Mobile Only) */}
                <div className="flex-none w-[calc(50vw-42.5vw)] md:hidden" />
            </div>

            <div className="flex gap-4 mt-8 md:mt-16 items-center opacity-30 md:hidden">
                <div className="w-12 h-px bg-black" />
                <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Swipe to Explore</span>
                <div className="w-12 h-px bg-black" />
            </div>
        </section>
    );
}
