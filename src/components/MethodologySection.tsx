export const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      title: "Understand the Problem",
      subtitle: "Research",
      description: "Explore and understand the problem & data through comprehensive analysis",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      )
    },
    {
      number: "02", 
      title: "Organize the Data",
      subtitle: "Data Strategy",
      description: "Structure and organize data for optimal accessibility and analysis",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7M4 7c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4M4 7h16"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Design the Platform", 
      subtitle: "Architecture",
      description: "Create scalable architecture and user-centered design framework",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Build a Small Prototype",
      subtitle: "Proof of Concept", 
      description: "Experiment with small prototypes to validate core concepts",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      number: "05",
      title: "Expand and Add AI Power",
      subtitle: "Intelligence Layer",
      description: "Integrate advanced AI capabilities and machine learning models",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    },
    {
      number: "06",
      title: "Deploy and Scale Up",
      subtitle: "Production",
      description: "Launch platform and scale infrastructure for real-world deployment",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      )
    },
    {
      number: "07",
      title: "Test, Validate, and Train People",
      subtitle: "Evaluation & Evolution",
      description: "Test against real-world outcomes, validate results, and train stakeholders",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-depth opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-ocean bg-clip-text text-transparent">Methodology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Our methodology merges deep ocean science with cutting-edge AI. We unify fragmented datasets, apply advanced machine learning models, 
            and generate insights that guide fisheries, biodiversity preservation, and sustainable resource management. 
            Instead of simply observing, we transform ocean data into actionable solutions that protect life below water 
            and support humanity's shared future.
          </p>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:shadow-ocean/20 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-primary">{step.icon}</div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    
                    <div className="text-sm text-primary/80 font-medium mb-3">
                      {step.subtitle}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-ocean/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🎯 The <span className="bg-gradient-ocean bg-clip-text text-transparent">R&D Angle</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              From a research perspective, our process follows: <strong>Explore</strong> → understand the problem & data. 
              <strong> Experiment</strong> → try small prototypes. <strong>Evaluate</strong> → test against real-world outcomes. 
              <strong> Evolve</strong> → refine, add more data, scale up.
            </p>
            <div className="mt-4 text-sm text-primary/80 font-medium">
              It's basically the scientific method applied to ocean intelligence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};