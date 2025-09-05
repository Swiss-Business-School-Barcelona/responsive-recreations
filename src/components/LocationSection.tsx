const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-brand-orange text-sm font-bold tracking-wide uppercase">
              📍 LOCATION
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-4">
            Where You'll <span className="italic font-light">Learn Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An inspiring space to learn, build, and connect with others
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-brand-orange mb-4">
              Your Creative Base at OneCoWork
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A bright and inspiring coworking space in the city center, filled with plants, light, and thoughtful design. Whether you're collaborating or deep in flow, OneCoWork gives you the clarity and comfort to stay focused and do your best work.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center">
                <span className="text-brand-orange">📍</span>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground">Barcelona City Center</p>
                <p className="text-muted-foreground">Easy access by metro and bus</p>
              </div>
            </div>
          </div>
          
          {/* Placeholder for coworking space image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-400/20 via-green-400/20 to-yellow-400/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">🏢</div>
                  <p className="text-lg font-medium">OneCoWork Barcelona</p>
                  <p className="text-sm">Modern Coworking Space</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements for ambiance */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-orange rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400/40 rounded-full opacity-60 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;