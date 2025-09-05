import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-background to-secondary/50 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Pre-header */}
        <div className="text-muted-foreground text-sm tracking-wide uppercase mb-8 italic">
          Register now
        </div>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-4 leading-tight">
          Ready to bring your idea to life?
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-8 leading-tight">
          Let's <span className="italic font-light">Build Together</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join us for the free intro class
        </p>
        
        {/* CTA Button */}
        <Button variant="brand" size="lg" className="text-lg px-12 py-6 mb-16">
          Apply Now
          <span className="ml-2">↗</span>
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-orange/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-foreground/40 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default FinalCTA;