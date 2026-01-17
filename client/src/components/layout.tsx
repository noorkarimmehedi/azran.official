import { Link } from "wouter";
import { ArrowUpRight, Instagram, Twitter, Mail, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-black bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
          <div className="md:col-span-6 p-8 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between gap-12">
            <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">Guzel Studio</h2>
            <div className="flex gap-8">
               <Instagram className="w-4 h-4 cursor-pointer hover:opacity-40 transition-opacity"/>
               <Twitter className="w-4 h-4 cursor-pointer hover:opacity-40 transition-opacity"/>
               <Mail className="w-4 h-4 cursor-pointer hover:opacity-40 transition-opacity"/>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 h-full">
            <div className="p-8 md:p-16 border-r border-black flex flex-col justify-between hover:bg-neutral-50 transition-colors cursor-pointer group">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Explore</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-display font-medium uppercase">Archive</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"/>
              </div>
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-between hover:bg-neutral-50 transition-colors cursor-pointer group">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Process</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-display font-medium uppercase">Craft</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"/>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-16 gap-8 items-end">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 leading-relaxed">
            Copyright © 2026 Guzel Studio AG.<br/>
            All Rights Reserved.
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 md:text-right">
            Zurich — Switzerland
          </div>
        </div>
      </footer>
    </div>
  );
}