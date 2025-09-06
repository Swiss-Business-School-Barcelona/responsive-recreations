import React from 'react';

const LocationSection = () => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    {
      id: 0,
      icon: "🏢",
      title: "Your Creative Base at OneCoWork",
      description: "A bright and inspiring coworking space in the city center, filled with plants, light, and thoughtful design. Whether you're collaborating or deep in flow, OneCoWork gives you the clarity and comfort to stay focused and do your best work.",
      image: {
        src: "/cowork.jpeg",
        alt: "OneCoWork Barcelona coworking space"
      }
    },
    {
      id: 1,
      icon: "💭",
      title: "Where We Think and Build Together",
      description: "A quiet, fully equipped space with fast Wi-Fi, big screens, and comfy chairs. Ideal for team collaboration, solo focus, or hands-on sessions. Everything you need to think clearly and build fast — without distractions.",
      image: {
        src: "/room.jpeg",
        alt: "Collaborative workspace with modern setup"
      }
    },
    {
      id: 2,
      icon: "🌅",
      title: "Learn and Build in Beautiful Barcelona",
      description: "A city bursting with creative energy, Barcelona offers sun, culture, and a growing tech scene. It’s the perfect home for makers who want to move fast, stay inspired, and build real solutions in a place that thrives on innovation.",
      image: {
        src: "/barcelona.jpeg",
        alt: "Beautiful Barcelona cityscape"
      }
    }
  ];

  // Helper to rotate cards
  const handleCardClick = (id) => {
    if (id === activeCard) {
      // Move to the next card if you click the active one
      setActiveCard((prev) => (prev + 1) % cards.length);
    } else {
      // Bring clicked card to the front
      setActiveCard(id);
    }
  };

  return (
    <section id="location" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange text-sm font-bold tracking-wide uppercase block mb-6">
            📍 LOCATION
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-4">
            Where You'll <span className="italic font-light">Learn Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An inspiring space to learn, build, and connect with others
          </p>
        </div>

        {/* Stacked Location Cards */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative" style={{ height: isMobile ? '600px' : '500px' }}>
            {cards.map((card, index) => {
              const isActive = activeCard === card.id;

              // Determine stacking order
              const zIndex = isActive ? cards.length + 1 : cards.length - index;
              const translateY = isActive ? 0 : (index + 1) * (isMobile ? 30 : 40);
              const scale = isActive ? 1 : (isMobile ? 0.95 : 0.9);
              const opacity = isActive ? 1 : 0.8;

              return (
                <div
                  key={card.id}
                  className="absolute w-full cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    zIndex,
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    top: 0,
                    left: 0,
                  }}
                  onClick={() => handleCardClick(card.id)}
                >
                  <div
                    className={`bg-card border rounded-xl p-4 md:p-8 transition-all duration-500 relative ${
                      isActive
                        ? 'border-brand-orange/50 shadow-[0_0_30px_-5px_hsl(var(--brand-orange)/0.2)]'
                        : 'border-border hover:border-brand-orange/30 hover:shadow-lg'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                      {/* Content */}
                      <div className="space-y-4 md:space-y-6 order-2 md:order-1">
                        <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center">
                          <span className="text-brand-orange text-xl">{card.icon}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {card.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {card.description}
                        </p>
                      </div>

                       {/* Image */}
                       <div className="relative order-1 md:order-2">
                         <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                           <img 
                             src={card.image.src} 
                             alt={card.image.alt}
                             className="w-full h-full object-cover"
                           />
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;