import { Link } from "wouter";
import { Menu, X, ArrowUpRight, Instagram, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-foreground bg-background/90 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-12 h-20">
          <div className="col-span-1 md:col-span-3 border-r border-foreground flex items-center px-6">
            <Link href="/">
              <a className="text-2xl font-display font-black uppercase tracking-tighter">Guzel</a>
            </Link>
          </div>
          
          <div className="hidden md:flex col-span-6 items-center justify-center gap-12 font-bold text-[10px] uppercase tracking-[0.2em]">
            <Link href="/collection"><a className="hover:line-through transition-all">Collection</a></Link>
            <Link href="/atelier"><a className="hover:line-through transition-all">Atelier</a></Link>
            <Link href="/journal"><a className="hover:line-through transition-all">Journal</a></Link>
          </div>

          <div className="hidden md:flex col-span-3 border-l border-foreground items-center justify-center p-0">
            <Button variant="ghost" className="w-full h-full rounded-none font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all">
              Book Appointment
            </Button>
          </div>

          <div className="md:hidden flex items-center justify-end px-6">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-none border border-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-background border-l border-foreground p-0">
                <div className="flex flex-col h-full">
                  <div className="p-8 border-b border-foreground flex justify-between items-center">
                    <span className="font-display font-black text-2xl uppercase">Menu</span>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}><X className="w-8 h-8"/></Button>
                  </div>
                  <div className="flex-grow flex flex-col justify-center p-8 gap-8">
                    {["Collection", "Atelier", "Journal"].map((item) => (
                      <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                        <a className="text-6xl font-display font-black uppercase hover:line-through transition-all">{item}</a>
                      </Link>
                    ))}
                  </div>
                  <Button className="w-full h-24 rounded-none bg-foreground text-background text-xl uppercase font-bold tracking-widest">
                    Book Appointment
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

      {/* Footer - Extreme Swiss Grid */}
      <footer className="border-t border-foreground bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-foreground">
          {/* Logo & Info Section */}
          <div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-foreground flex flex-col justify-between gap-12">
            <h2 className="text-6xl font-display font-black uppercase leading-none">Guzel<br/>Studio</h2>
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-loose">
                Established 2026. Zurich, Switzerland.<br/>
                Modernist Couture for the Global Elite.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all cursor-pointer">
                   <Instagram className="w-4 h-4"/>
                 </div>
                 <div className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all cursor-pointer">
                   <Twitter className="w-4 h-4"/>
                 </div>
                 <div className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all cursor-pointer">
                   <Mail className="w-4 h-4"/>
                 </div>
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full">
            <div className="p-8 md:p-12 border-b sm:border-b-0 sm:border-r border-foreground flex flex-col justify-between group cursor-pointer hover:bg-foreground hover:text-background transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">Browse</span>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-display font-bold uppercase">Archive</span>
                <ArrowUpRight className="w-8 h-8"/>
              </div>
            </div>
            
            <div className="p-8 md:p-12 border-b sm:border-b-0 lg:border-r border-foreground flex flex-col justify-between group cursor-pointer hover:bg-foreground hover:text-background transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">Process</span>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-display font-bold uppercase">Craft</span>
                <ArrowUpRight className="w-8 h-8"/>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-between group cursor-pointer hover:bg-foreground hover:text-background transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">Legal</span>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-display font-bold uppercase">Terms</span>
                <ArrowUpRight className="w-8 h-8"/>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-12 gap-8 items-end">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed">
            All designs and patterns are intellectual property<br/>of Guzel Studio AG. © 2026.
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest">Time: 14:22 CET</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Status: Fully Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}