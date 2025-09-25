import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Search, Filter, Download, BarChart, Database, Fish, Waves, Map, Calendar, FileJson, FileText, Image, Upload, X, Eye, TrendingUp, TrendingDown, AlertTriangle, Activity, Droplet, Thermometer, Wind } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for the portal
const speciesData = [
  { id: 1, name: "Atlantic Bluefin Tuna", sciName: "Thunnus thynnus", region: "North Atlantic", status: "Endangered", population: "230,000", trend: "decreasing" },
  { id: 2, name: "Great White Shark", sciName: "Carcharodon carcharias", region: "Global", status: "Vulnerable", population: "3,500", trend: "stable" },
  { id: 3, name: "Hawksbill Sea Turtle", sciName: "Eretmochelys imbricata", region: "Tropical", status: "Critically Endangered", population: "15,000", trend: "decreasing" },
  { id: 4, name: "Blue Whale", sciName: "Balaenoptera musculus", region: "All Oceans", status: "Endangered", population: "10,000-25,000", trend: "increasing" },
  { id: 5, name: "Coral Trout", sciName: "Plectropomus leopardus", region: "Indo-Pacific", status: "Least Concern", population: "Stable", trend: "stable" },
];

const oceanographicData = [
  { id: 1, metric: "Sea Surface Temperature", value: "17.3°C", change: "+0.8°C", region: "North Atlantic", date: "2024-03" },
  { id: 2, metric: "Ocean Acidification", value: "pH 8.0", change: "-0.1", region: "Pacific", date: "2024-03" },
  { id: 3, metric: "Sea Level Rise", value: "+3.4mm/year", change: "+0.2mm", region: "Global", date: "2024-03" },
  { id: 4, metric: "Ocean Current Speed", value: "1.2 m/s", change: "-0.1 m/s", region: "Gulf Stream", date: "2024-03" },
];

export default function ResearchPortal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("all");
  const [selectedSpecies, setSelectedSpecies] = useState<any>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: "Export Started",
      description: `Exporting data as ${format.toUpperCase()}...`,
    });
  };

  const handleAIQuery = () => {
    toast({
      title: "AI Analysis Running",
      description: "Processing your query with our AI models...",
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(0);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            toast({
              title: "Upload Complete",
              description: `${file.name} has been successfully uploaded and processed.`,
            });
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleViewDetails = (species: any) => {
    setSelectedSpecies(species);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ocean opacity-10 dark:opacity-30" />
        <div className="absolute inset-0 dark:gradient-glow opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-ocean bg-clip-text text-transparent">
                AI-Powered Research Portal
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Access 500+ species datasets, oceanographic data, and AI-driven insights instantly
            </p>
          </div>
        </div>
      </section>

      {/* Search Interface */}
      <section className="py-8 bg-card/50 dark:bg-gradient-to-r dark:from-background dark:via-card/30 dark:to-background">
        <div className="container mx-auto px-6">
          <Card className="border-primary/20 dark:border-primary/30 dark:bg-card/80 dark:backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Intelligent Data Query</CardTitle>
              <CardDescription>
                Ask questions about species, biodiversity, fisheries data, or ocean trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="e.g., 'Show endangered species in Pacific Ocean' or 'Temperature trends 2020-2024'"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="dark:bg-background dark:border-primary/30"
                    />
                  </div>
                  <Button onClick={handleAIQuery} className="bg-gradient-ocean hover:shadow-ocean">
                    <Search className="w-4 h-4 mr-2" />
                    AI Search
                  </Button>
                </div>

                {/* Upload Data Button */}
                <div className="flex gap-2 mb-4">
                  <label className="flex-1">
                    <Input
                      type="file"
                      accept=".csv,.json,.xlsx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="data-upload"
                    />
                    <Button
                      variant="outline"
                      className="w-full dark:border-primary/30 dark:hover:bg-primary/20"
                      onClick={() => document.getElementById('data-upload')?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Data
                    </Button>
                  </label>
                  {isUploading && (
                    <div className="flex items-center gap-2">
                      <Progress value={uploadProgress} className="w-32" />
                      <span className="text-sm">{uploadProgress}%</span>
                    </div>
                  )}
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="dark:bg-background dark:border-primary/30">
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="pacific">Pacific Ocean</SelectItem>
                      <SelectItem value="atlantic">Atlantic Ocean</SelectItem>
                      <SelectItem value="indian">Indian Ocean</SelectItem>
                      <SelectItem value="arctic">Arctic Ocean</SelectItem>
                      <SelectItem value="southern">Southern Ocean</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="dark:bg-background dark:border-primary/30">
                      <SelectValue placeholder="Data Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="species">Species Data</SelectItem>
                      <SelectItem value="biodiversity">Biodiversity</SelectItem>
                      <SelectItem value="fisheries">Fisheries</SelectItem>
                      <SelectItem value="oceanographic">Oceanographic</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedTimePeriod} onValueChange={setSelectedTimePeriod}>
                    <SelectTrigger className="dark:bg-background dark:border-primary/30">
                      <SelectValue placeholder="Time Period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2020-2024">2020-2024</SelectItem>
                      <SelectItem value="2015-2024">2015-2024</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" className="dark:border-primary/30 dark:hover:bg-primary/20">
                    <Filter className="w-4 h-4 mr-2" />
                    Advanced Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Display Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="species" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto dark:bg-card dark:border-primary/20">
              <TabsTrigger value="species" className="dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground">
                <Fish className="w-4 h-4 mr-2" />
                Species
              </TabsTrigger>
              <TabsTrigger value="oceanographic" className="dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground">
                <Waves className="w-4 h-4 mr-2" />
                Oceanographic
              </TabsTrigger>
              <TabsTrigger value="biodiversity" className="dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground">
                <Database className="w-4 h-4 mr-2" />
                Biodiversity
              </TabsTrigger>
              <TabsTrigger value="visualize" className="dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground">
                <BarChart className="w-4 h-4 mr-2" />
                Visualize
              </TabsTrigger>
            </TabsList>

            <TabsContent value="species" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Species Database</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleExport('csv')}>
                    <FileText className="w-4 h-4 mr-2" />
                    CSV
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleExport('json')}>
                    <FileJson className="w-4 h-4 mr-2" />
                    JSON
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleExport('pdf')}>
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                {speciesData.map((species) => (
                  <Card key={species.id} className="hover:shadow-lg transition-all dark:bg-card/80 dark:border-primary/20 dark:hover:border-primary/40">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold">{species.name}</h4>
                          <p className="text-sm text-muted-foreground italic">{species.sciName}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant={species.status === "Endangered" || species.status === "Critically Endangered" ? "destructive" : species.status === "Vulnerable" ? "secondary" : "default"}>
                              {species.status}
                            </Badge>
                            <Badge variant="outline">
                              <Map className="w-3 h-3 mr-1" />
                              {species.region}
                            </Badge>
                            <Badge variant="outline">
                              Population: {species.population}
                            </Badge>
                            <Badge variant={species.trend === "decreasing" ? "destructive" : species.trend === "increasing" ? "default" : "secondary"}>
                              Trend: {species.trend}
                            </Badge>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleViewDetails(species)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="oceanographic" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Oceanographic Data</h3>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Real-time Updates
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {oceanographicData.map((data) => (
                  <Card key={data.id} className="dark:bg-card/80 dark:border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{data.metric}</CardTitle>
                      <CardDescription>{data.region} • {data.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{data.value}</span>
                        <Badge variant={data.change.startsWith('+') ? "destructive" : "default"}>
                          Change: {data.change}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="biodiversity" className="space-y-4">
              <Card className="dark:bg-card/80 dark:border-primary/20">
                <CardHeader>
                  <CardTitle>Biodiversity Insights</CardTitle>
                  <CardDescription>Comprehensive AI-generated analysis of marine ecosystem health</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Primary Health Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Activity className="w-4 h-4 mr-2" />
                          Coral Reef Health Index
                        </h4>
                        <div className="flex justify-between items-center">
                          <span>Overall Health Score: 67/100</span>
                          <Badge variant="secondary">Moderate Risk</Badge>
                        </div>
                        <Progress value={67} className="mt-2" />
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Fish className="w-4 h-4 mr-2" />
                          Fish Stock Assessment
                        </h4>
                        <div className="flex justify-between items-center">
                          <span>Biomass Index: 78/100</span>
                          <Badge variant="default">Sustainable</Badge>
                        </div>
                        <Progress value={78} className="mt-2" />
                      </div>
                    </div>

                    {/* Diversity Metrics */}
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-3">Species Diversity Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Simpson's Index</span>
                          <p className="font-semibold">0.87</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Shannon-Weaver</span>
                          <p className="font-semibold">3.42</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Evenness Index</span>
                          <p className="font-semibold">0.72</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Species Richness</span>
                          <p className="font-semibold">486</p>
                        </div>
                      </div>
                    </div>

                    {/* Environmental Parameters */}
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-3">Environmental Parameters</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Thermometer className="w-4 h-4 text-orange-500" />
                          <div>
                            <span className="text-sm text-muted-foreground">Water Temp</span>
                            <p className="font-semibold">24.5°C</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplet className="w-4 h-4 text-blue-500" />
                          <div>
                            <span className="text-sm text-muted-foreground">pH Level</span>
                            <p className="font-semibold">8.1</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wind className="w-4 h-4 text-cyan-500" />
                          <div>
                            <span className="text-sm text-muted-foreground">Dissolved O₂</span>
                            <p className="font-semibold">7.2 mg/L</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Waves className="w-4 h-4 text-indigo-500" />
                          <div>
                            <span className="text-sm text-muted-foreground">Salinity</span>
                            <p className="font-semibold">35 PSU</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-green-500" />
                          <div>
                            <span className="text-sm text-muted-foreground">Turbidity</span>
                            <p className="font-semibold">2.3 NTU</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <div>
                            <span className="text-sm text-muted-foreground">Pollution Index</span>
                            <p className="font-semibold">Low</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ecosystem Indicators */}
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-3">Ecosystem Health Indicators</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Primary Productivity</span>
                            <span className="text-sm font-semibold">82%</span>
                          </div>
                          <Progress value={82} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Trophic Balance</span>
                            <span className="text-sm font-semibold">71%</span>
                          </div>
                          <Progress value={71} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Habitat Quality</span>
                            <span className="text-sm font-semibold">68%</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Species Resilience</span>
                            <span className="text-sm font-semibold">75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                      </div>
                    </div>

                    {/* Threats Assessment */}
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-3">Current Threats Assessment</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Badge variant="destructive" className="justify-start p-2">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Ocean Acidification: High
                        </Badge>
                        <Badge variant="secondary" className="justify-start p-2">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Overfishing: Moderate
                        </Badge>
                        <Badge variant="outline" className="justify-start p-2">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Plastic Pollution: Low
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="visualize" className="space-y-4">
              <Card className="dark:bg-card/80 dark:border-primary/20">
                <CardHeader>
                  <CardTitle>Data Visualization Tools</CardTitle>
                  <CardDescription>Generate interactive charts and maps from your data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-24 flex flex-col dark:hover:bg-primary/20">
                      <BarChart className="w-8 h-8 mb-2" />
                      Generate Charts
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col dark:hover:bg-primary/20">
                      <Map className="w-8 h-8 mb-2" />
                      Create Maps
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col dark:hover:bg-primary/20">
                      <Image className="w-8 h-8 mb-2" />
                      Export Visuals
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Species Details Modal */}
      <Dialog open={!!selectedSpecies} onOpenChange={() => setSelectedSpecies(null)}>
        <DialogContent className="max-w-2xl dark:bg-card dark:border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedSpecies?.name}
            </DialogTitle>
            <DialogDescription className="italic text-lg">
              {selectedSpecies?.sciName}
            </DialogDescription>
          </DialogHeader>
          
          {selectedSpecies && (
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <Label className="text-sm text-muted-foreground">Conservation Status</Label>
                  <p className="font-semibold mt-1">
                    <Badge variant={selectedSpecies.status === "Endangered" || selectedSpecies.status === "Critically Endangered" ? "destructive" : selectedSpecies.status === "Vulnerable" ? "secondary" : "default"}>
                      {selectedSpecies.status}
                    </Badge>
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <Label className="text-sm text-muted-foreground">Population</Label>
                  <p className="font-semibold mt-1">{selectedSpecies.population}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <Label className="text-sm text-muted-foreground">Region</Label>
                  <p className="font-semibold mt-1">{selectedSpecies.region}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <Label className="text-sm text-muted-foreground">Population Trend</Label>
                  <p className="font-semibold mt-1 flex items-center">
                    {selectedSpecies.trend === "increasing" && <TrendingUp className="w-4 h-4 mr-1 text-green-500" />}
                    {selectedSpecies.trend === "decreasing" && <TrendingDown className="w-4 h-4 mr-1 text-red-500" />}
                    {selectedSpecies.trend === "stable" && <Activity className="w-4 h-4 mr-1 text-blue-500" />}
                    {selectedSpecies.trend}
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <Label className="text-sm text-muted-foreground mb-2 block">Habitat Information</Label>
                <p className="text-sm">
                  This species is primarily found in the {selectedSpecies.region} region. 
                  The habitat ranges from coastal waters to deep ocean environments, depending on the life stage and seasonal patterns.
                </p>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <Label className="text-sm text-muted-foreground mb-2 block">Threats & Conservation</Label>
                <p className="text-sm">
                  Major threats include climate change, ocean acidification, overfishing, and habitat destruction. 
                  Conservation efforts are focused on establishing marine protected areas and implementing sustainable fishing practices.
                </p>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <Label className="text-sm text-muted-foreground mb-2 block">Research Data Available</Label>
                <div className="flex gap-2 flex-wrap mt-2">
                  <Badge variant="outline">Genetic Sequences</Badge>
                  <Badge variant="outline">Migration Patterns</Badge>
                  <Badge variant="outline">Population Dynamics</Badge>
                  <Badge variant="outline">Breeding Behavior</Badge>
                  <Badge variant="outline">Diet Analysis</Badge>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end mt-6">
                <Button variant="outline" onClick={() => handleExport('pdf')}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button onClick={() => {
                  setSelectedSpecies(null);
                  toast({
                    title: "Dataset Access",
                    description: "Full dataset access requires authentication. Please contact research@blueinsights.com",
                  });
                }}>
                  Access Full Dataset
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}