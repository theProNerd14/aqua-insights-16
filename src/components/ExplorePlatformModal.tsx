import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Brain, Database, Leaf, Globe, Calendar } from "lucide-react";
import { ScheduleDemoModal } from "@/components/ScheduleDemoModal";
import { useNavigate } from "react-router-dom";

interface ExplorePlatformModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ExplorePlatformModal = ({ open, onOpenChange }: ExplorePlatformModalProps) => {
  const navigate = useNavigate();

  const researchLinks = [
    { 
      title: "View Research", 
      icon: BookOpen, 
      description: "Access published ocean research papers",
      path: "/research"
    },
    { 
      title: "Biodiversity Insights", 
      icon: Leaf, 
      description: "Explore species distribution and ecosystems",
      path: "/research-portal#biodiversity"
    },
    { 
      title: "AI Data Models", 
      icon: Brain, 
      description: "Advanced predictive modeling systems",
      path: "/research-portal#ai-models"
    },
    { 
      title: "Sustainability Studies", 
      icon: Globe, 
      description: "Environmental impact assessments",
      path: "/research-portal#sustainability"
    },
    { 
      title: "Data Archives", 
      icon: Database, 
      description: "Historical ocean data repository",
      path: "/research-portal#archives"
    }
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            Explore Ocean Intelligence Platform
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {researchLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(link.path)}
              className="group relative flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 text-left hover:shadow-ocean"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-ocean flex items-center justify-center">
                <link.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {link.title}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {link.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center pt-4 border-t border-border/50">
          <ScheduleDemoModal 
            trigger={
              <Button 
                size="lg" 
                className="bg-gradient-ocean hover:shadow-ocean transition-all transform hover:scale-105"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Schedule Demo
              </Button>
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};