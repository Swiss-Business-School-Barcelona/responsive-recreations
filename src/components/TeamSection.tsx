const TeamSection = () => {
  const team = [
    {
      name: "Touraj Vaziri",
      role: "Instructor / Software Engineer",
      image: "/touraj.jpeg"
    },
    {
      name: "MohammadReza Khamseh", 
      role: "Product Designer",
      image: "/moha.jpeg"
    }
  ];

  return (
    <section id="team" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-brand-orange text-sm font-bold tracking-wide uppercase">
              👥 THE TEAM
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Meet the People <span className="italic font-light">Behind This</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The mentors, makers, and builders who'll guide you every step of the way
          </p>
        </div>
        
        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-brand-orange/50 transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground mb-6">{member.role}</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center hover:border-brand-orange/50 hover:bg-brand-orange/10 transition-colors cursor-pointer">
                  <span className="text-muted-foreground">💼</span>
                </div>
                <div className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center hover:border-brand-orange/50 hover:bg-brand-orange/10 transition-colors cursor-pointer">
                  <span className="text-muted-foreground">💬</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;