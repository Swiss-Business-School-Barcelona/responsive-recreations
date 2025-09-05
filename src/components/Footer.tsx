const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo and Brand */}
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
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:justify-end">
            <a href="#program" className="text-muted-foreground hover:text-brand-orange transition-colors text-sm">
              Program
            </a>
            <a href="#path" className="text-muted-foreground hover:text-brand-orange transition-colors text-sm">
              Path
            </a>
            <a href="#location" className="text-muted-foreground hover:text-brand-orange transition-colors text-sm">
              Location
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-brand-orange transition-colors text-sm">
              Pricing
            </a>
            <a href="#team" className="text-muted-foreground hover:text-brand-orange transition-colors text-sm">
              Team
            </a>
          </nav>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 BuildNoCode. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-secondary border border-border rounded-lg flex items-center justify-center hover:border-brand-orange/50 hover:bg-brand-orange/10 transition-colors cursor-pointer">
              <span className="text-muted-foreground text-xs">📧</span>
            </div>
            <div className="w-8 h-8 bg-secondary border border-border rounded-lg flex items-center justify-center hover:border-brand-orange/50 hover:bg-brand-orange/10 transition-colors cursor-pointer">
              <span className="text-muted-foreground text-xs">💬</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;