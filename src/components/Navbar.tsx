import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/NOKKA_Logo.svg" 
            alt="NOKKA" 
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-3 py-2 rounded-md border border-transparent transition-all duration-300 hover:border-nokka-green hover:bg-nokka-green/10 hover:shadow-sm focus:outline-offset-2 focus:outline-2 focus:outline-nokka-mint",
                isActive(item.href) 
                  ? "text-primary font-semibold border-nokka-green bg-nokka-green/10" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          {/* Publikációk Button with Gradient Animation */}
          <Link to="/publikaciok">
            <Button 
              variant="ghost" 
              size="sm" 
              className="group relative overflow-hidden text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nokka-green via-nokka-mint to-nokka-green bg-[length:200%_100%] opacity-0 group-hover:opacity-20 animate-[gradient_2s_ease-in-out_infinite] transition-opacity"></div>
              <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-nokka-green via-nokka-mint to-nokka-green bg-[length:200%_100%] rounded-md opacity-0 group-hover:opacity-100 animate-[gradient_2s_ease-in-out_infinite] transition-all duration-500 ease-in-out [background-clip:padding-box,border-box] [background-origin:border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:xor]"></div>
              <div className="relative flex items-center">
                <Search className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Publikációk</span>
              </div>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menü</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      isActive(item.href) 
                        ? "text-primary" 
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}