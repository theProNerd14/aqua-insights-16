import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Download, Quote, BookOpen, Waves, Database, Brain, Leaf, FileText, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock research data
const researchData = [
  {
    id: 1,
    title: "Deep Learning Models for Marine Species Identification",
    abstract: "Advanced neural networks achieving 96% accuracy in automated species recognition from underwater imagery, revolutionizing biodiversity monitoring across ocean ecosystems.",
    category: "AI & Data Science",
    tags: ["AI", "Computer Vision", "Species Recognition"],
    featured: true,
    date: "2024-03-15",
    authors: ["Dr. Sarah Chen", "Prof. Michael Torres"],
    doi: "10.1234/aquadata.2024.001"
  },
  {
    id: 2,
    title: "Impact of Microplastics on Coral Reef Ecosystems",
    abstract: "Comprehensive analysis of microplastic distribution in coral reef environments and their effects on coral health, symbiotic relationships, and reef resilience.",
    category: "Biodiversity & Species",
    tags: ["Coral Reefs", "Pollution", "Marine Biology"],
    featured: true,
    date: "2024-03-10",
    authors: ["Dr. Emily Rodriguez", "Dr. James Wilson"],
    doi: "10.1234/aquadata.2024.002"
  },
  {
    id: 3,
    title: "Sustainable Fishing Quotas Using Predictive Analytics",
    abstract: "Machine learning approaches to optimize fishing quotas while maintaining ecosystem balance and supporting local fishing communities' economic sustainability.",
    category: "Fisheries Management",
    tags: ["Sustainability", "Machine Learning", "Policy"],
    featured: true,
    date: "2024-03-05",
    authors: ["Prof. Ahmed Hassan", "Dr. Lisa Chang"],
    doi: "10.1234/aquadata.2024.003"
  },
  {
    id: 4,
    title: "Ocean Temperature Anomalies and Migration Patterns",
    abstract: "Real-time tracking of temperature variations and their correlation with marine species migration, revealing critical adaptation strategies in warming oceans.",
    category: "Oceanographic Studies",
    tags: ["Climate Change", "Migration", "Temperature"],
    featured: false,
    date: "2024-02-28",
    authors: ["Dr. Robert Johnson", "Dr. Maria Garcia"],
    doi: "10.1234/aquadata.2024.004"
  },
  {
    id: 5,
    title: "Molecular Barcoding of 500+ Marine Species",
    abstract: "Comprehensive genetic database creation using DNA barcoding techniques, establishing molecular fingerprints for biodiversity assessment and conservation.",
    category: "Biodiversity & Species",
    tags: ["Genetics", "DNA Barcoding", "Database"],
    featured: false,
    date: "2024-02-20",
    authors: ["Dr. Yuki Tanaka", "Prof. David Brown"],
    doi: "10.1234/aquadata.2024.005"
  },
  {
    id: 6,
    title: "AI-Powered Ocean Current Prediction Models",
    abstract: "Next-generation forecasting systems using deep learning to predict ocean currents with unprecedented accuracy, enhancing maritime safety and ecosystem understanding.",
    category: "AI & Data Science",
    tags: ["AI", "Ocean Currents", "Forecasting"],
    featured: false,
    date: "2024-02-15",
    authors: ["Dr. Anna Petrov", "Dr. Mark Lee"],
    doi: "10.1234/aquadata.2024.006"
  },
  {
    id: 7,
    title: "Policy Framework for Marine Protected Areas",
    abstract: "Evidence-based recommendations for establishing and managing marine protected areas, balancing conservation goals with socioeconomic considerations.",
    category: "Sustainability & Policy",
    tags: ["Policy", "Conservation", "MPA"],
    featured: false,
    date: "2024-02-10",
    authors: ["Prof. Rachel Green", "Dr. Thomas Anderson"],
    doi: "10.1234/aquadata.2024.007"
  },
  {
    id: 8,
    title: "Acoustic Monitoring of Whale Populations",
    abstract: "Passive acoustic monitoring networks for tracking whale populations and behavior, providing insights into communication patterns and habitat use.",
    category: "Biodiversity & Species",
    tags: ["Marine Mammals", "Acoustics", "Monitoring"],
    featured: false,
    date: "2024-02-05",
    authors: ["Dr. Jennifer Park", "Dr. Chris Martinez"],
    doi: "10.1234/aquadata.2024.008"
  }
];

const categories = [
  { value: "all", label: "All Research", icon: BookOpen },
  { value: "Oceanographic Studies", label: "Oceanographic Studies", icon: Waves },
  { value: "Fisheries Management", label: "Fisheries Management", icon: Database },
  { value: "Biodiversity & Species", label: "Biodiversity & Species", icon: FileText },
  { value: "AI & Data Science", label: "AI & Data Science", icon: Brain },
  { value: "Sustainability & Policy", label: "Sustainability & Policy", icon: Leaf }
];

export default function Research() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  const filteredResearch = useMemo(() => {
    return researchData.filter(item => {
      const matchesSearch = searchQuery === "" || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredResearch = researchData.filter(item => item.featured);

  const handleDownload = (research: typeof researchData[0]) => {
    toast({
      title: "Download Started",
      description: `Downloading: ${research.title}`,
    });
  };

  const handleCitation = (research: typeof researchData[0]) => {
    const citation = `${research.authors.join(", ")} (${new Date(research.date).getFullYear()}). ${research.title}. Aquadata Research Hub. DOI: ${research.doi}`;
    navigator.clipboard.writeText(citation);
    toast({
      title: "Citation Copied",
      description: "The citation has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ocean opacity-10 dark:opacity-30" />
        <div className="absolute inset-0 dark:gradient-glow opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 dark:gradient-aurora rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 dark:gradient-aurora rounded-full blur-2xl opacity-20 dark:opacity-30 animate-pulse delay-1000" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:dark-pulse">
              <span className="bg-gradient-ocean bg-clip-text text-transparent dark:text-primary">
                Explore Our Research
              </span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-foreground/80">
              Dive into our latest studies, datasets, and insights that power sustainable ocean management
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-12 bg-card/50 dark:bg-gradient-to-r dark:from-background dark:via-card/30 dark:to-background relative">
        <div className="absolute inset-0 dark:gradient-glow opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-8 dark:text-primary">Featured Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResearch.map((item, index) => (
              <Card key={item.id} className="border-primary/20 hover:border-primary/40 transition-all duration-300 dark:dark-floating dark:hover:dark-glow group dark:dark-shimmer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-gradient-ocean text-primary-foreground border-0 dark:shadow-glow">
                      Featured
                    </Badge>
                    <span className="text-sm text-muted-foreground dark:text-foreground/60">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors dark:text-foreground">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-3 dark:text-foreground/70">
                    {item.abstract}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="dark:bg-primary/20 dark:text-primary dark:border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-foreground/60">
                    {item.authors.join(", ")}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 dark:bg-primary dark:hover:bg-primary/80 dark:shadow-glow">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDownload(item)}
                    className="dark:border-primary/30 dark:hover:bg-primary/20 dark:hover:border-primary"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleCitation(item)}
                    className="dark:border-primary/30 dark:hover:bg-primary/20 dark:hover:border-primary"
                  >
                    <Quote className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 relative">
        <div className="absolute inset-0 dark:gradient-glow opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 dark:text-primary" />
              <Input
                placeholder="Search research papers, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 dark:bg-card dark:border-primary/30 dark:focus:border-primary dark:shadow-glow"
              />
            </div>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full lg:w-auto">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto dark:bg-card dark:border-primary/20">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <TabsTrigger
                      key={cat.value}
                      value={cat.value}
                      className="flex flex-col gap-1 py-2 dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground dark:hover:bg-primary/20 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs">{cat.label.split(" ")[0]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>
          </div>

          {/* Research Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResearch.map((item, index) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 dark:bg-card/80 dark:border-primary/20 dark:hover:border-primary/50 dark:hover:shadow-glow group dark:backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="dark:border-primary/40 dark:text-primary">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground dark:text-foreground/60">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors dark:text-foreground">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-2 dark:text-foreground/70">
                    {item.abstract}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs dark:bg-primary/15 dark:text-primary dark:border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-foreground/60">
                    {item.authors.join(", ")}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" className="flex-1 dark:bg-primary/80 dark:hover:bg-primary dark:text-primary-foreground">
                    Read More
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 dark:border-primary/30 dark:hover:bg-primary/20 dark:hover:border-primary"
                    onClick={() => handleDownload(item)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 dark:border-primary/30 dark:hover:bg-primary/20 dark:hover:border-primary"
                    onClick={() => handleCitation(item)}
                  >
                    <Quote className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredResearch.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground dark:text-foreground/60">No research papers found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="py-16 bg-gradient-ocean text-primary-foreground relative overflow-hidden dark:bg-gradient-to-r dark:from-primary/20 dark:via-primary/40 dark:to-primary/20">
        <div className="absolute inset-0 dark:gradient-aurora opacity-30" />
        <div className="absolute top-0 left-1/4 w-72 h-72 dark:bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 dark:text-primary dark:dark-pulse">
              Research for a Sustainable Future
            </h2>
            <p className="text-lg mb-8 opacity-90 dark:text-foreground/80">
              Every study we conduct contributes to our mission of sustainable ocean management. 
              Our research directly informs conservation policies, protects marine biodiversity, 
              and guides responsible resource utilization for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80 dark:shadow-glow">
                <Leaf className="w-5 h-5 mr-2" />
                Our Sustainability Goals
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 dark:border-primary dark:text-primary dark:hover:bg-primary/20 dark:hover:border-primary">
                <ExternalLink className="w-5 h-5 mr-2" />
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}