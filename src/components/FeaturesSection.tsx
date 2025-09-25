import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  Globe, 
  Microscope, 
  Shield, 
  TrendingUp, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor ocean conditions with live data streams and predictive modeling for informed decision-making.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access comprehensive oceanographic data from monitoring stations worldwide, all in one platform.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Microscope,
    title: "Molecular Insights",
    description: "Dive deep into biodiversity at the molecular level with advanced genomic analysis tools.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Shield,
    title: "Conservation Tools",
    description: "Protect marine ecosystems with AI-powered threat detection and conservation planning.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description: "Forecast ocean trends and ecosystem changes using machine learning algorithms.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Users,
    title: "Collaborative Research",
    description: "Connect with researchers globally to share insights and accelerate ocean science.",
    gradient: "from-accent to-primary",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Platform Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets ocean conservation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-ocean hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};