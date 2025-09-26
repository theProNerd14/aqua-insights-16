import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Database, Brain, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export const IntelligentDataTheory = () => {
  const [dataCount, setDataCount] = useState(0);
  const [speciesCount, setSpeciesCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [nations, setNations] = useState(0);

  useEffect(() => {
    // Animated counters
    const dataInterval = setInterval(() => {
      setDataCount(prev => prev < 1500000 ? prev + 50000 : 1500000);
    }, 50);
    
    const speciesInterval = setInterval(() => {
      setSpeciesCount(prev => prev < 500 ? prev + 10 : 500);
    }, 50);
    
    const accuracyInterval = setInterval(() => {
      setAccuracy(prev => prev < 94 ? prev + 2 : 94);
    }, 50);
    
    const nationsInterval = setInterval(() => {
      setNations(prev => prev < 18 ? prev + 1 : 18);
    }, 100);

    return () => {
      clearInterval(dataInterval);
      clearInterval(speciesInterval);
      clearInterval(accuracyInterval);
      clearInterval(nationsInterval);
    };
  }, []);

  const insights = [
    {
      icon: Database,
      title: "Data Points",
      value: dataCount.toLocaleString(),
      suffix: "+",
      description: "Ocean biodiversity datasets",
      color: "text-blue-500"
    },
    {
      icon: Activity,
      title: "Species Tracked",
      value: speciesCount.toLocaleString(),
      suffix: "+",
      description: "Globally monitored species",
      color: "text-green-500"
    },
    {
      icon: Brain,
      title: "AI Accuracy",
      value: accuracy.toString(),
      suffix: "%",
      description: "Predictive model precision",
      color: "text-purple-500"
    },
    {
      icon: Globe,
      title: "Nations",
      value: nations.toString(),
      description: "Coastal nations using our data",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="intelligent-data" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-ocean text-primary-foreground border-0">
            2025 Oceanic Intelligence Update
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              Intelligent Data Theory
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In 2025, ocean biodiversity datasets surpassed 1.5 million data points, 
            covering over 500+ species globally. AI-based predictive models achieved 
            94% accuracy in forecasting fish migration patterns and ecosystem changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-ocean transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 ${insight.color}`}>
                  <insight.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2 flex items-baseline">
                  {insight.value}
                  {insight.suffix && <span className="text-xl ml-1">{insight.suffix}</span>}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Global Impact
              </h3>
              <p className="text-muted-foreground mb-4">
                This data is now powering sustainable resource management policies 
                across 18 coastal nations, revolutionizing how we understand and 
                protect our oceans.
              </p>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">
                  23% reduction in overfishing incidents
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Breakthrough Technologies
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-ocean mt-2" />
                  <span className="text-muted-foreground">
                    Neural network models for ecosystem health prediction
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-ocean mt-2" />
                  <span className="text-muted-foreground">
                    Satellite-AI integration for real-time monitoring
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-ocean mt-2" />
                  <span className="text-muted-foreground">
                    Quantum computing for climate modeling
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};