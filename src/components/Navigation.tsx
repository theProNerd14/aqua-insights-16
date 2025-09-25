import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import blueInsightsLogo from "@/assets/blue-insights-logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-lg shadow-ocean" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={blueInsightsLogo} alt="Blue-Insights" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              Blue-Insights
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Platform
            </a>
            <a href="#mission" className="text-foreground/80 hover:text-primary transition-colors">
              Mission
            </a>
            <a href="#data" className="text-foreground/80 hover:text-primary transition-colors">
              Data Insights
            </a>
            <a href="#species" className="text-foreground/80 hover:text-primary transition-colors">
              Species
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gradient-ocean hover:shadow-ocean transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};