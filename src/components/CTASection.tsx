import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScheduleDemoModal } from "@/components/ScheduleDemoModal";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-ocean opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Future of Ocean Conservation
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Together, we can build a future where technology and sustainability work hand in hand 
            to safeguard our oceans for generations to come.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-ocean hover:shadow-ocean transition-all transform hover:scale-105 group"
              onClick={() => navigate('/research-portal')}
            >
              Start Your Research
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <ScheduleDemoModal 
              trigger={
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  Schedule Demo
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};