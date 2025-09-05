const ProgramSection = () => {
  const features = [
    {
      title: "Nail Your Idea",
      description: "Use Design Thinking to uncover real problems before you build anything.",
      icon: "🎯"
    },
    {
      title: "Build It Right", 
      description: "Build smarter with modern tools and AI-powered development techniques.",
      icon: "📊"
    },
    {
      title: "Launch to Win",
      description: "Launch with clarity and impact so your app gets noticed from day one.",
      icon: "🚀"
    }
  ];

  return (
    <section id="program" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-brand-orange text-sm font-bold tracking-wide uppercase">
              🔥 PROGRAM
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            What You'll Actually <span className="italic font-light">Learn?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to launch with real tools, expert guidance, and no fluff
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--brand-orange)/0.2)]"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;