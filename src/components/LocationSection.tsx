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
        
        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: OneCoWork Space */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--brand-orange)/0.2)]">
            <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-brand-orange text-xl">🏢</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Creative Base at OneCoWork
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A bright and inspiring coworking space in the city center, filled with plants, light, and thoughtful design. Whether you're collaborating or deep in flow, OneCoWork gives you the clarity and comfort to stay focused and do your best work.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-card border border-border rounded-lg flex items-center justify-center">
                <span className="text-brand-orange text-sm">📍</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Barcelona City Center</p>
                <p className="text-muted-foreground text-xs">Easy access by metro and bus</p>
              </div>
            </div>
          </div>

          {/* Card 2: Where We Think and Build Together */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--brand-orange)/0.2)]">
            <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-brand-orange text-xl">💭</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Where We Think and Build Together
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A quiet, fully equipped space with fast Wi-Fi, big screens, and comfy chairs. Ideal for team collaboration, solo focus, or hands-on sessions. Everything you need to think clearly and build fast — without distractions.
            </p>
          </div>

          {/* Card 3: Learn and Build in Beautiful Barcelona */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--brand-orange)/0.2)]">
            <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-brand-orange text-xl">🌅</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Learn and Build in Beautiful Barcelona
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A city bursting with creative energy, Barcelona offers sun, culture, and a growing tech scene. It's the perfect home for makers who want to move fast, stay inspired, and build real solutions in a place that thrives on innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;