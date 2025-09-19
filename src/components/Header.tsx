import { Button } from "@/components/ui/button";
import React from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full px-6 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border relative z-50">
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
        
        {/* Desktop Navigation */}
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
        
        {/* Desktop CTA Button */}
        <Button 
          variant="brand" 
          size="sm" 
          className="hidden md:flex"
          onClick={() => window.open('https://buildnocode.lovable.app/', '_blank')}
        >
          <img
            src="/sparkle.png"
            alt=""
            className="w-4 h-4 mr-2 object-contain"
          />
          Apply Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`h-0.5 w-6 bg-muted-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-6 bg-muted-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-muted-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-[100]">
          <nav className="flex flex-col space-y-4 p-6">
            <a 
              href="#program" 
              className="text-muted-foreground hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Program
            </a>
            <a 
              href="#path" 
              className="text-muted-foreground hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Path
            </a>
            <a 
              href="#location" 
              className="text-muted-foreground hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Location
            </a>
            <a 
              href="#pricing" 
              className="text-muted-foreground hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#team" 
              className="text-muted-foreground hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <Button 
              variant="brand" 
              size="sm" 
              className="mt-4 w-full"
              onClick={() => {
                window.open('https://buildnocode.lovable.app/', '_blank');
                setMobileMenuOpen(false);
              }}
            >
              <img
                src="/sparkle.png"
                alt=""
                className="w-4 h-4 mr-2 object-contain"
              />
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;