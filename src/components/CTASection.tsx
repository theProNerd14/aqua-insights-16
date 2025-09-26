import { Button } from "@/components/ui/button";
import { ArrowRight, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const CTASection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

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
            {user ? (
              <>
                <Button 
                  size="lg" 
                  className="bg-gradient-ocean hover:shadow-ocean transition-all transform hover:scale-105 group"
                  onClick={() => navigate('/data-collection')}
                >
                  <Database className="mr-2 w-4 h-4" />
                  Add Species Data
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => navigate('/research-portal')}
                >
                  Research Portal
                </Button>
              </>
            ) : (
              <Button 
                size="lg" 
                className="bg-gradient-ocean hover:shadow-ocean transition-all transform hover:scale-105 group"
                onClick={() => navigate('/auth')}
              >
                Sign In to Access Platform
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};