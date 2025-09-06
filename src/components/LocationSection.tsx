import React from 'react';

const LocationSection = () => {
  const [activeCard, setActiveCard] = React.useState(0);

  const cards = [
    {
      id: 0,
      icon: "🏢",
      title: "Your Creative Base at OneCoWork",
      description: "A bright and inspiring coworking space in the city center, filled with plants, light, and thoughtful design.",
      location: {
        name: "Barcelona City Center",
        details: "Easy access by metro and bus"
      },
      image: {
        emoji: "🏢",
        title: "OneCoWork Barcelona",
        subtitle: "Modern Coworking Space",
        gradient: "from-blue-400/20 via-green-400/20 to-yellow-400/20"
      }
    },
    {
      id: 1,
      icon: "💭",
      title: "Where We Think and Build Together",
      description: "A quiet, fully equipped space with fast Wi-Fi, big screens, and comfy chairs.",
      image: {
        emoji: "💭",
        title: "Collaborative Workspace",
        subtitle: "Think & Build Together",
        gradient: "from-purple-400/20 via-pink-400/20 to-orange-400/20"
      }
    },
    {
      id: 2,
      icon: "🌅",
      title: "Learn and Build in Beautiful Barcelona",
      description: "A city bursting with creative energy, Barcelona offers sun, culture, and a growing tech scene.",
      image: {
        emoji: "🌅",
        title: "Beautiful Barcelona",
        subtitle: "Creative Energy & Innovation",
        gradient: "from-yellow-400/20 via-orange-400/20 to-red-400/20"
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
          <p className="text-center text-muted-foreground text-sm mb-8">
            Click a card to bring it forward (or click the active card to rotate)
          </p>

          <div className="relative" style={{ height: '500px' }}>
            {cards.map((card, index) => {
              const isActive = activeCard === card.id;

              // Determine stacking order
              const zIndex = isActive ? cards.length + 1 : cards.length - index;
              const translateY = isActive ? 0 : (index + 1) * 40;
              const scale = isActive ? 1 : 0.9;
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
                    className={`bg-card border rounded-xl p-8 transition-all duration-500 relative ${
                      isActive
                        ? 'border-brand-orange/50 shadow-[0_0_30px_-5px_hsl(var(--brand-orange)/0.2)]'
                        : 'border-border hover:border-brand-orange/30 hover:shadow-lg'
                    }`}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div className="space-y-6">
                        <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center">
                          <span className="text-brand-orange text-xl">{card.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {card.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                        {card.location && (
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-card border border-border rounded-lg flex items-center justify-center">
                              <span className="text-brand-orange text-sm">📍</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground text-sm">{card.location.name}</p>
                              <p className="text-muted-foreground text-xs">{card.location.details}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Image */}
                      <div className="relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden shadow-2xl">
                          <div className={`w-full h-full bg-gradient-to-br ${card.image.gradient} flex items-center justify-center`}>
                            <div className="text-center text-muted-foreground">
                              <div className="text-6xl mb-4">{card.image.emoji}</div>
                              <p className="text-lg font-medium">{card.image.title}</p>
                              <p className="text-sm">{card.image.subtitle}</p>
                            </div>
                          </div>
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