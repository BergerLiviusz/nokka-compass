import { useState, useEffect } from "react";
import { Search, Command } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

interface SearchDialogProps {
  onClose: () => void;
}

export function SearchDialog({ onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const { t } = useI18n();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 border-b pb-4">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          className="border-0 shadow-none focus-visible:ring-0"
          autoFocus
        />
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <Command className="h-3 w-3" />
          <span>K</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium text-muted-foreground">Gyors navigáció</div>
        <div className="space-y-1">
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={() => {
              window.location.href = "/research";
              onClose();
            }}
          >
            Kutatások böngészése
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={() => {
              window.location.href = "/contact";
              onClose();
            }}
          >
            Kapcsolatfelvétel
          </Button>
        </div>
      </div>
    </div>
  );
}