import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
            <img 
              src="/sparkle.png" 
              alt="BuildNoCode Logo"
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="text-xl font-bold text-muted-foreground">BuildNoCode</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#program" className="text-muted-foreground hover:text-brand-orange transition-colors">
            Program
          </a>
          <a href="#path" className="text-muted-foreground hover:text-brand-orange transition-colors">
            Path
          </a>
          <a href="#location" className="text-muted-foreground hover:text-brand-orange transition-colors">
            Location
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-brand-orange transition-colors">
            Pricing
          </a>
          <a href="#team" className="text-muted-foreground hover:text-brand-orange transition-colors">
            Team
          </a>
        </nav>
        
        <Button variant="brand" size="sm" className="hidden md:flex">
          <img 
            src="/sparkle.png" 
            alt=""
            className="w-4 h-4 mr-2 object-contain"
          />
          Apply Now
        </Button>
      </div>
    </header>
  );
};

export default Header;