import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/ocean-hero.jpg";
export const HeroSection = () => {
  const navigate = useNavigate();
  
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ocean depths with data visualization" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/90" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <Badge className="mb-6 bg-gradient-ocean text-primary-foreground border-0 px-4 py-1">
          AI-Powered Ocean Intelligence
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-ocean bg-clip-text text-transparent">
            Blue-Insights
          </span>
          <br />
          <span className="text-foreground">
            Unified Ocean Data Platform
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Revolutionizing ocean conservation through advanced data intelligence, 
          real-time analytics, and biodiversity mapping for a sustainable future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-ocean hover:shadow-ocean transition-all transform hover:scale-105">
            Explore Platform
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => navigate('/research')}
          >
            View Research
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Documented Species</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Real-time Monitoring</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Data Points Analyzed</div>
          </div>
        </div>
      </div>

      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full h-auto">
          <path fill="hsl(var(--background))" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z" />
        </svg>
      </div>
    </section>;
};