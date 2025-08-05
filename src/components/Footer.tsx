import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About NOKKA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Rólunk</h3>
            <p className="text-sm text-muted-foreground">
              A NOKKA egy magyarországi kutatói közösség és innovációs műhely, 
              amely közgazdasági kutatásokkal, tanácsadással és oktatással foglalkozik.
            </p>
            <div className="flex items-center space-x-2">
              <img 
                src="/NOKKA_Logo_transparent.png" 
                alt="NOKKA" 
                className="h-6 w-auto"
              />
            </div>
          </div>

          {/* Research & Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kutatás és oktatás</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link 
                to="/research" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Kutatási könyvtár
              </Link>
              <Link 
                to="/education" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Oktatási programok
              </Link>
              <Link 
                to="/consulting" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Tanácsadás
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kapcsolat</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a 
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{siteConfig.links.email}</span>
              </a>
              <a 
                href={siteConfig.links.linkedin}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} NOKKA. Minden jog fenntartva.
            </p>
            <p className="text-sm text-muted-foreground">
              Nemzetközi Oktatási és Kutatási Központ Alapítvány
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}