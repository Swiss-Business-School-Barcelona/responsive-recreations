import { useState } from "react";

const PathSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  
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
          <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-4">
            Your Journey to <span className="italic font-light">App Creation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear 6-week path from first idea to a fully launched app
          </p>
        </div>
        
        {/* Stacked Step Cards */}
        <div className="relative max-w-md mx-auto h-[400px]">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className={`absolute inset-0 bg-card border border-border rounded-xl p-8 cursor-pointer transition-all duration-500 transform-gpu ${
                activeCard === index 
                  ? 'z-30 scale-100 rotate-0 border-brand-orange/50 shadow-2xl' 
                  : `z-${20 - index * 5} scale-95 ${
                      index === 0 ? 'rotate-[-2deg] translate-x-[-8px]' :
                      index === 1 ? 'rotate-[1deg] translate-x-[4px]' :
                      'rotate-[-1deg] translate-x-[8px]'
                    }`
              } hover:scale-[0.98] hover:shadow-lg`}
            >
              {/* Step Number Badge */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div className="text-3xl">{step.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-muted-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Decorative gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent transition-opacity duration-300 pointer-events-none ${
                activeCard === index ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
        
        {/* Card indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCard === index ? 'bg-brand-orange' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathSection;