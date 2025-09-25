export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-depth opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto rounded-full" />
          </div>

          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-8">
              We believe the ocean is not just a resource but a living system that sustains life on Earth. 
              Through our platform, we aim to inspire actionable insights that balance human needs with 
              ecological preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-ocean flex items-center justify-center transition-all">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-primary-foreground" fill="none">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Protect</h3>
              <p className="text-muted-foreground">
                Safeguarding marine ecosystems through data-driven conservation strategies
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-ocean flex items-center justify-center transition-all">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-primary-foreground" fill="none">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovate</h3>
              <p className="text-muted-foreground">
                Pioneering advanced analytics and AI for ocean intelligence
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-ocean flex items-center justify-center transition-all">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-primary-foreground" fill="none">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Unite</h3>
              <p className="text-muted-foreground">
                Bringing together governments, researchers, and conservationists globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};