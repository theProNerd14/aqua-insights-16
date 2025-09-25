import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// Darwin Core compliant schema for species data
const darwinCoreSchema = z.object({
  // Record-level terms
  recordedBy: z.string().min(1, 'Recorder name is required').max(255, 'Name too long'),
  recordNumber: z.string().optional(),
  eventDate: z.string().min(1, 'Date is required'),
  
  // Occurrence terms
  catalogNumber: z.string().optional(),
  occurrenceRemarks: z.string().max(500, 'Remarks too long').optional(),
  individualCount: z.number().min(1, 'Count must be at least 1').optional(),
  lifeStage: z.string().optional(),
  sex: z.string().optional(),
  
  // Taxon terms
  scientificName: z.string().min(1, 'Scientific name is required').max(255, 'Name too long'),
  kingdom: z.string().optional(),
  phylum: z.string().optional(),
  class: z.string().optional(),
  order: z.string().optional(),
  family: z.string().optional(),
  genus: z.string().optional(),
  species: z.string().optional(),
  vernacularName: z.string().max(255, 'Common name too long').optional(),
  
  // Location terms
  decimalLatitude: z.number().min(-90).max(90),
  decimalLongitude: z.number().min(-180).max(180),
  coordinateUncertaintyInMeters: z.number().min(0).optional(),
  locality: z.string().min(1, 'Locality is required').max(255, 'Locality too long'),
  habitat: z.string().max(500, 'Habitat description too long').optional(),
  waterBody: z.string().max(255, 'Water body name too long').optional(),
  minimumDepthInMeters: z.number().min(0).optional(),
  maximumDepthInMeters: z.number().min(0).optional(),
});

type DarwinCoreData = z.infer<typeof darwinCoreSchema>;

const DataCollection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<DarwinCoreData>({
    resolver: zodResolver(darwinCoreSchema),
    defaultValues: {
      recordedBy: '',
      recordNumber: '',
      eventDate: '',
      catalogNumber: '',
      occurrenceRemarks: '',
      individualCount: 1,
      lifeStage: '',
      sex: '',
      scientificName: '',
      kingdom: '',
      phylum: '',
      class: '',
      order: '',
      family: '',
      genus: '',
      species: '',
      vernacularName: '',
      decimalLatitude: 0,
      decimalLongitude: 0,
      coordinateUncertaintyInMeters: undefined,
      locality: '',
      habitat: '',
      waterBody: '',
      minimumDepthInMeters: undefined,
      maximumDepthInMeters: undefined,
    },
  });

  const onSubmit = async (data: DarwinCoreData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Submit to Supabase database
      console.log('Darwin Core Data:', data);
      
      toast({
        title: 'Success!',
        description: 'Species data has been recorded successfully.',
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit data. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent mb-4">
              Species Data Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Record marine species observations using Darwin Core standards for seamless data integration.
            </p>
          </div>

          <Card className="bg-card/95 backdrop-blur-lg border border-primary/20 shadow-ocean">
            <CardHeader>
              <CardTitle className="text-2xl">New Species Record</CardTitle>
              <CardDescription>
                Enter species observation data following Darwin Core format standards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Record Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Record Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="recordedBy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Recorded By *</FormLabel>
                            <FormControl>
                              <Input placeholder="Observer name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="recordNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Record Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Optional record number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="individualCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Individual Count</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="1" 
                                placeholder="1"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Taxonomic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Taxonomic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="scientificName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Scientific Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Genus species" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="vernacularName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Common Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Common name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="kingdom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Kingdom</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select kingdom" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Animalia">Animalia</SelectItem>
                                <SelectItem value="Plantae">Plantae</SelectItem>
                                <SelectItem value="Fungi">Fungi</SelectItem>
                                <SelectItem value="Protista">Protista</SelectItem>
                                <SelectItem value="Bacteria">Bacteria</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phylum"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phylum</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Chordata" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Location Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Location Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="decimalLatitude"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Latitude *</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                step="0.000001"
                                placeholder="e.g., 34.052235"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="decimalLongitude"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Longitude *</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                step="0.000001"
                                placeholder="e.g., -118.243685"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="locality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Locality *</FormLabel>
                            <FormControl>
                              <Input placeholder="Specific location description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="waterBody"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Water Body</FormLabel>
                            <FormControl>
                              <Input placeholder="Ocean, sea, or lake name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="minimumDepthInMeters"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Minimum Depth (meters)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="0"
                                step="0.1"
                                placeholder="0"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="maximumDepthInMeters"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Maximum Depth (meters)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="0"
                                step="0.1"
                                placeholder="0"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="habitat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Habitat Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the habitat where the species was observed..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="occurrenceRemarks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Occurrence Remarks</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Additional notes about this observation..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => form.reset()}
                      disabled={isSubmitting}
                    >
                      Reset Form
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-gradient-ocean hover:shadow-ocean transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Record'}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataCollection;