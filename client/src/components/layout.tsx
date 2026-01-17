import { Link, useLocation } from "wouter";
import { ArrowUpRight, Instagram, Twitter, Mail, Menu, Globe, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-black bg-white/90 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-12 h-16 md:h-20">
          <div className="col-span-1 md:col-span-3 border-r border-black flex items-center px-6 md:px-12">
            <Link href="/">
              <a className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter">Guzel</a>
            </Link>
          </div>
          
          <div className="hidden md:flex col-span-6 items-center justify-center gap-12 text-[10px] uppercase tracking-[0.2em] font-bold">
            <Link href="/collection"><a className="hover:opacity-40 transition-opacity">Collection</a></Link>
            <Link href="/atelier"><a className="hover:opacity-40 transition-opacity">Atelier</a></Link>
            <Link href="/journal"><a className="hover:opacity-40 transition-opacity">Journal</a></Link>
          </div>

          <div className="hidden md:flex col-span-3 border-l border-black items-center justify-center p-0">
            <Button variant="ghost" className="w-full h-full rounded-none text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-all">
              Book Fitting
            </Button>
          </div>

          <div className="md:hidden flex items-center justify-end px-6">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-none border border-black">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-white border-l border-black p-0">
                <div className="flex flex-col h-full">
                  <div className="p-8 border-b border-black flex justify-between items-center">
                    <span className="font-display font-bold text-2xl uppercase">Guzel</span>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}><ArrowUpRight className="w-6 h-6 rotate-45"/></Button>
                  </div>
                  <div className="flex-grow flex flex-col justify-center p-8 gap-8">
                    {["Collection", "Atelier", "Journal"].map((item) => (
                      <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                        <a className="text-5xl font-display font-bold uppercase hover:opacity-40 transition-all">{item}</a>
                      </Link>
                    ))}
                  </div>
                  <Button className="w-full h-24 rounded-none bg-black text-white text-xl uppercase font-bold tracking-widest">
                    Book Fitting
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content with Transition */}
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Swiss Grid Footer */}
      <footer className="border-t border-black bg-white">
        {/* Top Metadata Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black text-[9px] uppercase tracking-[0.3em] font-bold py-4 px-8 md:px-12">
          <div className="flex items-center gap-2"><Globe className="w-3 h-3 stroke-[1.5px]"/> Zurich / World</div>
          <div className="hidden md:flex items-center gap-2"><Clock className="w-3 h-3 stroke-[1.5px]"/> 14:02 CET</div>
          <div className="hidden md:flex items-center gap-2"><ShieldCheck className="w-3 h-3 stroke-[1.5px]"/> Secure Access</div>
          <div className="text-right">Studio v.26</div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
          {/* Navigation Column */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-black p-8 md:p-12 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Explore</span>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Collections</a></li>
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Bespoke Fitting</a></li>
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Fabric Archive</a></li>
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Journal</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-black p-8 md:p-12 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Contact</span>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Studio Zurich</a></li>
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Client Care</a></li>
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Press Inquiries</a></li>
              <li><a href="#" className="hover:opacity-40 transition-opacity block">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter / Statement Column */}
          <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-8">Newsletter</span>
            <div className="flex border-b border-black pb-4 mb-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none flex-grow text-[10px] uppercase tracking-widest font-bold placeholder:opacity-30"
              />
              <button className="text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-40 transition-opacity">Subscribe</button>
            </div>
            <p className="text-[10px] uppercase tracking-widest leading-relaxed text-muted-foreground max-w-sm">
              Sign up to receive private invitations to upcoming collections and studio events in Zurich.
            </p>
          </div>
        </div>

        {/* Social Bar */}
        <div className="grid grid-cols-3 border-b border-black">
          <div className="border-r border-black p-6 flex justify-center items-center hover:bg-neutral-50 transition-colors cursor-pointer group">
            <Instagram className="w-5 h-5 stroke-[1.5px] group-hover:scale-110 transition-transform"/>
          </div>
          <div className="border-r border-black p-6 flex justify-center items-center hover:bg-neutral-50 transition-colors cursor-pointer group">
            <Twitter className="w-5 h-5 stroke-[1.5px] group-hover:scale-110 transition-transform"/>
          </div>
          <div className="p-6 flex justify-center items-center hover:bg-neutral-50 transition-colors cursor-pointer group">
            <Mail className="w-5 h-5 stroke-[1.5px] group-hover:scale-110 transition-transform"/>
          </div>
        </div>

        {/* Massive Logo Section */}
        <div className="p-8 md:p-12 border-b border-black overflow-hidden relative group cursor-default">
          <div className="absolute inset-0 bg-neutral-50 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
          <h2 className="text-[22vw] font-display font-bold uppercase tracking-tighter leading-[0.7] text-center relative z-10 transition-all duration-700 group-hover:tracking-tight">
            Guzel
          </h2>
        </div>

        {/* Legal Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:px-12 md:py-8 gap-8 items-end">
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-30 leading-relaxed">
            All images and content are property of Guzel Studio AG.<br/>
            Registration No. CH-100.3.000.000-1.
          </div>
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-30 md:text-right">
            © 2026 Designed in Zurich / Proudly Made in Switzerland
          </div>
        </div>
      </footer>
    </div>
  );
}