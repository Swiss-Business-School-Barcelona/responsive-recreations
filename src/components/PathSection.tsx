const PathSection = () => {
  const steps = [
    {
      number: "1",
      title: "Understand the Problem",
      description: "Learn what product thinking really means. Discover who you're building for and what problems matter",
      icon: "🧠"
    },
    {
      number: "2", 
      title: "Define the Opportunity",
      description: "Explore the market, identify competitors, and shape a clear solution worth building",
      icon: "💡"
    },
    {
      number: "3",
      title: "Design the Right Experience", 
      description: "Turn your solution into a digital product by designing how it works and how it feels",
      icon: "✏️"
    }
  ];

  return (
    <section id="path" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-brand-orange text-sm font-bold tracking-wide uppercase">
              🚀 PATH
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Your Journey to <span className="italic font-light">App Creation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear 6-week path from first idea to a fully launched app
          </p>
        </div>
        
        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-brand-orange/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div className="text-3xl">{step.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathSection;