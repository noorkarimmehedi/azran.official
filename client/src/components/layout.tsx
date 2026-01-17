import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-display font-bold tracking-tighter uppercase z-50 relative">
              Guzel
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
            <Link href="/collection"><a className="hover:opacity-60 transition-opacity uppercase">Collection</a></Link>
            <Link href="/atelier"><a className="hover:opacity-60 transition-opacity uppercase">Atelier</a></Link>
            <Link href="/about"><a className="hover:opacity-60 transition-opacity uppercase">Journal</a></Link>
            <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background uppercase text-xs px-6">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-background border-l border-border p-0">
                <div className="flex flex-col h-full p-8 justify-center gap-8">
                  <Link href="/collection" onClick={() => setIsOpen(false)}>
                    <a className="text-4xl font-display font-bold uppercase hover:text-muted-foreground transition-colors">Collection</a>
                  </Link>
                  <Link href="/atelier" onClick={() => setIsOpen(false)}>
                    <a className="text-4xl font-display font-bold uppercase hover:text-muted-foreground transition-colors">Atelier</a>
                  </Link>
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    <a className="text-4xl font-display font-bold uppercase hover:text-muted-foreground transition-colors">Journal</a>
                  </Link>
                  <Button className="w-full rounded-none h-14 text-lg uppercase bg-foreground text-background mt-8">
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

      {/* Footer */}
      <footer className="border-t border-border py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg uppercase">Guzel Studio</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Redefining luxury through Swiss precision and timeless aesthetics.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Collection</a></li>
                <li><a href="#" className="hover:underline">Atelier</a></li>
                <li><a href="#" className="hover:underline">Journal</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>info@guzelstudio.com</li>
                <li>+41 22 555 0199</li>
                <li>Zurich, Switzerland</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Social</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>&copy; 2026 Guzel Studio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with Swiss Precision</p>
          </div>
        </div>
      </footer>
    </div>
  );
}