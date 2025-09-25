import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import speciesGrid from "@/assets/species-grid.jpg";
export const SpeciesShowcase = () => {
  return <section id="species" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Marine Biodiversity Database
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over 500+ documented species with molecular-level insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="overflow-hidden border-border/50">
              <img src={speciesGrid} alt="Marine species collection" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Comprehensive Species Data</h3>
                <p className="text-muted-foreground mb-4">
                  Our database combines traditional taxonomy with cutting-edge genomic sequencing, 
                  providing researchers with unparalleled insights into marine life diversity and evolution.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Species Documented</div>
                </Card>
                <Card className="p-4 border-border/50">
                  <div className="text-3xl font-bold text-secondary mb-1">1M+</div>
                  <div className="text-sm text-muted-foreground">Genetic Sequences</div>
                </Card>
                <Card className="p-4 border-border/50">
                  <div className="text-3xl font-bold text-accent mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Future Vision</div>
                </Card>
                <Card className="p-4 border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Data Updates</div>
                </Card>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Fish</Badge>
                <Badge variant="secondary">Coral</Badge>
                <Badge variant="secondary">Mammals</Badge>
                <Badge variant="secondary">Invertebrates</Badge>
                <Badge variant="secondary">Plankton</Badge>
                <Badge variant="secondary">Algae</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};