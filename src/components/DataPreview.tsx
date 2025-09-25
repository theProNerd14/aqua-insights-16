import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import oceanAnalytics from "@/assets/ocean-analytics.jpg";
const dataPoints = [{
  label: "Ocean Temperature",
  value: "18.5°C",
  change: "+0.3°C",
  trend: "up",
  progress: 65
}, {
  label: "pH Levels",
  value: "8.1",
  change: "-0.02",
  trend: "down",
  progress: 78
}, {
  label: "Biodiversity Index",
  value: "87.3",
  change: "+2.1",
  trend: "up",
  progress: 87
}, {
  label: "Coral Health",
  value: "73%",
  change: "Stable",
  trend: "stable",
  progress: 73
}];
export const DataPreview = () => {
  return <section id="data" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live Ocean Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time data from our global monitoring network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataPoints.map((data, index) => <Card key={index} className="p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-ocean">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{data.label}</p>
                  <p className="text-2xl font-bold">{data.value}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {data.trend === "up" && <>
                      <TrendingUp className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-secondary">{data.change}</span>
                    </>}
                  {data.trend === "down" && <>
                      <TrendingDown className="w-4 h-4 text-accent" />
                      <span className="text-sm text-accent">{data.change}</span>
                    </>}
                  {data.trend === "stable" && <>
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary">{data.change}</span>
                    </>}
                </div>
              </div>
              <Progress value={data.progress} className="h-2" />
            </Card>)}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20 bg-gradient-surface">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI-powered platform processes millions of data points daily, providing 
                  unprecedented insights into ocean health and ecosystem dynamics.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Machine learning predictions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Anomaly detection systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Pattern recognition algorithms
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <img 
                    src={oceanAnalytics} 
                    alt="Ocean analytics visualization" 
                    className="w-full h-full object-cover rounded-full shadow-glow"
                  />
                  <div className="absolute inset-0 bg-gradient-ocean/20 rounded-full animate-pulse-glow" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};