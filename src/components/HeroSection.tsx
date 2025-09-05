import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Generate snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="snowflake"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        opacity: Math.random() * 0.7 + 0.3,
      }}
    />
  ));

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-background to-secondary/50 relative overflow-hidden">
      {/* Snowfall Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {snowflakes}
      </div>
      <div className="container mx-auto max-w-4xl text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-status-not-available rounded-full"></div>
          <span className="text-status-not-available text-sm font-medium tracking-wide uppercase">
            NOT AVAILABLE
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-muted-foreground mb-6 leading-tight">
          Build Your Dream
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-muted-foreground mb-4 leading-tight">
          App in <span className="italic font-light">6 Weeks</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          With No Programming Knowledge
        </p>
        
        {/* CTA Button */}
        <Button variant="brand" size="lg" className="mb-16 text-lg px-8 py-6">
          Apply Now - Limited Spots Available
          <span className="ml-2">↗</span>
        </Button>
        
        {/* Cohort Info */}
        <div className="text-muted-foreground">
          <p className="text-base">
            First cohort: August 21st, 2025 | OneCoWork Barcelona
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;